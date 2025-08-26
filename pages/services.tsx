
import PageLayout from "@/components/Layout";

const services = [
  { slug: "preventive-family", title: "Preventive & Family Dentistry", blurb: "Gentle, thorough care for children, teens, and adults—cleanings, exams, x-rays, fluoride, and sealants to keep smiles healthy." },
  { slug: "periodontal", title: "Periodontal Care / Gum Disease Treatment", blurb: "Healthy gums are the foundation of a healthy smile—evaluations, deep cleanings (scaling & root planing), and ongoing maintenance." },
  { slug: "restorative-cerec", title: "Restorative Dentistry & Same-Day Crowns", blurb: "Tooth-colored fillings, bridges, and CEREC crowns in a single visit. Extractions when necessary." },
  { slug: "dentures-partials", title: "Dentures & Partial Dentures", blurb: "Comfortable, esthetic options—full dentures, flexible/metal partials, and implant-supported dentures." },
  { slug: "cosmetic", title: "Cosmetic Dentistry", blurb: "Whitening, porcelain veneers, bonding, and custom smile makeovers for confident esthetics." },
  { slug: "implants", title: "Dental Implants", blurb: "Single implants and implant-supported bridges/dentures—consultations and long-term care." },
  { slug: "root-canal", title: "Root Canal Therapy", blurb: "Relieve severe tooth pain and save your natural tooth with gentle care and digital diagnostics." },
  { slug: "orthodontics", title: "Orthodontics – Braces & Clear Aligners", blurb: "Options for all ages—traditional braces or clear aligners with customized plans." },
  { slug: "comfort-nitrous", title: "Nitrous Oxide & Patient Comfort", blurb: "Light, safe relaxation to make treatment calm and stress-free." },
  { slug: "technology-digital", title: "Technology & Digital Dentistry", blurb: "CBCT 3D imaging, digital impressions (no messy molds), and CEREC same-day restorations." },
  { slug: "emergency", title: "Emergency Dentistry", blurb: "Same-day urgent care for toothaches, abscesses, broken or knocked-out teeth." },
];

export default function Services(){
  return (
    <PageLayout title="Services" description="Preventive, restorative, cosmetic, implants, orthodontics, emergency care, and more.">
      <section className="section py-12 md:py-16 grid gap-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h1 className="h2">Our Services</h1>
          <p className="text-white/80 mt-3">From routine care to advanced treatment, Rocklin Comprehensive Dentistry provides comprehensive, family-friendly dentistry using modern technology and a gentle approach. Explore our services below.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => (
            <a key={s.slug} href={`/services#${s.slug}`} className="group glass rounded-3xl p-6 flex flex-col gap-3 hover:bg:white/10 transition">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl leading-tight max-w-[80%]">{s.title}</h3>
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 border border:white/10 grid place-items-center">→</div>
              </div>
              <p className="text-white/80 text-sm">{s.blurb}</p>
              <span className="text-white/70 text-xs">Learn more</span>
            </a>
          ))}
        </div>

        <div className="grid gap-6 mt-2">
          <article id="preventive-family" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Preventive & Family Dentistry</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Complete dental exams and professional cleanings</li>
              <li>Digital x-rays and diagnostic imaging</li>
              <li>Fluoride treatments and protective sealants</li>
              <li>Night guards and athletic mouthguards</li>
            </ul>
          </article>

          <article id="periodontal" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Periodontal Care / Gum Disease Treatment</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Comprehensive gum evaluations</li>
              <li>Scaling & root planing (deep cleaning) to remove bacteria and tartar</li>
              <li>Ongoing periodontal maintenance and education</li>
            </ul>
          </article>

          <article id="restorative-cerec" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Restorative Dentistry & Same-Day Crowns</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Tooth-colored fillings</li>
              <li>Dental bridges and crowns</li>
              <li>Same-day crowns with CEREC CAD/CAM technology—custom crowns in one visit</li>
              <li>Tooth extractions when necessary</li>
            </ul>
          </article>

          <article id="dentures-partials" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Dentures & Partial Dentures</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Traditional full dentures—custom-fit for comfort and esthetics</li>
              <li>Partial dentures—flexible and metal designs</li>
              <li>Implant-supported dentures (snap-on) for added stability</li>
            </ul>
          </article>

          <article id="cosmetic" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Cosmetic Dentistry</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Professional whitening for fast results</li>
              <li>Porcelain veneers and bonding to fix chips and gaps</li>
              <li>Customized smile makeovers</li>
            </ul>
          </article>

          <article id="implants" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Dental Implants</h2>
            <ul className="list-disc pl-5 mt-3 text:white/85 space-y-1">
              <li>Single-tooth implants</li>
              <li>Implant-supported bridges and dentures</li>
              <li>Consultations and ongoing care</li>
            </ul>
          </article>

          <article id="root-canal" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Root Canal Therapy</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Diagnosis using digital x-rays and 3D imaging</li>
              <li>Gentle root canal treatment to save your tooth</li>
              <li>Healing and follow-up guidance</li>
            </ul>
          </article>

          <article id="orthodontics" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Orthodontics – Braces & Clear Aligners</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Traditional braces for kids, teens, and adults</li>
              <li>Clear aligner therapy with an experienced orthodontist</li>
              <li>Customized treatment plans</li>
            </ul>
          </article>

          <article id="comfort-nitrous" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Nitrous Oxide & Patient Comfort</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Nitrous oxide ('laughing gas') to reduce anxiety</li>
              <li>Safe and effective for children and adults</li>
              <li>Helps make procedures stress-free</li>
            </ul>
          </article>

          <article id="technology-digital" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Technology & Digital Dentistry</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Cone Beam 3D Imaging (CBCT) for implants and surgical planning</li>
              <li>Digital impressions – no messy molds</li>
              <li>CEREC CAD/CAM for same-day crowns and restorations</li>
            </ul>
          </article>

          <article id="emergency" className="glass rounded-3xl p-8 md:p-12">
            <h2 className="h2">Emergency Dentistry</h2>
            <ul className="list-disc pl-5 mt-3 text-white/85 space-y-1">
              <li>Toothaches and abscesses</li>
              <li>Broken or knocked-out teeth</li>
              <li>Same-day urgent care and pain relief</li>
            </ul>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
