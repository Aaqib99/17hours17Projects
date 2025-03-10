import { copyrightSign } from "../assets/assets/icons";
import { footerLogo } from "../assets/assets/images";
import { footerLinks, socialMedia } from "../constants/data";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-start gap-20 sm:justify-between justify-center  flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p className="info-text mt-6 text-base font-montserrat text-white-400 sm:max-w-sm">
            Get your shoes ready for the new term at your nearest Nike store.
            Find Your perfect size in store. Get rewards
          </p>
          <div className="flex  gap-5 mt-8 items-center ">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full "
              >
                <img src={icon.src} alt="" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-center sm:justify-between items-start flex-col sm:flex-row lg:gap-10 gap-20 text-white">
          {footerLinks.map((section) => (
            <div
              key={section.title}
              className="flex sm:justify-center sm:items-center flex-col"
            >
              <h4 className="text-2xl mb-6 leading-normal font-montserrat ">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat leading-normal hover:text-slate-gray"
                  >
                    {" "}
                    <a> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex justify-start gap-2 font-montserrat cursor-pointer items-center">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            alt=""
            className="rounded-full m-0"
          />
          <p>Copywrite @Partik Malasi. All rights reserved</p>
        </div>
        <p className="font-montserrat">Terms and Condition</p>
      </div>
    </footer>
  );
};
export default Footer;
