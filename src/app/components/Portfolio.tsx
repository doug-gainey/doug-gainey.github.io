import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import personalWebsiteImageLight from "@/assets/images/personal-website-light.png";
import personalWebsiteImageDark from "@/assets/images/personal-website-dark.png";
import youbBibleVerseImage from "@/assets/images/you-bible-verse.png";
import resumeGeneratorImage from "@/assets/images/resume-generator.png";
import wallDisplayImage from "@/assets/images/wall-display.png";
import homeManagementImage from "@/assets/images/home-management.png";
import wishListImage from "@/assets/images/wish-list.png";
import movieHubImage from "@/assets/images/movie-hub.png";

const projects = [
  // TODO: ACS Products
  // Realm, Particle, Gather, Universal Components - Help Drawer
  // {
  //   id: 0,
  //   title: "ACS Products",
  //   description:
  //     "Track workouts, monitor progress, and achieve fitness goals with personalized workout plans and analytics.",
  //   tech: ["React Native", "Node.js", "MongoDB"],
  //   image:
  //     "https://images.unsplash.com/photo-1705077031869-51b60754302a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZm9yZWNhc3QlMjBhcHB8ZW58MXx8fHwxNzc1MTYxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   liveUrl: "#",
  // },
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
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl">
            A collection of projects showcasing my skills in web development,
            from concept to deployment.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
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
