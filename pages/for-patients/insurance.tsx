
import PageLayout from "@/components/Layout";

export default function InsurancePayments() {
  return (
    <PageLayout title="Insurance & Payments" description="Insurance-friendly, transparent pricing, and flexible financing options.">
      <section className="section py-12 md:py-16 grid gap-6">
        <div className="glass rounded-3xl overflow-hidden">
          <img src="/insurance-payment-illustration.png" alt="Insurance and payment options" className="w-full h-64 object-cover" />
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <h1 className="h2">Insurance & Payments</h1>
          <p className="text-white/80 mt-3">
            We’re insurance-friendly and transparent. Our team will verify your benefits, provide clear estimates,
            and help you maximize coverage. If you don’t have insurance, our in-office membership plan keeps care affordable.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <a href="/contact#form" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Verify My Benefits</a>
            <a href="/contact" className="button-gold rounded-2xl px-5 py-3 text-center block">Request Cost Estimate</a>
            <a href="/membership" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Membership Plan</a>
            <a href="#financing" className="glass rounded-2xl p-4 text-center hover:bg-white/10 transition block">Financing Options</a>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="h2">Insurance We Accept</h2>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-white/85">
              <li>Most PPO dental plans</li>
              <li>We’ll file claims on your behalf</li>
              <li>Up-front, written estimates before treatment</li>
            </ul>
            <p className="text-white/70 text-sm mt-3">Unsure about your plan? <a href="/contact" className="underline">Contact us</a> and we’ll check your benefits.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Payment Methods</h3>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-white/85">
              <li>All major credit/debit cards</li>
              <li>HSA/FSA</li>
              <li>Contactless payments (Apple/Google Pay)</li>
            </ul>
          </div>
        </div>

        <div id="financing" className="glass rounded-3xl p-8 md:p-12">
          <h2 className="h2">Flexible Financing</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="glass rounded-2xl p-6">
              <h4 className="font-medium text-white">CareCredit®</h4>
              <p className="text-white/80 text-sm mt-2">Healthcare credit card with special financing options on approved credit.</p>
              <a href="/contact" className="inline-block mt-3 button-gold rounded-2xl px-4 py-2 text-sm">Ask About CareCredit</a>
            </div>
            <div className="glass rounded-2xl p-6">
              <h4 className="font-medium text-white">Sunbit</h4>
              <p className="text-white/80 text-sm mt-2">Fast approvals with soft-check pre-qualification—great for smaller monthly payments.</p>
              <a href="/contact" className="inline-block mt-3 button-gold rounded-2xl px-4 py-2 text-sm">Ask About Sunbit</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
