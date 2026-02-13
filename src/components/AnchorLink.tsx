import { useRouting } from "@/contexts/RoutingContext";

type AnchorLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Hash sans # (ex: "demo", "plateforme") */
  to: string;
  /** Si true, utilise loginUrl au lieu de buildAnchor(to) */
  login?: boolean;
};

export function AnchorLink({ to, login, href, onClick, children, ...props }: AnchorLinkProps) {
  const { buildAnchor, loginUrl, scrollToSection, isEmbedded } = useRouting();
  const url = login ? loginUrl : buildAnchor(to);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (login) return; // laisser le navigateur gérer la navigation vers /authentication/login
    const hash = to.startsWith("#") ? to.slice(1) : to;
    if (!hash) {
      onClick?.(e);
      return;
    }
    const root = document.querySelector("react-landing")?.shadowRoot ?? document;
    const el = root.getElementById(hash);
    if (el) {
      e.preventDefault();
      scrollToSection(hash);
    }
    onClick?.(e);
  };

  return (
    <a href={url} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
