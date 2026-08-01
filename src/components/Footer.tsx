import { profile } from '../data/resume';
import EmailLink from './EmailLink';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl tracking-tight text-ink">
          Let's talk
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          I'm open to new opportunities. The fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <EmailLink className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
        <p className="mt-16 text-xs text-muted">
          {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
