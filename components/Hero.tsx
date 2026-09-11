import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-95" />
     
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10" />
      <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:py-28 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Admissions open 2026–27
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Where young minds{" "}
            <span className="text-gold">rise and shine</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/80 lg:mx-0">
            Play Group to Class 10 — strong academics, Indian values, and a
            campus where every child is known by name.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#admissions"
              className="rounded-full bg-gold px-6 py-3 font-semibold text-navy transition hover:bg-gold-dark"
            >
              Enquire now
            </a>
            {/* WhatsApp CTA  */}
            <a
              href="https://wa.me/9198XXXXXXXX?text=Hi%2C%20I%20want%20admission%20details"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              WhatsApp us
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-white/70 lg:justify-start">
            <span className="rounded-full border border-white/15 px-3 py-1">✔ 25+ years</span>
            <span className="rounded-full border border-white/15 px-3 py-1">✔ Experienced faculty</span>
            <span className="rounded-full border border-white/15 px-3 py-1">✔ Safe campus</span>
            <span className="rounded-full border border-white/15 px-3 py-1">✔ Small class sizes</span>
          </div>
        </div>

       
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
  <Image
    src="/images/campus.jpg"
    alt="School campus"
    fill
    className="object-cover"
    priority
  />
</div>
      </div>
    </section>
  );
}
