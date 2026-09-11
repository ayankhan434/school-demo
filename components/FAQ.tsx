const faqs = [
  {
    q: "What is the admission process?",
    a: "Fill the enquiry form or WhatsApp us. Our office calls you within 24 hours, schedules a campus visit, and completes simple documentation. No donation, no entrance test for early classes.",
  },
  {
    q: "What classes does the school offer?",
    a: "Play Group to Class 10. Each class has limited seats to keep class sizes small and attention personal.",
  },
  {
    q: "What are the fees?",
    a: "Affordable, transparent fee structure with easy monthly options. Fee details are shared during the campus visit — no hidden charges, ever.",
  },
  {
    q: "Is transport available?",
    a: "Yes, GPS-tracked school transport covers major areas of [City], with a trained attendant on every route.",
  },
  {
    q: "How do parents get updates?",
    a: "Through WhatsApp — homework, notices, results and attendance. Regular parent-teacher meetings every term.",
  },
  {
    q: "What are the school timings?",
    a: "Monday to Saturday, 8:00 AM – 2:00 PM. Admission office: 9 AM – 2 PM on working days.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy">
            Parents ke common sawaal
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm open:border-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-navy">
                {f.q}
                <span className="text-gold-dark transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
