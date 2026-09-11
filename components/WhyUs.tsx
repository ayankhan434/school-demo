const features = [
  {
    icon: "🎓",
    title: "Experienced faculty",
    desc: "Trained, caring teachers who know every child by name — and by strength.",
  },
  {
    icon: "📱",
    title: "Parent updates on WhatsApp",
    desc: "Homework, notices, results & attendance — directly on parents' phones.",
  },
  {
    icon: "🏆",
    title: "Proven results",
    desc: "Consistent 98% board pass rate with district toppers year after year.",
  },
  {
    icon: "🧘",
    title: "Values + modern curriculum",
    desc: "Strong academics with moral values, yoga, and co-curricular growth.",
  },
  {
    icon: "🔒",
    title: "Safe & secure campus",
    desc: "CCTV-monitored premises, verified staff, and strict pick-up protocols.",
  },
  {
    icon: "⚽",
    title: "Sports & activities",
    desc: "Daily sports, annual function, competitions — confident kids, not just toppers.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Why parents choose us
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy">
            More than just a school
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-3 font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
