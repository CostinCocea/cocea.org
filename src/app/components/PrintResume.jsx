"use client";
import { Printer } from 'lucide-react';
export default function PrintResume() { return <button className="print-button" type="button" onClick={()=>window.print()}><Printer size={16} />Print / Save PDF</button>; }
