import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <Link>HOLIHLI</Link>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Contact</Link>
      </header>
    </div>
  );
}
