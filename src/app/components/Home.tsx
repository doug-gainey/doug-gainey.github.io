import { Link } from "react-router";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import profileImage from "@/assets/images/profile-image.png";

export function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-primary">
              <ImageWithFallback
                src={profileImage}
                alt="Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground uppercase tracking-wider text-sm font-semibold">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Hi, I'm a Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Crafting elegant solutions to complex problems. Passionate about
              clean code, user experience, and building products that make a
              difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/portfolio"
              className="group bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
            >
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              target="_blank"
              href="/Douglas_Gainey_Resume.pdf"
              download
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 border-2 border-border"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-12">
            <a
              href="https://github.com/doug-gainey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:shadow-lg transition-all duration-200 border border-border"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/doug-gainey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:shadow-lg transition-all duration-200 border border-border"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:douggainey@gmail.com"
              className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:shadow-lg transition-all duration-200 border border-border"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern web technologies and creating seamless user
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-border">
              <div
                className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-3xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Full-Stack Development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Designing and building scalable APIs and server-side
                architectures using .NET Core, Node.js, and cloud-native
                technologies like Cloudflare Workers.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-border">
              <div
                className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Frontend Engineering
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Building performant, accessible interfaces and design systems
                with Vue, React, TypeScript, and modern tooling — from component
                architecture down to CSS.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-border">
              <div
                className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Platform & Developer Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Improving how teams build and ship software through CI/CD
                pipelines, build tooling, observability, and development
                standards that scale across codebases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
