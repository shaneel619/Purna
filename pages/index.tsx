
import PageLayout from "@/components/Layout";

const heroSlides = [
  { src: "/team.jpg", alt: "Team at Rocklin Comprehensive Dentistry" },
  { src: "/DSC_7508.png", alt: "Dr. Purna Patel" },
  { src: "/frontcommon.png", alt: "Front desk and reception" },
];

export default function HomePage(){
  return (
    <PageLayout title="Home" description="Comfort-focused dentistry in Rocklin, CA.">
      <section className="section pt-10 md:pt-14 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-6 glass rounded-3xl p-8 md:p-12">
          <h1 className="h1">Smiles that last a lifetime</h1>
          <p className="text-white/80 mt-4">One doctor. One office. Your whole family.</p>
          <a href="/contact#form" className="inline-block mt-6 rounded-2xl px-6 py-3 button-gold text-sm">Make Appointment</a>
        </div>
        <div className="md:col-span-6 relative h-[360px] md:h-[480px] glass rounded-3xl overflow-hidden">
          {heroSlides.map((s,i)=>(
            <img key={s.src} src={s.src} alt={s.alt} className={`absolute inset-0 w-full h-full object-cover mask-radial-soft ${i===0?'opacity-100':'opacity-0'}`} />
          ))}
        </div>
      </section>

      <section className="section mt-10 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8">
          <h2 className="h2">Office Hours</h2>
          <ul className="mt-3 space-y-1 text-white/85">
            <li>Monday – Thursday: 7:00 AM – 4:00 PM</li>
            <li>Friday: 7:00 AM – 1:00 PM</li>
            <li>Saturday & Sunday: Closed</li>
          </ul>
        </div>
        <div className="glass rounded-3xl overflow-hidden">
          <iframe src="https://www.google.com/maps?q=4750%20Rocklin%20Rd%20Suite%20100,%20Rocklin,%20CA%2095677&output=embed" className="w-full h-[300px]" loading="lazy"></iframe>
        </div>
      </section>
    </PageLayout>
  );
}
