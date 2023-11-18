import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <Link to={"/"}>HOLIHLI</Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </header>
    </div>
  );
}
