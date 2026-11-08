import type { Metadata } from "next";
import { education, jobs } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Full-stack engineer and technical lead at Falcon Global Services; previously a web developer at Eljin Corp.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <section className="pt-16">
      <h1 className="font-serif text-4xl tracking-tight">Experience</h1>
      <ol className="mt-12 space-y-14">
        {jobs.map((job) => (
          <li key={job.company} className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="font-mono text-xs leading-7 text-muted">{job.period}</p>
            <div>
              <h2 className="font-serif text-2xl tracking-tight">{job.company}</h2>
              <p className="mt-1 text-sm text-muted">{job.context}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {job.roles.map((role) => (
                  <li key={role.title} className="flex justify-between gap-4">
                    <span className="font-medium">{role.title}</span>
                    <span className="shrink-0 font-mono text-xs leading-5 text-muted">{role.period}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>
              {job.highlights.length ? (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-muted">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <section aria-labelledby="education" className="mt-20 border-t border-line pt-10">
        <h2 id="education" className="font-mono text-xs tracking-widest text-muted uppercase">
          Education
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <p className="font-mono text-xs leading-7 text-muted">{education.period}</p>
          <div>
            <p className="font-serif text-xl tracking-tight">{education.school}</p>
            <p className="mt-1 text-sm">{education.degree}</p>
            <p className="mt-3 leading-relaxed text-muted">{education.note}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
