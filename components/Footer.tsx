export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark py-10 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">
            Sunrise Public School
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            [Full address line]
            <br />
            [City, State – PIN]
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <p className="mt-2 text-sm">+91 98XXX XXXXX</p>
          <p className="text-sm">info@sunriseschool.in</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Quick links</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#academics" className="hover:text-gold">Academics</a></li>
            <li><a href="#admissions" className="hover:text-gold">Admissions</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/40">
        © 2026 Sunrise Public School. All rights reserved.
      </p>
    </footer>
  );
}
