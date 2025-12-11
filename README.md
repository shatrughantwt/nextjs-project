# Next.js Project

Welcome to the Next.js Project! This repository contains a modern web application built with Next.js, React, TypeScript, and Tailwind CSS. It features animated UI components, optimized images, and a scalable structure for rapid development.

## Features

- ⚡️ **Modern Stack:** Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/) for fast, scalable, and maintainable web apps.
- 🛡️ **TypeScript:** End-to-end type safety for fewer bugs and better developer experience.
- 🎨 **Tailwind CSS:** Utility-first CSS framework for rapid, responsive, and consistent UI development.
- 🖼️ **Image Optimization:** Uses Next.js `<Image />` for automatic image optimization, lazy loading, and responsive images.
- 🧩 **Reusable Components:** Modular, well-documented, and easily composable UI components for fast prototyping and scaling.
- ✨ **Advanced Animations:** Smooth, interactive UI animations using Framer Motion and custom effects (e.g., animated tooltips, 3D cards, background beams, infinite scrollers).
- 📱 **Mobile-First & Responsive:** Fully responsive layouts and components for all device sizes.
- ♿ **Accessibility:** Follows accessibility best practices for inclusive user experiences.
- 🚀 **Performance Optimized:** Code splitting, SSR/SSG, and best practices for fast load times and high Lighthouse scores.
- 🔍 **SEO Friendly:** Optimized for search engines with semantic HTML and customizable meta tags.
- 🧹 **Code Quality:** Strict ESLint, Prettier, and TypeScript rules for clean, maintainable code.
- 🧪 **Easy Testing:** Ready for integration with popular testing libraries (Jest, React Testing Library).
- 📦 **Cloud Ready:** Effortless deployment to Vercel or any cloud provider.

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
├── Dockerfile
├── docker-compose.yml
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

## Docker

You can run this Next.js app in a container using Docker or Docker Compose.

### Build and Run with Docker

```sh
# Build the Docker image
docker build -t nextjs-app .

# Run the container
docker run -p 3000:3000 nextjs-app
```

### Using Docker Compose

```sh
docker-compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

> Built with ❤️ using Next.js, React, and Tailwind CSS.
