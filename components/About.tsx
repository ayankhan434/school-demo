export default function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            About us
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-navy">
            A place to learn, grow, and belong
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Founded in 1998, Sunrise Public School has been a trusted name in
            [City]'s education. We believe a child is more than a marksheet —
            so we blend strong academics with values, sports, and life skills.
          </p>
          <ul className="mt-6 space-y-2.5 text-slate-700">
            <li className="flex gap-2"><span className="text-gold-dark">✔</span> Play Group to Class 10 · Recognized board</li>
            <li className="flex gap-2"><span className="text-gold-dark">✔</span> Smart classrooms &amp; activity-based learning</li>
            <li className="flex gap-2"><span className="text-gold-dark">✔</span> Limited students per class — real attention</li>
            <li className="flex gap-2"><span className="text-gold-dark">✔</span> Transport facility across [City]</li>
          </ul>
        </div>

    
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-gold">
              P
            </div>
            <div>
              <p className="font-semibold text-navy">Principal's message</p>
              <p className="text-xs text-slate-500">[Principal name], M.A., B.Ed.</p>
            </div>
          </div>
          <blockquote className="mt-4 text-sm italic leading-relaxed text-slate-700">
            "Every child who walks through our gate carries a dream. Our job is
            to protect that dream and give it wings — with discipline, warmth,
            and the right guidance. I personally invite you to visit our campus
            and see the difference yourself."
          </blockquote>
          <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-slate-200 text-xs text-slate-400">
            [ Campus photo / principal photo ]
          </div>
        </div>
      </div>
    </section>
  );
}
