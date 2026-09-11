const testimonials = [
  {
    name: "Mrs. Sharma",
    role: "Parent, Class 7",
    quote:
      "Teachers know my daughter by name and by strength. Her confidence has doubled in one year.",
  },
  {
    name: "Mr. Verma",
    role: "Parent, Class 10",
    quote:
      "Board prep started early and stayed stress-free. WhatsApp updates kept us involved daily.",
  },
  {
    name: "Ananya S.",
    role: "Alumni, Batch of 2024",
    quote:
      "I got into a top college because of the foundation built here. Forever grateful to my teachers.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy">What parents say</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
