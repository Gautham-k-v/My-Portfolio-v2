function Icon({ children, filled = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function TechIcon({ name }) {
  switch (name) {
    case "html":
      return (
        <Icon>
          <path d="M5 3.5h14l-1.2 15.2L12 21l-5.8-2.3L5 3.5Z" />
          <path d="M8 7.5h8M15.4 11.5H8.3l.3 3.6L12 16.2l3.3-1.1.2-2" />
        </Icon>
      );
    case "css":
      return (
        <Icon>
          <path d="M5 3.5h14l-1.2 15.2L12 21l-5.8-2.3L5 3.5Z" />
          <path d="M8 7.5h8l-.4 4H9.2M9.4 15.2 12 16.1l2.5-.8" />
        </Icon>
      );
    case "javascript":
      return (
        <Icon>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
          <path d="M9 16.5c.3.8 1 1.2 2 .1V11M14.2 16.6c.5.8 1.4 1.2 2.3.2V11" />
        </Icon>
      );
    case "react":
      return (
        <Icon>
          <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        </Icon>
      );
    case "bootstrap":
      return (
        <Icon>
          <rect x="4" y="3.5" width="16" height="17" rx="4" />
          <path d="M9 8h3.2a2.2 2.2 0 0 1 0 4.4H9V8Zm0 4.4h3.6a2.3 2.3 0 0 1 0 4.6H9v-4.6Z" />
        </Icon>
      );
    case "tailwind":
      return (
        <Icon>
          <path d="M4 9.5c1.2-2.4 2.6-3.6 4.2-3.6 2.4 0 2.7 1.8 3.8 3.6 1 1.6 2.1 3.2 4.2 3.2 1.4 0 2.5-.8 3.6-2.4" />
          <path d="M4 15.2c1.2-2.4 2.6-3.6 4.2-3.6 2.4 0 2.7 1.8 3.8 3.6 1 1.6 2.1 3.2 4.2 3.2 1.4 0 2.5-.8 3.6-2.4" />
        </Icon>
      );
    case "node":
      return (
        <Icon>
          <path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4L12 2.8Z" />
          <path d="M9 12.2c.4 2.2 1.6 3.2 3.2 3.2 1.4 0 2.2-.7 2.2-1.7 0-2.4-5.2-1.3-5.2-4 0-1.2 1-2.1 2.6-2.1 1.5 0 2.5.7 2.9 2" />
        </Icon>
      );
    case "express":
      return (
        <Icon>
          <path d="M4 7h6M4 12h16M14 17h6" />
          <circle cx="12" cy="7" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="8" cy="12" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="16" cy="17" r="1.6" fill="currentColor" stroke="none" />
        </Icon>
      );
    case "mongodb":
      return (
        <Icon>
          <path d="M12 3s4.2 3.4 4.2 8.2c0 3.2-1.8 5.6-3.4 7.1L12 21l-.8-2.7C9.6 16.8 7.8 14.4 7.8 11.2 7.8 6.4 12 3 12 3Z" />
          <path d="M12 21v-6" />
        </Icon>
      );
    case "api":
      return (
        <Icon>
          <path d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16M13 6l-2 12" />
        </Icon>
      );
    case "git":
      return (
        <Icon>
          <circle cx="6.5" cy="6.5" r="2" />
          <circle cx="6.5" cy="17.5" r="2" />
          <circle cx="17.5" cy="8.5" r="2" />
          <path d="M6.5 8.5v7M8.4 7.6c2.2.7 4.3 1 6.7 1.1" />
        </Icon>
      );
    case "github":
      return (
        <Icon filled>
          <path d="M12 3.2a8.8 8.8 0 0 0-2.78 17.14c.44.08.6-.19.6-.42v-1.48c-2.45.53-2.97-1.05-2.97-1.05-.4-.99-.97-1.26-.97-1.26-.8-.54.06-.53.06-.53.88.06 1.34.9 1.34.9.78 1.33 2.05.95 2.55.72.08-.57.3-.95.55-1.17-1.96-.22-4.02-.98-4.02-4.36 0-.96.34-1.75.9-2.36-.09-.22-.39-1.12.09-2.33 0 0 .74-.24 2.42.9a8.3 8.3 0 0 1 4.4 0c1.68-1.14 2.42-.9 2.42-.9.48 1.21.18 2.11.09 2.33.56.61.9 1.4.9 2.36 0 3.39-2.06 4.13-4.03 4.35.32.27.6.81.6 1.64v2.43c0 .23.16.51.61.42A8.8 8.8 0 0 0 12 3.2Z" />
        </Icon>
      );
    case "vscode":
      return (
        <Icon>
          <path d="M16.5 4.5 9 10.2 6.2 8.2 4 9.4v5.2l2.2 1.2L9 13.8l7.5 5.7L20 18V6l-3.5-1.5Z" />
          <path d="M9 10.2v3.6" />
        </Icon>
      );
    case "postman":
      return (
        <Icon>
          <path d="M4 12.5 19.5 5.5 14 19.5l-2.2-5.2L4 12.5Z" />
        </Icon>
      );
    case "hoppscotch":
      return (
        <Icon>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
          <path d="M12 4v2.2M12 17.8V20M4 12h2.2M17.8 12H20" />
        </Icon>
      );
    case "axios":
      return (
        <Icon>
          <path d="M4 8h7l-2-2M11 8 9 10M13 16H6l2 2M6 16l2-2M14 7l6 5-6 5" />
        </Icon>
      );
    case "figma":
      return (
        <Icon>
          <circle cx="9" cy="6.5" r="2.4" />
          <circle cx="15" cy="6.5" r="2.4" />
          <circle cx="9" cy="12" r="2.4" />
          <circle cx="15" cy="12" r="2.4" />
          <rect x="6.6" y="14.6" width="4.8" height="4.8" rx="1" />
        </Icon>
      );
    case "cursor":
      return (
        <Icon>
          <path d="M6 4.5 16.5 11 10.8 12.2 13.5 18l-2.2 1.1-2.7-5.8L6 16.2V4.5Z" />
          <path d="M17 5.2 18.2 3M18.5 8.2H20.5M16.2 7.4l1.2-1" />
        </Icon>
      );
    case "vercel":
      return (
        <Icon filled>
          <path d="M12 4.2 21 19.2H3L12 4.2Z" />
        </Icon>
      );
    case "pages":
      return (
        <Icon>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8s-1.1 5.7-3.3 8c-2.2-2.3-3.3-5-3.3-8s1.1-5.7 3.3-8Z" />
        </Icon>
      );
    default:
      return (
        <Icon>
          <circle cx="12" cy="12" r="4" />
        </Icon>
      );
  }
}
