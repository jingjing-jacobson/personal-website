import { education, experience } from '../data/resume';

function companyDateRange(roles: { dates: string }[]) {
  const start = roles[roles.length - 1].dates.split(' – ')[0];
  const end = roles[0].dates.split(' – ')[1];
  return `${start} – ${end}`;
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl tracking-tight text-ink">Experience</h2>

        <div className="mt-12 space-y-14">
          {experience.map((employer) => (
            <div
              key={employer.company}
              className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <span className="font-serif text-sm italic text-accent">
                {companyDateRange(employer.roles)}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink">{employer.company}</h3>
                <div className="mt-5 space-y-7">
                  {employer.roles.map((role) => (
                    <div key={role.title}>
                      <h4 className="text-base font-medium text-ink">
                        {role.title}
                        <span className="font-normal text-muted"> ({role.dates})</span>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {role.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-accent-soft px-3 py-1 text-xs text-ink/70"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-sm text-muted">
          {education.degree}, {education.school}
          <span className="mx-2 text-line">·</span>
          {education.dates}
        </p>
      </div>
    </section>
  );
}
