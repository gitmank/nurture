import Link from "next/link";

// add or remove navigation links to this array
const navlinks = [
  {
    name: "Me",
    href: "/dashboard",
    icon: "🧒",
  },
  {
    name: "Check-in",
    href: "/dashboard/checkin",
    icon: "✅",
  },
  {
    name: "Chat",
    href: "/dashboard/chat",
    icon: "💬",
  },
];

export default function BottomNav({ currentPath }) {
  return (
    <nav className="btm-nav">
      {navlinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={
              currentPath === link.href
                ? `active bg-secondary-default text-primary-default border-primary-default`
                : `bg-secondary-default text-primary-default/80`
            }
          >
            <span className="text-xl">{link.icon}</span>
            <span className="btm-nav-label">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
