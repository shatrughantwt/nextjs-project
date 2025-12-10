'use client'
import Link from "next/link"
import { HoverEffect } from "../components/ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
    },
    {
      title: 'The Art of Songwriting',
      description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
    },
    {
      title: 'Mastering Your Instrument',
      description: 'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
    },
    {
      title: 'Music Production Essentials',
      description: 'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
    },
    {
      title: 'Live Performance Techniques',
      description: 'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
    },
    {
      title: 'Digital Music Marketing',
      description: 'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => ({
              id: webinar.slug, // ✅ UNIQUE KEY
              title: webinar.title,
              description: webinar.description,
              link: `/webinars/${webinar.slug}`,
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/webinars"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
