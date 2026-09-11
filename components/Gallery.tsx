import Image from "next/image";

const items = [
  {
    label: "Classroom",
    image: "/images/gallery/classroom.jpg",
  },
  {
    label: "Sports day",
    image: "/images/gallery/sports-day.png",
  },
  {
    label: "Annual function",
    image: "/images/gallery/annual-function.jpg",
  },
  {
    label: "Science activity",
    image: "/images/gallery/science-activity.jpg",
  },
  {
    label: "Art & craft",
    image: "/images/gallery/art-craft.jpg",
  },
  {
    label: "Library",
    image: "/images/gallery/library.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            Gallery
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-navy">
            Life at Sunrise
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <span className="p-4 text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}