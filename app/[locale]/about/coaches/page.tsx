// app/[locale]/about/coaches/page.tsx
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { routing } from "@/i18n/routing";
import Image from "next/image";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OurCoachesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const coaches = [
    {
      name: "Coach 1",
      role: "BJJ Head Coach",
      src: "/images/coaches/bjj-head-coach.jpg",
      alt: "BJJ Head Coach",
      description:
        "Black belt with international competition experience and a focus on building strong fundamentals and modern game.",
      highlights: [
        "IBJJF and local competition experience",
        "Focus on fundamentals + strategy",
        "Advanced classes and competition team",
      ],
    },
    {
      name: "Coach 2",
      role: "No-Gi / Wrestling Coach",
      src: "/images/coaches/nogi-coach.jpg",
      alt: "No-Gi & Wrestling Coach",
      description:
        "Brings strong wrestling background with pressure-based style and efficient takedown systems.",
      highlights: [
        "Wrestling and No-Gi specialist",
        "Emphasis on takedowns and top control",
        "No-Gi and MMA-oriented training",
      ],
    },
    {
      name: "Coach 3",
      role: "Kids & Beginners Coach",
      src: "/images/coaches/kids-coach.jpg",
      alt: "Kids & Beginners Coach",
      description:
        "Creates a safe and friendly environment for kids and new students to learn step by step.",
      highlights: [
        "Experience working with kids and total beginners",
        "Focus on safety and clear structure",
        "Builds confidence and discipline on the mat",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Our Coaches</h1>
        <p className="text-lg text-gray-200">
          Our coaching staff combines experience, passion and an individual
          approach to help you progress safely and efficiently — whether you’re
          a beginner or a competitor.
        </p>
      </header>

      <section className="space-y-10">
        {coaches.map((coach) => (
          <article
            key={coach.name}
            className="flex flex-col gap-6 rounded-2xl border border-gray-700 bg-black/40 p-4 md:flex-row md:p-6"
          >
            {/* Photo left */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-48 md:w-56 shrink-0">
              <Image
                src={coach.src}
                alt={coach.alt}
                fill
                sizes="(max-width: 768px) 100vw, 230px"
                className="object-cover"
              />
            </div>

            {/* Text right */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-semibold">{coach.name}</h2>
                <p className="text-sm font-medium text-gray-300">
                  {coach.role}
                </p>
              </div>

              <p className="text-sm text-gray-200">{coach.description}</p>

              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-300">
                {coach.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
