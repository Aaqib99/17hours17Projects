import { list } from "postcss";
import { headerLogo } from "../assets/assets/images";
import { navLinks } from "../constants/data";
import { hamburger } from "../assets/assets/icons";
const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex items-center justify-between ">
        <a href="/">
          <img
            className=""
            src={headerLogo}
            alt="logo"
            width={130}
            height={30}
          />
        </a>
        <ul className="flex flex-1 gap-16 justify-end items-centre max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hum" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
