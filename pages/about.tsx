
import PageLayout from "@/components/Layout";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const team = [
    { name: "Sarah Johnson", role: "Treatment Coordinator", img: "/member-1.jpg", bio: "Sarah ensures each patient feels welcome from the moment they walk in. She helps patients understand treatment options and organizes a smooth care journey." },
    { name: "Emily Davis", role: "Registered Dental Assistant", img: "/member-2.jpg", bio: "Emily assists Dr. Patel chairside, making procedures efficient and comfortable. She is passionate about patient comfort and clinical precision." },
    { name: "Mina Koury", role: "Dental Hygienist", img: "/member-3.jpg", bio: "Mina provides gentle cleanings and focuses on preventive care. She enjoys teaching patients about long-term oral health habits." },
    { name: "Jessica Lee", role: "Patient Care Coordinator", img: "/member-4.jpg", bio: "Jessica manages scheduling and benefits, ensuring patients have clarity with insurance and appointments while feeling at ease." },
    { name: "Hannah Moore", role: "Office Manager", img: "/member-5.jpg", bio: "Hannah oversees the day-to-day operations of the practice. She works hard to create a friendly and efficient office environment." },
    { name: "Michael Carter", role: "Financial Coordinator", img: "/member-6.jpg", bio: "Michael guides patients through financing and payment options, ensuring dental care remains accessible and stress-free." }
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const cardWidth = 320;
  const go = (dir:number) => setIndex(i => Math.min(Math.max(i+dir,0), Math.max(team.length-1,0)));
  useEffect(()=>{ const el=trackRef.current; if(el) el.scrollTo({left:index*(cardWidth+16), behavior:"smooth"}); }, [index]);
  useEffect(()=>{
    const el=trackRef.current; if(!el) return;
    let startX=0;
    const start=(e:TouchEvent)=>{ startX=e.touches[0].clientX; };
    const move=(e:TouchEvent)=>{ const dx=e.touches[0].clientX-startX; if(Math.abs(dx)>80){ go(dx<0?1:-1); startX=e.touches[0].clientX; } };
    el.addEventListener("touchstart", start, {passive:true}); el.addEventListener("touchmove", move, {passive:true});
    return ()=>{ el.removeEventListener("touchstart", start as any); el.removeEventListener("touchmove", move as any); };
  }, []);

  return (
    <PageLayout title="About Us" description="Learn about Rocklin Comprehensive Dentistry, Dr. Purna Patel, and our caring team.">
      <section className="section py-12 md:py-16 grid gap-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <h1 className="h2">About Rocklin Comprehensive Dentistry</h1>
          <p className="text-white/80 mt-4">
            At Rocklin Comprehensive Dentistry, we are proud to be a privately owned practice dedicated to building long-term relationships with our patients. You’re more than just a patient—you’re part of our family. Our caring team is passionate about creating an experience that is welcoming, gentle, and tailored to you.
          </p>
          <p className="text-white/80 mt-4">
            Our mission: <em>“To provide state-of-the-art dental care while educating our patients and building lifelong relationships through gentle, compassionate service.”</em>
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="h2 mb-4">Meet Our Doctor</h2>
            <p className="text-white/80">
              Dr. Purna Patel was born and raised in India, where she completed her early dental education and graduated with honors. She later earned her Doctor of Dental Surgery (DDS) at the University of California, San Francisco (UCSF). With a background shaped by international experience, Dr. Patel’s care philosophy centers on compassion, precision, and building trust with her patients.
            </p>
            <p className="text-white/80 mt-4">
              Outside of dentistry, Dr. Patel enjoys hiking in the Sierra mountains, reading, listening to podcasts, and caring for her plants.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg mask-radial-soft">
            <img src="/DSC_7508.png" alt="Dr. Purna Patel" className="w-full object-cover" />
          </div>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <h2 className="h2 mb-6 text-center">Meet Our Team</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg mask-radial-soft max-w-4xl mx-auto">
            <img src="/team2.jpg" alt="Rocklin Comprehensive Dentistry Team" className="w-full object-cover" />
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-2xl">Our Team Members</h3>
              <div className="flex gap-2">
                <button onClick={()=>go(-1)} className="glass rounded-xl px-3 py-2 text-sm">Prev</button>
                <button onClick={()=>go(1)} className="glass rounded-xl px-3 py-2 text-sm">Next</button>
              </div>
            </div>
            <div ref={trackRef} className="overflow-x-auto snap-x snap-mandatory hide-scrollbar" style={{scrollBehavior:"smooth"}}>
              <div className="flex gap-4">
                {team.map(m => (
                  <article key={m.name} className="min-w-[320px] w-[320px] snap-start glass rounded-2xl p-4">
                    <div className="rounded-xl overflow-hidden bg-black/20 aspect-[4/3] mb-3">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-white/70 text-sm">{m.role}</div>
                    <p className="text-white/80 text-sm mt-2">{m.bio}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
