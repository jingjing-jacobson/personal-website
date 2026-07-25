import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section id="work" className="border-t border-line px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl tracking-tight text-ink">Selected work</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const Card = project.link ? 'a' : 'article';
            return (
              <Card
                key={project.title}
                {...(project.link
                  ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group rounded-2xl border border-line p-6 transition-colors hover:border-accent"
              >
                <p className="font-serif text-sm italic text-accent">
                  {project.company}
                </p>
                <h3 className="mt-2 font-serif text-xl text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs text-ink/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.link && (
                  <p className="mt-5 text-sm text-accent transition-transform group-hover:translate-x-1">
                    Read more →
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
