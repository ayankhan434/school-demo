const programs = [
  {
    title: "Early years",
    grades: "Play Group – KG",
    desc: "Play-way learning, phonics, rhymes & motor skills — joy-first foundations, zero pressure.",
    highlight: false,
  },
  {
    title: "Primary",
    grades: "Class 1 – 5",
    desc: "Strong reading, writing & maths basics. Activity corners, art, and moral stories daily.",
    highlight: false,
  },
  {
    title: "Middle school",
    grades: "Class 6 – 8",
    desc: "Concept clarity in Science & Maths, computer classes, spoken English & sports training.",
    highlight: false,
  },
  {
    title: "Secondary",
    grades: "Class 9 – 10",
    desc: "Board-focused prep, test series, doubt sessions & career guidance. 98% pass rate.",
    highlight: true,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Programs
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy">
            Play Group to Class 10 — every stage covered
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-md ${
                p.highlight
                  ? "bg-navy text-white shadow-lg"
                  : "border border-slate-100 bg-white shadow-sm"
              }`}
            >
              <h3 className={`font-semibold ${p.highlight ? "text-gold" : "text-navy"}`}>
                {p.title}
              </h3>
              <p className={`mt-1 text-xs font-medium uppercase tracking-wide ${p.highlight ? "text-white/70" : "text-gold-dark"}`}>
                {p.grades}
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${p.highlight ? "text-white/85" : "text-slate-600"}`}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
