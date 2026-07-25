import { profile } from '../data/resume';

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

export default function EmailLink({ className = '' }: { className?: string }) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // mailto: only works if the visitor has a desktop mail client configured,
    // which isn't a safe bet for recruiters browsing from work machines — open
    // Gmail's web compose instead so the link always does something.
    event.preventDefault();
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <a href={`mailto:${profile.email}`} onClick={handleClick} className={className}>
      {profile.email}
    </a>
  );
}
