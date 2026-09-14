"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { DotScreenShader } from './CustomShader';
import shaders from './shaders/shaders.json';

// Visual and shaders adapted from andreiilinescu/portfolio-website.
export default function ShaderSphere() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'}); }
    catch { return; } // Keep the readable CSS background if WebGL is unavailable.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden','true');
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70,1,.1,1000);
    camera.position.set(0,0,1);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(pointer:fine)');
    const controls = new OrbitControls(camera,renderer.domElement);
    controls.enableZoom=false; controls.enablePan=false;
    controls.enableDamping=true; controls.dampingFactor=.08;
    controls.enabled=pointer.matches && !reducedMotion.matches;
    // Touch scrolling remains on the page, never on document.body orbit controls.
    renderer.domElement.style.touchAction='pan-y';
    const material = new THREE.ShaderMaterial({
      vertexShader:shaders['vertex.glsl'],fragmentShader:shaders['fragment.glsl'],side:THREE.DoubleSide,
      uniforms:{time:{value:0},resolution:{value:new THREE.Vector4()},baseFirst:{value:new THREE.Color('#8b91e0')},baseSecond:{value:new THREE.Color('#e09442')},accent:{value:new THREE.Color('#363636')}},
    });
    const geometry = new THREE.SphereGeometry(1.5,64,64);
    scene.add(new THREE.Mesh(geometry,material));
    const target = new THREE.WebGLCubeRenderTarget(256,{format:THREE.RGBAFormat,generateMipmaps:true,minFilter:THREE.LinearMipmapLinearFilter});
    const cubeCamera = new THREE.CubeCamera(.1,10,target);
    const reflection = new THREE.ShaderMaterial({
      vertexShader:shaders['vertex1.glsl'],fragmentShader:shaders['fragment1.glsl'],side:THREE.DoubleSide,
      uniforms:{time:{value:0},tCube:{value:target.texture},mRefractionRatio:{value:1.02},mFresnelBias:{value:.2},mFresnelScale:{value:3},mFresnelPower:{value:2},resolution:{value:new THREE.Vector4()}},
    });
    const orbGeometry = new THREE.SphereGeometry(.4,64,64);
    const orb = new THREE.Mesh(orbGeometry,reflection);
    orb.position.set(.4,0,0); scene.add(orb);
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene,camera);
    const noisePass = new ShaderPass(DotScreenShader);
    noisePass.uniforms.scale.value=4;
    composer.addPass(renderPass); composer.addPass(noisePass);
    let frame=0, last=0, elapsed=0, disposed=false, contextLost=false;
    function render(deltaSeconds = 1 / 60) {
      if(disposed || contextLost) return;
      // Preserve the same drag settling time on 60 Hz and high-refresh displays.
      controls.dampingFactor = 1 - Math.pow(1 - .08, deltaSeconds * 60);
      controls.update(); material.uniforms.time.value=elapsed; reflection.uniforms.time.value=elapsed;
      orb.visible=false; cubeCamera.update(renderer,scene); orb.visible=true; composer.render();
    }
    function animate(now) {
      if(disposed || contextLost || reducedMotion.matches || document.hidden) {frame=0;return;}
      // Render every display frame. The reference advances .01 at 60 fps;
      // elapsed time keeps that speed at 120 Hz without dropping alternate frames.
      const deltaSeconds = Math.min(Math.max((now-last)/1000, 0), .1);
      elapsed += deltaSeconds * .6;
      last = now;
      render(deltaSeconds);
      frame=requestAnimationFrame(animate);
    }
    function syncMotion() {
      cancelAnimationFrame(frame); frame=0;
      controls.enabled=pointer.matches && !reducedMotion.matches;
      if(!document.hidden && !contextLost) {render();last=performance.now();if(!reducedMotion.matches)frame=requestAnimationFrame(animate);}
    }
    function resize() {
      const w=container.clientWidth,h=container.clientHeight;
      if(!w || !h) return;
      renderer.setSize(w,h);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();render();
    }
    function updateTheme() {
      const css=getComputedStyle(document.documentElement);
      material.uniforms.baseFirst.value.set(css.getPropertyValue('--gradient-color-1').trim());
      material.uniforms.baseSecond.value.set(css.getPropertyValue('--gradient-color-2').trim());
      material.uniforms.accent.value.set(css.getPropertyValue('--gradient-color-3').trim());
      const dark=document.documentElement.dataset.theme==='dark';
      reflection.uniforms.mFresnelScale.value=dark?3:4;reflection.uniforms.mFresnelBias.value=dark?.2:.1;render();
    }
    function loseContext(event) {event.preventDefault();contextLost=true;cancelAnimationFrame(frame);renderer.domElement.style.opacity='0';}
    function restoreContext() {contextLost=false;renderer.domElement.style.opacity='1';resize();syncMotion();}
    const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);
    const themeObserver=new MutationObserver(updateTheme);themeObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    reducedMotion.addEventListener('change',syncMotion);pointer.addEventListener('change',syncMotion);
    document.addEventListener('visibilitychange',syncMotion);
    renderer.domElement.addEventListener('webglcontextlost',loseContext);
    renderer.domElement.addEventListener('webglcontextrestored',restoreContext);
    resize();updateTheme();syncMotion();
    return () => {
      disposed=true;cancelAnimationFrame(frame);resizeObserver.disconnect();themeObserver.disconnect();
      reducedMotion.removeEventListener('change',syncMotion);pointer.removeEventListener('change',syncMotion);document.removeEventListener('visibilitychange',syncMotion);
      renderer.domElement.removeEventListener('webglcontextlost',loseContext);renderer.domElement.removeEventListener('webglcontextrestored',restoreContext);
      controls.dispose();geometry.dispose();orbGeometry.dispose();material.dispose();reflection.dispose();target.dispose();noisePass.dispose();composer.dispose();renderer.dispose();renderer.domElement.remove();
    };
  },[]);
  return <div ref={containerRef} className="shader-surface" />;
}
