import { Link } from "react-router";
import { Code, Heart, Lightbulb, Rocket } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            I'm a passionate software engineer dedicated to building meaningful
            products that make a difference.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border">
          <div className="flex flex-col md:flex-row gap-8 mb-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="/personal-photo.jpg"
                  alt="Personal photo of Doug Gainey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                My Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I discovered my passion for programming during high school when
                I started writing programs on a graphing calculator. Like a lot
                of kids, I was convinced I'd eventually make video games for a
                living. What I didn't expect was that a programming class, a lot
                of self-taught HTML and JavaScript, and a Computer Science
                degree would lead me somewhere I never would have predicted, and
                that it would end up mattering more to me than games ever could
                have.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My career started with an internship building intranet
              applications, and from there I found my way into enterprise
              software. For most of the last 20 years, I've been at ACS
              Technologies, building software for churches and the organizations
              that serve them. I didn't plan to end up there, but somewhere
              along the way it became deeply meaningful work. There's something
              about building tools for people who are trying to do good in the
              world that changes how you think about what you're making.
            </p>
            <p>
              These days, what drives me is impact and the feeling of knowing
              that something I built is being used, that it's making someone's
              work easier or their mission more possible. That's what gets me to
              the keyboard in the morning, and it's what shapes the kind of
              engineer I try to be: someone who thinks about the people on the
              other side of the screen, not just the code on this side of it.
            </p>
            <p>
              Technically, I've spent most of my career doing both full-stack
              engineering and frontend architecture: modernizing legacy
              platforms, architecting new solutions, building design systems,
              and trying to leave codebases better than I found them. But the
              technology has always been in service of something larger. The
              best software I've ever worked on was never the most clever. It
              was the most useful.
            </p>
            <p>
              <span>
                When I'm not working, I enjoy exploring new technologies on{" "}
              </span>
              <Link
                to="/portfolio?scrollTo=personal-projects"
                className="text-emerald-500 hover:text-emerald-700 hover:underline"
              >
                personal projects
              </Link>
              , spending time with family, and getting offshore whenever I can
              to fish.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            My Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Code className="text-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Clean Code
              </h3>
              <p className="text-muted-foreground">
                Writing code that's readable, maintainable, and follows best
                practices
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="text-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Innovation
              </h3>
              <p className="text-muted-foreground">
                Embracing new technologies and finding creative solutions to
                problems
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Heart className="text-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                User-Centric
              </h3>
              <p className="text-muted-foreground">
                Putting user experience first in every design and development
                decision
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Rocket className="text-foreground" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Continuous Growth
              </h3>
              <p className="text-muted-foreground">
                Always learning and improving through challenges and feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          Technical Skills
        </h2>

        <div className="space-y-8">
          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "C#",
                "PHP",
                "SQL",
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Vue.js",
                "React",
                "Nuxt.js",
                "Tailwind CSS",
                "Less/Sass",
                "Vite",
                "Web Components",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                ".NET Core",
                "ASP.NET",
                "Node.js",
                "Express",
                "Cloudflare Workers",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Databases & Caching
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Microsoft SQL Server",
                "SQLite (Cloudflare D1)",
                "Couchbase",
                "Redis",
                "Memcached",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Design & UI
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Figma",
                "Storybook",
                "Design Systems",
                "Component Architecture",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              DevOps & Tooling
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub Actions", "Jenkins"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Observability & Monitoring
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Datadog", "New Relic", "Pendo"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              AI & Emerging Tech
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "OpenAI API Integration",
                "GitHub Copilot",
                "Cursor",
                "Claude",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
