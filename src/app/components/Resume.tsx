import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Resume</h1>
              <p className="text-xl text-primary-foreground/90">
                Senior Full-Stack Engineer
              </p>
            </div>
            <a
              target="_blank"
              href="/Douglas_Gainey_Resume.pdf"
              download
              className="flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 border border-border"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2 text-foreground">
              <Mail size={18} className="text-muted-foreground" />
              <span>douggainey@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <MapPin size={18} className="text-muted-foreground" />
              <span>Florence, SC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Summary */}
        <section className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Professional Summary
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Senior Full-Stack Engineer with extensive experience building
              scalable, data-driven SaaS applications across frontend and
              backend systems. Deep expertise in Vue.js, TypeScript, .NET/C#,
              SQL, REST APIs, and cloud-based services, with a strong focus on
              creating intuitive user experiences for complex business
              workflows.
            </p>
            <p>
              Experienced leading modernization initiatives, designing reusable
              component systems, integrating frontend applications with
              distributed backend services, and delivering maintainable,
              high-performance software in fast-moving product environments.
              Hands-on engineer who enjoys collaborating closely with product,
              design, and data teams to turn complex requirements into polished,
              user-centered solutions.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Briefcase className="text-foreground" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Senior Front-End Developer{" "}
                </h3>
                <span className="text-muted-foreground">
                  July 2026 - Present
                </span>
              </div>
              <p className="text-foreground/80 mb-3">
                Security Risk Advisors Intl, LLC
              </p>
              <p className="text-muted-foreground">
                Currently serving as a senior engineer building VECTR, a
                cybersecurity tool used by Fortune 500 companies for purple team
                collaboration and adversary simulation reporting.
              </p>
            </div>

            <div className="border-l-4 border-primary/70 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Enterprise Front-End Architect{" "}
                </h3>
                <span className="text-muted-foreground">
                  Sep 2022 - Feb 2026
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <p className="text-muted-foreground">
                Led the design and implementation of shared frontend systems and
                data-driven SaaS experiences across multiple enterprise
                applications, collaborating closely with backend, product, and
                UX teams to deliver scalable, maintainable solutions.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 px-2 py-2 text-muted-foreground">
                <li>
                  Built and maintained the Particle design system, a shared
                  component library adopted across 8+ enterprise applications
                  and used by 30+ engineers to deliver consistent, reusable UI
                  patterns.
                </li>
                <li>
                  Led Vue 2 → Vue 3 migration initiatives across multiple
                  engineering teams, creating reusable migration patterns that
                  enabled incremental adoption without disrupting active product
                  delivery.
                </li>
                <li>
                  Integrated frontend applications with RESTful backend services
                  and asynchronous data flows, supporting complex business
                  workflows and large-scale SaaS operations.
                </li>
                <li>
                  Collaborated with product managers, designers, and backend
                  engineers to simplify complex data-driven workflows and
                  deliver intuitive, accessible user experiences.
                </li>
                <li>
                  Implemented AI-powered content generation features using
                  OpenAI APIs, automating creation of group and event
                  descriptions — reducing manual entry for staff and
                  accelerating common high-frequency workflows
                </li>
                <li>
                  Built AI-powered content generation features using OpenAI
                  APIs, automating workflow tasks and reducing manual data entry
                  for end users.
                </li>
                <li>
                  Mentored engineers through code reviews, pairing, and
                  architecture discussions while remaining actively hands-on in
                  implementation and debugging.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary/60 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Architect Lead
                </h3>
                <span className="text-muted-foreground">
                  May 2021 - Sep 2022
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <p className="text-muted-foreground">
                Led the architectural redesign of a flagship church management
                SaaS platform, balancing active feature delivery with long-term
                maintainability.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 px-2 py-2 text-muted-foreground">
                <li>
                  Drove the transition from a legacy jQuery-based UI to a modern
                  Vue component architecture, reducing technical debt while
                  keeping teams productive throughout the migration.
                </li>
                <li>
                  Worked closely with product and design to translate
                  requirements into clean, maintainable frontend
                  implementations, and with backend engineers to define API
                  contracts that served the UI well.
                </li>
                <li>
                  Established code review practices across the team focused on
                  consistency, accessibility, and long-term code health.
                </li>
                <li>
                  Acted as the primary escalation point for complex frontend
                  challenges across product teams.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary/50 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Principal Software Engineer
                </h3>
                <span className="text-muted-foreground">
                  Aug 2016 - May 2021
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <p className="text-muted-foreground">
                Hands-on principal engineer and community leader focused on
                shared component systems and frontend standards across a 30+
                engineer organization.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 px-2 py-2 text-muted-foreground">
                <li>
                  Built and maintained the shared component library and asset
                  pipeline that became the direct foundation for the Particle
                  design system.
                </li>
                <li>
                  Led a Frontend Community of Practice across 30+ engineers,
                  creating a regular forum for aligning on patterns, surfacing
                  issues, and sharing knowledge across distributed teams.
                </li>
                <li>
                  Drove adoption of modern frontend practices including
                  component-driven development, TypeScript, and performance
                  optimization across the engineering organization.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary/40 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Senior Software Architect
                </h3>
                <span className="text-muted-foreground">
                  Apr 2012 - Aug 2016
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <p className="text-muted-foreground">
                Hands-on architect responsible for frontend technical direction,
                shared component systems, and full-stack feature delivery across
                a large .NET and JavaScript platform.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 px-2 py-2 text-muted-foreground">
                <li>
                  Delivered full-stack features across SQL Server databases,
                  .NET backend services, and modern JavaScript frontends, owning
                  work end-to-end from design through deployment.
                </li>
                <li>
                  Defined shared frontend standards and mentored engineers on
                  component design, code quality, and accessible development
                  practices.
                </li>
                <li>
                  Initiated and led the transition from jQuery plugin
                  architecture to a Vue-based component system, establishing the
                  foundation for future frontend modernization efforts.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <GraduationCap className="text-foreground" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Bachelor of Science, Computer Science
                </h3>
              </div>
              <p className="text-foreground/80 mb-2">
                Francis Marion University, Florence, SC
              </p>
              <p className="text-muted-foreground">
                Dean's List • President's List
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        {/* <section className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <Award className="text-foreground" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-primary/70 pl-4 py-2">
              <h3 className="font-semibold text-foreground">
                Professional Scrum Master
              </h3>
              <p className="text-muted-foreground">Scrum.org • 2022</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
