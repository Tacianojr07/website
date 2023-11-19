import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="w-full h-16 max-w-7xl mx-auto flex justify-center items-center my-5 px-4">
      <header className="w-full max-w-7xl flex items-center justify-start gap-11  mb-4 mx-auto font-medium ">
        <Link className="text-3xl" to={"/"}>
          HOLIHLI
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact</Link>
      </header>
    </div>
  );
}
