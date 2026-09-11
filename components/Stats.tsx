const stats = [
  { value: "25+", label: "Years of excellence" },
  { value: "1,200+", label: "Happy students" },
  { value: "60+", label: "Expert faculty" },
  { value: "98%", label: "Board pass rate" },
];

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">
      <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-semibold text-navy md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
