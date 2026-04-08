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
                Principal Software Engineer
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
              <Phone size={18} className="text-muted-foreground" />
              <span>(843) 615-8725</span>
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
              Principal-level Software Engineer with 20+ years of experience
              building and modernizing enterprise web applications across
              full-stack environments. Strong background in .NET-based systems
              combined with deep expertise in frontend architecture, design
              systems, and scalable UI platforms.
            </p>
            <p>
              Experienced working across teams to deliver maintainable,
              user-centered applications while remaining hands-on in
              development, prototyping, and system design. Known for bridging
              gaps between architecture and implementation, enabling teams to
              build consistent, scalable software at speed. Comfortable working
              across the stack, with a focus on building well-structured systems
              that connect backend services with intuitive, user-centered
              interfaces.
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
                  Enterprise Front-End Architect{" "}
                </h3>
                <span className="text-muted-foreground">
                  Sep 2022 - Feb 2026
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Served as a senior frontend engineer across 10+ engineering
                  teams and 8+ SaaS applications, contributing directly to the
                  design and implementation of scalable, component-driven UI
                  systems within a large-scale .NET ecosystem.
                </li>
                <li>
                  Built and evolved shared component systems and design system
                  foundations, improving consistency and usability across
                  multiple applications
                </li>
                <li>
                  Collaborated with product managers, designers, and backend
                  engineers to deliver intuitive, maintainable user interfaces
                  for complex workflows
                </li>
                <li>
                  Developed a framework-agnostic Web Components platform
                  enabling reusable UI patterns across Vue, Angular, and React
                  applications
                </li>
                <li>
                  Integrated frontend systems with REST APIs and asynchronous
                  data flows to support reliable, performant user experiences
                </li>
                <li>
                  Led modernization initiatives including Vue 2 → Vue 3
                  migration, creating reusable upgrade patterns that enabled
                  incremental adoption
                </li>
                <li>
                  Identified and reduced technical debt, improving performance,
                  stability, and developer efficiency
                </li>
                <li>
                  Implemented AI-powered components and explored LLM-driven
                  features to enhance user workflows
                </li>
                <li>
                  Promoted accessibility and usability best practices within
                  shared UI components
                </li>
                <li>
                  Mentored engineers through code reviews, pairing, and
                  architectural guidance while remaining actively hands-on
                </li>
                <li>
                  Contributed to backend integration patterns and API design
                  within a .NET ecosystem, ensuring alignment between frontend
                  architecture and service-layer capabilities.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary/70 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Architect Lead
                </h3>
                <span className="text-muted-foreground">
                  May 2021 - Sep 2022
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Led architectural redesign of a flagship SaaS platform,
                  improving maintainability and enabling faster feature
                  development
                </li>
                <li>
                  Migrated legacy jQuery-based UI systems to a modern Vue
                  component architecture, reducing technical debt and regression
                  risk
                </li>
                <li>
                  Acted as escalation point for complex frontend challenges,
                  resolving cross-team technical blockers
                </li>
                <li>
                  Provided mentorship and training that improved consistency and
                  quality across engineering teams
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
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Led a Frontend Community of Practice supporting 30+ engineers,
                  aligning patterns and reducing architectural divergence
                </li>
                <li>
                  Established shared frontend patterns, asset pipelines, and
                  review practices to improve long-term maintainability
                </li>
                <li>
                  Drove early modernization efforts toward component-based
                  architectures, improving development velocity
                </li>
                <li>
                  Contributed to hiring and mentoring efforts, strengthening
                  frontend expertise across teams
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary/50 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  Senior Software Architect
                </h3>
                <span className="text-muted-foreground">
                  Apr 2012 - Aug 2016
                </span>
              </div>
              <p className="text-foreground/80 mb-3">ACS Technologies, Inc.</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Defined frontend technical direction and mentored developers
                  to improve code quality and consistency
                </li>
                <li>
                  Built and documented shared frontend patterns and components
                  to support cross-team reuse
                </li>
                <li>
                  Developed an internal “app kit” with documentation, code
                  samples, and live demos to accelerate onboarding
                </li>
                <li>
                  Initiated transition from jQuery plugins to Vue-based
                  component architecture within a .NET platform
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
