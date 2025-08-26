
import PageLayout from "@/components/Layout";

export default function NewPatients() {
  return (
    <PageLayout
      title="New Patients"
      description="First visit info, online forms, insurance-friendly options, CareCredit & Sunbit, and a membership plan."
    >
      <section className="section py-12 md:py-16 grid gap-6">
        <div className="glass rounded-3xl p-8 md:p-12">
          <p className="text-white/80">
            Learn what to expect at your first visit to Rocklin Comprehensive Dentistry. We make dental care simple with online forms,
            insurance-friendly payment options, CareCredit and Sunbit financing, and an affordable membership plan.
            Call <a href="tel:+19163153558" className="underline">(916) 315-3558</a>.
          </p>

          <h1 className="h2 mt-6">Welcome to Your New Dental Home</h1>
          <div className="grid md:grid-cols-2 gap-8 mt-6 items-center">
            <div>
              <p className="text-white/80 mt-3">
                We’re excited to welcome you to Rocklin Comprehensive Dentistry. Whether you’re new to the area or simply looking for a dental team that treats you like family,
                we’re here to make your experience comfortable, efficient, and stress-free.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg mask-radial-soft">
              <img src="/team.jpg" alt="Our dental team" className="w-full object-cover" />
            </div>
          </div>

          <h2 className="h2 mt-10">What to Expect at Your First Visit</h2>
          <ul className="list-disc pl-5 mt-3 space-y-1 text-white/85">
            <li>A warm greeting and tour of the office</li>
            <li>Review of your medical and dental history</li>
            <li>Comprehensive exam and digital x-rays</li>
            <li>A professional cleaning (if scheduled)</li>
            <li>Plenty of time to discuss questions or concerns</li>
          </ul>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a href="/for-patients/insurance" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Insurance & Payments</a>
            <a href="/membership" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Membership Plan</a>
            <a href="/contact" className="button-gold rounded-2xl px-5 py-3 text-center block">Request Cost Estimate</a>
            <a href="#forms" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Patient Forms (coming soon)</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
