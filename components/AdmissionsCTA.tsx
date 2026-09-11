export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="bg-navy py-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <span className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            Limited seats — 2026–27
          </span>
          <h2 className="mt-4 text-3xl font-semibold">
            Book your child's seat today
          </h2>
          <p className="mt-3 text-white/80">
            Fill the form — our office calls you within 24 hours. Or visit the
            campus any working day, 9 AM to 2 PM.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p>📞 +91 98XXX XXXXX</p>
            <p>✉️ admissions@sunriseschool.in</p>
            <p>📍 [School address, your city]</p>
          </div>
          <a
            href="https://wa.me/9198XXXXXXXX?text=Hi%2C%20I%20want%20admission%20details"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
          <p className="mt-3 text-xs text-white/50">
            Enquiry seedha office ke WhatsApp pe jaati hai — koi lead miss nahi hoti.
          </p>
        </div>

        <form className="rounded-2xl bg-white p-6 text-slate-800 shadow-xl">
          <h3 className="text-lg font-semibold text-navy">Admission enquiry</h3>
          <div className="mt-4 space-y-3">
            <input required placeholder="Parent name"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-navy/10" />
            <input required type="tel" placeholder="Mobile number"
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy focus:ring-2 focus:ring-navy/10" />
            <select required defaultValue=""
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy">
              <option value="" disabled>Class applying for</option>
              {["Play Group", "Nursery", "LKG", "UKG", ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <textarea placeholder="Any question? (optional)" rows={2}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-navy" />
            <button type="submit"
              className="w-full rounded-lg bg-gold py-3 text-sm font-semibold text-navy transition hover:bg-gold-dark">
              Request a callback within 24 hrs
            </button>
            <p className="text-center text-xs text-slate-400">
              No spam — sirf school office se call aayegi.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
