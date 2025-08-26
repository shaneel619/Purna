
import PageLayout from "@/components/Layout";

export default function Contact(){
  return (
    <PageLayout title="Contact" description="Get in touch with Rocklin Comprehensive Dentistry.">
      <section className="section py-12 md:py-16 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-8 md:p-12" id="form">
          <h1 className="h2">Contact Us</h1>
          <form className="grid gap-3 mt-4">
            <input className="glass rounded-xl p-3" placeholder="Full Name" required/>
            <input className="glass rounded-xl p-3" placeholder="Email" type="email" required/>
            <input className="glass rounded-xl p-3" placeholder="Phone" type="tel"/>
            <textarea className="glass rounded-xl p-3 h-32" placeholder="How can we help?" required></textarea>
            <button className="button-gold rounded-2xl px-5 py-3 w-max">Send Message</button>
          </form>
          <div className="mt-6 text-white/80 text-sm">
            4750 Rocklin Rd Suite 100, Rocklin, CA 95677 — (916) 315-3558 — info@rcdentistry.com
          </div>
        </div>
        <div className="glass rounded-3xl overflow-hidden">
          <iframe src="https://www.google.com/maps?q=4750%20Rocklin%20Rd%20Suite%20100,%20Rocklin,%20CA%2095677&output=embed" className="w-full h-[400px]" loading="lazy"></iframe>
        </div>
      </section>
    </PageLayout>
  );
}
