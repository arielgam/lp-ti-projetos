import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import Links from "../molecules/Links";

export default function Header() {
  const pathname = window.location.href;
  const linksHeader = [
    {
      texto: "Our rates",
      url: `${pathname}#rates`,
    },
    {
      texto: "Favorite projects",
      url: `${pathname}#projects`,
    },
    {
      texto: "Reviews",
      url: `${pathname}#reviews`,
    },
    {
      texto: "Contacts",
      url: `${pathname}#contacts`,
    },
  ];
  return (
    <header className="px-12 py-7 flex justify-between border-b-2 border-[#d9dbe0]">
      <Logo />
      <Links links={linksHeader} />
    </header>
  );
}
