import portrait from '../assets/portrait.jpg';
import { profile } from '../data/resume';
import EmailLink from './EmailLink';

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col-reverse items-start gap-10 px-6 pb-20 pt-16 sm:px-8 sm:pt-24 md:flex-row md:items-center md:gap-16"
    >
      <div className="flex-1">
        <p className="font-serif text-sm italic text-accent">{profile.location}</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-muted">{profile.title}</p>
        <div className="mt-8 max-w-xl space-y-4 text-base leading-relaxed text-ink/80">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
          <a
            href="#experience"
            className="rounded-full bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-accent"
          >
            View experience
          </a>
          <EmailLink className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent" />
        </div>
      </div>
      <img
        src={portrait}
        alt={profile.name}
        className="w-48 shrink-0 rounded-2xl border border-line object-cover sm:w-64 md:w-72"
      />
    </section>
  );
}
