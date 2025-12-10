# Next.js Project

Welcome to the Next.js Project! This repository contains a modern web application built with Next.js, React, TypeScript, and Tailwind CSS. It features animated UI components, optimized images, and a scalable structure for rapid development.

## Features

- ⚡️ Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- 🛡️ TypeScript for type safety
- 🎨 Tailwind CSS for utility-first styling
- 🖼️ Optimized images using Next.js `<Image />`
- 🧩 Modular and reusable UI components
- 🚀 ESLint and Prettier for code quality
- 📦 Easy deployment to Vercel or any cloud provider

## Project Structure

```
next/
├── public/
│   └── courses/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── courses/
│   │       └── page.tsx
│   ├── components/
│   │   ├── FeaturedCourses.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Instructors.tsx
│   │   ├── Navbar.tsx
│   │   ├── Testimonials.tsx
│   │   ├── UpcomingWebinars.tsx
│   │   ├── WhyChooseUs.tsx
│   │   └── ui/
│   │       ├── 3d-card.tsx
│   │       ├── animated-tooltip.tsx
│   │       ├── background-beams.tsx
│   │       ├── background-gradient.tsx
│   │       ├── card-hover-effect.tsx
│   │       ├── infinite-moving-cards.tsx
│   │       ├── meteors.tsx
│   │       ├── moving-border.tsx
│   │       ├── navbar-menu.tsx
│   │       ├── Spotlight.tsx
│   │       ├── sticky-scroll-reveal.tsx
│   │       └── wavy-background.tsx
│   ├── data/
│   │   └── music_courses.json
│   └── utils/
│       └── cn.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/shatrughantwt/nextjs-project.git
   cd nextjs-project/next
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

> Built with ❤️ using Next.js, React, and Tailwind CSS.
