import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {unoptimized:true},
  devIndicators:false,
  pageExtensions:['js','jsx','mdx','ts','tsx'],
};
export default createMDX({extension:/\.mdx?$/,options:{remarkPlugins:[remarkGfm],rehypePlugins:[]}})(nextConfig);
