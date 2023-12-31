import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import { TbUserHexagon } from "react-icons/tb";
import { RiMenu4Fill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { GlobalUserContext, NavContext } from "../context";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
/**
 * RootLayout Component
 * This component serves as the root layout for the entire application.
 * It includes the navigation bar, content outlet, and a footer section.
 * The navigation bar allows users to navigate to different sections of
 * the app, and the content outlet displays the main content. The footer
 * contains information about the application or additional links.
 */
export default function RootLayout() {
  // navContext
  const { isOpen, setIsOpen } = useContext(NavContext);
  // user context
  const { user } = useContext(GlobalUserContext);
  // useNavigate function
  const navigate = useNavigate();
  // isActtive object for navlinks
  const navActive = {
    active: "font-medium px-2 bg-primary text-tertiary h-full",
    notActive: "font-normal md:text-tertiary text-alternate",
  };
  // navigation active state
  const [navIsActive, setNavIsActive] = useState(false);
  // set navIsActive state on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setNavIsActive(true) : setNavIsActive(false);
    });
  });
  // Function that close the navbar after 1 sec
  const closeNavBar = () => {
    setTimeout(() => setIsOpen(false), 1000);
  };
  return (
    <>
      <header
        className={`z-20 w-full py-2 px-4 font-supreme font-light max-w-[1400px] mx-auto transition-all duration-300 ${
          navIsActive
            ? "fixed sm:top-2 top-6 left-[50%] -translate-x-[50%] bg-transparent"
            : "relative top-auto left-auto translate-x-0 bg-[#710e09]"
        }`}
      >
        <nav
          className={`w-full border-y border-y-slate-400 py-1 px-3 flex justify-between items-center transition-all duration-300 ${
            navIsActive
              ? "bg-red-500 rounded-full"
              : "bg-transparent rounded-none"
          }`}
        >
          <div
            className={`text-[20px] capitalize flex justify-start items-center gap-6 md:relative md:top-auto md:right-auto md:bg-transparent md:py-0 md:flex-row md:w-auto w-[200px] flex-col py-10 bg-tertiary absolute top-14 transition-all duration-300 ${
              isOpen
                ? "right-5 opacity-100"
                : "right-0 md:opacity-100 opacity-0"
            }`}
          >
            <NavLink
              to={"characters"}
              className={({ isActive }) =>
                isActive ? navActive.active : navActive.notActive
              }
              onClick={() => closeNavBar()}
            >
              characters
            </NavLink>
            <NavLink
              to={"planets"}
              className={({ isActive }) =>
                isActive ? navActive.active : navActive.notActive
              }
              onClick={() => closeNavBar()}
            >
              planets
            </NavLink>
            <NavLink
              to={"starships"}
              className={({ isActive }) =>
                isActive ? navActive.active : navActive.notActive
              }
              onClick={() => closeNavBar()}
            >
              starships
            </NavLink>
          </div>

          <div className="md:w-[200px] w-auto md:border-x border-x-0 border-x-slate-400 border-opacity-60 flex justify-center items-center xl:-translate-x-32 translate-x-0">
            <img
              src={logo}
              alt="logo"
              className="md:w-10 w-8 md:h-10 h-8 object-contain cursor-pointer"
              onClick={() => navigate("/")}
              width={40}
              height={40}
            />
          </div>

          <div className="px-4 flex justify-center items-center gap-4 cursor-pointer">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="profile"
                className="sm:w-10 w-8 object-contain rounded-full"
                onClick={() => navigate("/settings")}
                width={40}
                height={40}
              />
            ) : (
              <TbUserHexagon
                className="text-[26px] cursor-pointer"
                onClick={() => navigate("/settings")}
              />
            )}
            <div
              className="text-2xl md:hidden block cursor-pointer"
              onClick={() => setIsOpen((val) => !val)}
            >
              <RiMenu4Fill />
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-[1400px] mx-auto overflow-x-hidden">
        <Outlet />
      </main>
      <footer className="w-full md:px-12 sm:px-8 px-3 max-w-[1400px] mx-auto">
        <section className="border-t border-t-tertiary border-opacity-50 mt-16 md:py-6 py-4 md:h-[200px] h-[150px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="font-author lg:text-7xl md:text-6xl sm:text-4xl text-2xl font-semibold">
              Explore the galaxy
            </p>
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="profile"
                className="sm:w-10 w-8 object-contain rounded-full"
                onClick={() => navigate("/settings")}
                width={40}
                height={40}
              />
            ) : (
              <TbUserHexagon
                className="sm:text-[26px] text-[22px] cursor-pointer"
                onClick={() => navigate("/settings")}
              />
            )}
          </div>
          <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:gap-0 gap-4 font-supreme">
            <div className="flex justify-start items-center sm:gap-4 gap-2 font-medium sm:text-lg text-base">
              <img
                src={logo}
                alt="logo"
                className="sm:w-10 w-6 object-contain"
                onClick={() => navigate("/")}
                width={36}
                height={36}
              />
              <p>privacy policy</p>
              <p>.</p>
              <p>copyright@2023</p>
            </div>
            <div className="flex justify-end items-center gap-4 text-2xl">
              <BiLogoLinkedin />
              <BiLogoTwitter />
              <BiLogoInstagram />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
