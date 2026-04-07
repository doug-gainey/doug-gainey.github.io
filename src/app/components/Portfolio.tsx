import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

import realmImage from "@/assets/images/realm.png";
import particleImage from "@/assets/images/particle.png";
import gatherImage from "@/assets/images/gather.png";
import ministryHubImage from "@/assets/images/ministry-hub.png";
import acstAssistantImage from "@/assets/images/acst-assistant.png";
import universalComponentsImage from "@/assets/images/universal-components.png";

import personalWebsiteImageLight from "@/assets/images/personal-website-light.png";
import personalWebsiteImageDark from "@/assets/images/personal-website-dark.png";
import youbBibleVerseImage from "@/assets/images/you-bible-verse.png";
import resumeGeneratorImage from "@/assets/images/resume-generator.png";
import wallDisplayImage from "@/assets/images/wall-display.png";
import homeManagementImage from "@/assets/images/home-management.png";
import wishListImage from "@/assets/images/wish-list.png";
import movieHubImage from "@/assets/images/movie-hub.png";

const professionalWork = [
  {
    id: 1,
    title: "Realm Product",
    description:
      "Realm is ACS Technologies' flagship church management platform, serving thousands of churches across the country. I was part of the small founding team that started building it in 2009, and over the following fifteen years I grew with the product in nearly every capacity — developer, team lead, scrum master, and architect. My work spanned the full stack, from database design and backend services to UI architecture and component development. Along the way I led several modernization efforts that kept the platform current as the web evolved, including a large-scale CSS overhaul introducing Less preprocessing and a full transition from a jQuery plugin architecture to a modern Vue.js stack.",
    tech: ["ASP.NET MVC", "C#", "SQL Server", "Vue.js", "Less"],
    image: realmImage,
    liveUrl: "https://www.acstechnologies.com/realm",
  },
  {
    id: 2,
    title: "Particle Design System",
    description:
      "Particle is the design system I built and led for Realm, born out of a need to bring consistency and quality control to a fast-growing engineering team. What started as a collection of components embedded in the Realm codebase was extracted into its own standalone project, complete with its own repository, CI/CD pipeline, versioning, and release process. The centerpiece of Particle was its documentation site, which I built from the ground up in the style of Bootstrap's docs. It covered typography, styles, utility classes, patterns, and every component in the system — each documented with live interactive demos, copyable code snippets, and full prop and event references. The idea was to build something teams could actually learn from and use as a reference when working on features.",
    tech: ["Vue.js", "Less", "Github Actions"],
    image: particleImage,
  },
  {
    id: 3,
    title: "Gather Product",
    description:
      "Gather is ACS Technologies' facility and event scheduling platform, giving churches a centralized system for managing spaces, resources, and bookings. Gather was the first application built on a new micro-frontend architecture I was tasked with establishing. I designed and built the foundational template that would serve as the starting point for this new generation of ACS products — a Vue 3, Vuetify, TypeScript, and Pinia application communicating with Go microservices. From there I oversaw the team through pull request reviews and architectural guidance as the product took shape. Gather shipped successfully before I left ACS, and the template I built will serve as the foundation for future products in the same line.",
    tech: ["TypeScript", "Vue.js", "Vuetify", "Pinia"],
    image: gatherImage,
    liveUrl: "https://letsgather.co",
  },
  {
    id: 4,
    title: "Ministry Hub",
    description:
      "As ACS Technologies grew its product suite, customers found themselves working across multiple platforms: Realm for church management, along with separate products for accounting, giving, websites, and more. Moving between them was friction that added up quickly for users who lived in these tools every day. I built the Ministry Hub, a reusable product-switching component modeled after the kind of seamless context switching Google brings to its product ecosystem. The component was built to plug into any ACS product, giving users a consistent, unified way to navigate across the entire platform without losing their place. The challenge of building something that felt native across products on different stacks directly lead to the creation of a universal component library.",
    tech: ["Vue.js", "Less"],
    image: ministryHubImage,
  },
  {
    id: 5,
    title: "Universal Components Library",
    description:
      "Through a series of acquisitions, ACS found itself maintaining products built on three different frontend frameworks: Vue, Angular, and React. The challenge was sharing UI components across all three without forcing any product to take on an additional framework dependency. I designed and built a universal component library using native Web Components — pure JavaScript, no frameworks, intentionally minimal. Each component was implemented as a Custom Element extending a BaseElement I authored, which included lightweight data binding capabilities to avoid any external dependencies. The result was a single shared package that integrated cleanly into all three stacks, giving each product access to a consistent set of components without adding complexity to their existing architecture.",
    tech: ["JavaScript", "Web Components", "Less", "Github Actions"],
    image: universalComponentsImage,
  },
  {
    id: 6,
    title: "ACS Technologies Assistant",
    description:
      "As the ACS product suite grew, supporting customers across all of them became increasingly fragmented. Help resources, release notes, and support channels all lived in different places and varied product to product. I architected and built the ACS Technologies Assistant to solve that — a cross-product help and resource hub delivered as a slide-in widget built on the Universal Components system I authored. Customizable per product, it centralized context-sensitive help, searchable documentation, release notes, and live support access in one consistent experience. It integrated with Heretto, Salesforce, Ministry Smart, and UserVoice, among others. Pulling that many APIs into a single lightweight Web Component without it becoming unwieldy was the core challenge, and I'm particularly proud of how we solved it.",
    tech: [
      "JavaScript",
      "Web Components",
      "Less",
      "Github Actions",
      "Rest APIs",
    ],
    image: acstAssistantImage,
  },
];

const personalProjects = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "My personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience in web development.",
    tech: ["React", "Tailwind"],
    image: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? personalWebsiteImageDark
      : personalWebsiteImageLight,
    liveUrl: "https://douggainey.com",
    githubUrl: "https://github.com/doug-gainey/doug-gainey.github.io",
  },
  {
    id: 2,
    title: "You Bible Verse",
    description:
      "Developed a Nuxt/SSR app to display a daily Bible verse on a beautiful background photo. It includes options to select a preferred translation, read the full chapter, navigate to previous days, and setup daily notifications. I integrated the Share API for social sharing and built a Cloudflare worker, a Web Push Express service, and a service worker to handle subscriptions and daily notifications.",
    tech: [
      "Nuxt",
      "SSR",
      "Vue.js",
      "Vuetify",
      "Cloudflare Worker",
      "Express.js",
    ],
    image: youbBibleVerseImage,
    liveUrl: "https://youbibleverse.com",
  },
  {
    id: 3,
    title: "Resume Generator",
    description:
      "I came across an old resume generator that was fairly dated, built with Vue 2 and would no longer run on the latest Node.js version. I thought it would be fun to update it, clean it up, port it to Vue 3, and modernize it a bit.  What started as a fun side project, has actually become very useful.  I use it now to tailor my resume for different roles.  It takes in structured data (in yaml or json format) and generates a professional-looking resume.",
    tech: ["Vue.js", "Node.js", "Puppeteer", "Less"],
    image: resumeGeneratorImage,
    liveUrl: "https://resume-generator.douggainey.com/",
    githubUrl: "https://github.com/doug-gainey/magic-resume-generator",
  },
  {
    id: 4,
    title: "Wall Display",
    description:
      "I built a custom wall display for our home using a Raspberry Pi and a monitor. It shows a personalized dashboard with our family calendar, date, time, weather forecast, and a rotating gallery of our photos. The dashboard is built with Vue.js and runs in kiosk mode on the Raspberry Pi, providing a central hub of information for our household.",
    tech: ["Vue.js", "Vuetify", "Cloudflare Worker", "SQLite (Cloudflare D1)"],
    image: wallDisplayImage,
    documentationUrl:
      "https://github.com/doug-gainey/raspberry-pi-chromium-kiosk",
  },
  {
    id: 5,
    title: "Home Management",
    description:
      "A comprehensive home management SPA that helps our family organize calendars, shopping lists, chores, meals, photos, weather, and includes a daily Bible verse.  We keep this on a tablet displayed on our kitchen island.  It integrates with Google APIs for calendar and task syncing, with OpenWeather for weather data, and with You Bible Verse for daily verses.",
    tech: ["Vue.js", "Vuetify", "Cloudflare Worker", "SQLite (Cloudflare D1)"],
    image: homeManagementImage,
  },
  {
    id: 6,
    title: "Wish List",
    description:
      "I tried several off-the-shelf wish list and gift registry apps but couldn't find one that fit our needs, so I built my own using Vue.js, Vuetify, a Cloudflare Worker, and a SQLite (Cloudflare D1) database. My family and I use it to keep track of gift ideas for each other throughout the year, and it has made holiday and birthday shopping so much easier and more organized!",
    tech: ["Vue.js", "Vuetify", "Cloudflare Worker", "SQLite (Cloudflare D1)"],
    image: wishListImage,
  },
  {
    id: 7,
    title: "Movie Hub",
    description:
      "Our family could never find a movie app that did everything we needed, so I built one. It pulls data from the TMDB API, surfaces recommendations based on our preferences, and tracks what we want to watch across the streaming services we actually have. Watchlists, watch history, trailers, ratings, and IMDB parental guidance links — all in one place.",
    tech: ["Vue.js", "Vuetify", "REST APIs"],
    image: movieHubImage,
  },
];

function ShowcaseImage({ href, target, children, ...rest }) {
  return React.createElement(
    href ? "a" : "div",
    href ? { href, target, ...rest } : rest,
    children,
  );
}

export function Portfolio() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl">
            A collection of projects showcasing my skills in web development,
            from concept to deployment.
          </p>
        </div>
      </section>

      {/* Professional Work */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Professional Work
        </h2>
        <p className="pb-6">
          Selected examples from my time at ACS Technologies. Screenshots and
          descriptions are limited to publicly available product UI.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {professionalWork.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border"
            >
              {/* Project Image */}
              <ShowcaseImage
                href={project.liveUrl}
                target="_blank"
                className="bg-muted h-48 block overflow-hidden"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </ShowcaseImage>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline font-semibold transition-colors"
                      aria-label={`View ${project.title} live demo (opens in new window)`}
                    >
                      <ExternalLink size={18} />
                      Product Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors"
                      aria-label={`View ${project.title} code on GitHub (opens in new window)`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.documentationUrl && (
                    <a
                      target="_blank"
                      href={project.documentationUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors"
                      aria-label={`View ${project.title} documentation on GitHub (opens in new window)`}
                    >
                      <Github size={18} />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Personal Projects
        </h2>
        <p className="pb-6">
          These are projects I've built for fun, to solve a real problem, or to
          learn something new. They're not all polished products, but they
          represent my passion for building and experimenting with web
          technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border"
            >
              {/* Project Image */}
              <ShowcaseImage
                href={project.liveUrl}
                target="_blank"
                className="bg-muted h-48 block overflow-hidden"
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </ShowcaseImage>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      target="_blank"
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline font-semibold transition-colors"
                      aria-label={`View ${project.title} live demo (opens in new window)`}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      target="_blank"
                      href={project.githubUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors"
                      aria-label={`View ${project.title} code on GitHub (opens in new window)`}
                    >
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.documentationUrl && (
                    <a
                      target="_blank"
                      href={project.documentationUrl}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors"
                      aria-label={`View ${project.title} documentation on GitHub (opens in new window)`}
                    >
                      <Github size={18} />
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Want to collaborate on a project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and ideas.
          </p>
          <a
            href="mailto:douggainey@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
