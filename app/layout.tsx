import type { Metadata } from "next";
// @ts-expect-error Next.js handles global CSS imports at build time.
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    default: "Sunrise Public School | Best School in [City] – Admissions Open 2026",
    template: "%s | Sunrise Public School",
  },
  description:
    "Sunrise Public School, [City] — Play Group to Class 10 with strong academics, values & modern facilities. 25+ years of excellence. Admissions open for 2026-27. Enquire now!",
  keywords: [
    "best school in [city]",
    "school admissions [city]",
    "Play Group to Class 10",
    "Sunrise Public School",
  ],
  openGraph: {
    title: "Sunrise Public School — Admissions Open 2026",
    description: "Give your child the best start. Play Group to Class 10. Enquire now!",
    type: "website",
    locale: "en_IN",
  },
};

// FAQ Schema — Google pe search karne pe directly jawab dikhate hain (rich results)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the admission process at Sunrise Public School?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fill the online enquiry form or visit the campus. Our office will call you within 24 hours to schedule a campus visit and interaction.",
      },
    },
    {
      "@type": "Question",
      name: "What classes does the school offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Play Group to Class 10 with a balanced curriculum of academics, values, sports, and co-curricular activities.",
      },
    },
    {
      "@type": "Question",
      name: "What are the school timings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monday to Saturday, 8:00 AM to 2:00 PM. Office hours for admissions: 9 AM – 2 PM on working days.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
