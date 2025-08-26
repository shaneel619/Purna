
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

type NavItem = { label:string; href?:string; children?:{label:string; href:string}[] };

const nav:NavItem[] = [
  {label:"Home", href:"/"},
  {label:"About Us", href:"/about"},
  {label:"Services", href:"/services"},
  {label:"For Patients", children:[
    {label:"New Patients", href:"/for-patients/new"},
    {label:"Insurance & Payments", href:"/for-patients/insurance"},
    {label:"Blog", href:"/for-patients/blog"},
  ]},
  {label:"Contact", href:"/contact"}
];

export default function PageLayout({children,title,description}:{children:React.ReactNode,title?:string,description?:string}){
  const [open,setOpen]=useState(false);
  const [openPatients,setOpenPatients]=useState(false);
  return <div className="min-h-screen flex flex-col bg-bg">
    <Head>
      <title>{title?`${title} | Rocklin Comprehensive Dentistry`:"Rocklin Comprehensive Dentistry"}</title>
      {description && <meta name="description" content={description}/>}
      {/* Basic SEO/OG */}
      <meta property="og:site_name" content="Rocklin Comprehensive Dentistry"/>
      <meta property="og:title" content={title?`${title} | RCD`:"Rocklin Comprehensive Dentistry"}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="/RClogo.png"/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"Dentist",
        "name":"Rocklin Comprehensive Dentistry",
        "telephone":"+1-916-315-3558",
        "address":{"@type":"PostalAddress","streetAddress":"4750 Rocklin Rd Suite 100","addressLocality":"Rocklin","addressRegion":"CA","postalCode":"95677"},
        "url":"https://example.com",
        "openingHoursSpecification":[
          {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday"],"opens":"07:00","closes":"16:00"},
          {"@type":"OpeningHoursSpecification","dayOfWeek":"Friday","opens":"07:00","closes":"13:00"}
        ]
      })}} />
    </Head>
    <header className="sticky top-0 z-50 header-glass">
      <div className="section py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/RClogo.png" className="h-10 w-auto" alt="RCD logo"/>
          <div className="leading-tight">
            <div className="font-serif text-xl" style={{color:"#C8A86B"}}>Rocklin Comprehensive Dentistry</div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/70">Smiles that last a lifetime</div>
          </div>
        </Link>
        {/* Desktop nav with dropdown */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n,i)=> n.children ? (
            <div key={i} className="relative group">
              <button className="flex items-center gap-1 text-white/85 hover:text-white">
                {n.label} <ChevronDown className="w-4 h-4"/>
              </button>
              <div className="absolute left-0 mt-2 min-w-[220px] glass rounded-2xl p-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                {n.children.map(c=>(<Link key={c.href} href={c.href} className="block px-3 py-2 rounded-lg hover:bg-white/10">{c.label}</Link>))}
              </div>
            </div>
          ) : (
            <Link key={i} href={n.href!} className="text-white/85 hover:text-white">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+19163153558" className="hidden lg:flex items-center gap-2 text-white/80 hover:text-white text-sm"><Phone className="w-4 h-4"/>(916) 315-3558</a>
          <a href="/contact#form" className="rounded-2xl px-5 py-2 text-sm button-gold">Make Appointment</a>
        </div>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-xl bg-white/10">{open? <X/> : <Menu/>}</button>
      </div>
      {/* Mobile nav */}
      {open && (
        <div className="md:hidden header-glass">
          <div className="section py-4 grid gap-3">
            <Link href="/" className="py-2 border-b border-white/10">Home</Link>
            <Link href="/about" className="py-2 border-b border-white/10">About Us</Link>
            <Link href="/services" className="py-2 border-b border-white/10">Services</Link>
            <button onClick={()=>setOpenPatients(v=>!v)} className="py-2 border-b border-white/10 text-left">For Patients {openPatients? "▴":"▾"}</button>
            {openPatients && (
              <div className="pl-3 grid gap-2">
                <Link href="/for-patients/new" className="py-1">New Patients</Link>
                <Link href="/for-patients/insurance" className="py-1">Insurance & Payments</Link>
                <Link href="/for-patients/blog" className="py-1">Blog</Link>
              </div>
            )}
            <Link href="/contact" className="py-2">Contact</Link>
          </div>
        </div>
      )}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="glass mt-16"><div className="section py-8 text-sm text-white/80">© {new Date().getFullYear()} Rocklin Comprehensive Dentistry</div></footer>
  </div>;
}
