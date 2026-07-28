import { education } from '../data/resume';

export default function Education() {
  return (
    <section id="education" className="border-t border-line px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl tracking-tight text-ink">Education</h2>

        <div className="mt-12 space-y-8">
          {education.map((item) => (
            <div
              key={item.school}
              className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <span className="font-serif text-sm italic text-accent">
                {item.dates}
              </span>
              <div>
                <h3 className="font-serif text-xl text-ink">{item.school}</h3>
                <p className="mt-2 text-sm text-muted">
                  {item.degree}
                  <span className="mx-2 text-line">·</span>
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
