import TransitionLink from "../buttons/transitionLink/TransitionLink";
import S from "./NavMenu.module.scss";

const paths = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/archive" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Some", href: "#" },
];

const NavMenu = () => {
  return (
    <div className={S.container}>
      <div className={S.blocksContainer}>
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
        <div data-menubg />
      </div>
      <div className={S.menuContainer}>
        <nav className={S.linkContainer}>
          <ul>
            {paths.map((path) => (
              <li key={path.label}>
                <TransitionLink label={path.label} href={path.href} />
              </li>
            ))}
          </ul>
        </nav>
        <div className={S.socialContainer}>
          <ul>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} data-socials>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
