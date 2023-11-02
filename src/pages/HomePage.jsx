import anakin from "../assets/anakin.jpg";
import luke from "../assets/luke.png";
import ashoka from "../assets/ashoka.jpeg";
import han from "../assets/han.jpg";
import { FeaturedHeading } from "../components";
import tatooine from "../assets/Tatooine.jpg";
import tatooineWide from "../assets/Tatooine-wide.jpg";
import bespin from "../assets/Bespin.png";
import bespinWide from "../assets/Bespin-wide.jpg";
import kashyyyk from "../assets/Kashyyyk.jpg";
import kashyyykWide from "../assets/Kashyyyk-wide.png";
import stewjon from "../assets/Stewjon.png";
import stewjonWide from "../assets/Stewjon-wide.jpg";
import starDestroyer from "../assets/Star-Destroyer.png";
/**
 * HomePage Component
 * This component provides the landing page when the user first enters the site.
 */
export default function HomePage() {
  return (
    <>
      {/* Landing section */}
      <section className="bg-landing bg-center bg-cover w-full h-screen z-0 py-4 flex flex-col justify-around items-center">
        <section className="text-center">
          <p className="md:text-2xl text-lg font-supreme italic opacity-75">
            The saftest way to
          </p>
          <p className="xl:text-9xl md:text-8xl text-6xl leading-[0.8] font-semibold font-author">
            Explore the galaxy
          </p>
        </section>
        <section className="border border-slate-400 border-opacity-75 grid sm:grid-cols-3 grid-cols-2 font-supreme capitalize">
          <div className="px-4 py-1 border-r border-r-slate-400 border-opacity-75">
            <p className="font-normal lg:text-3xl sm:text-2xl text-lg">80+</p>
            <p className="font-semibold lg:text-4xl sm:text-3xl text-lg">
              Characters
            </p>
          </div>
          <div className="px-4 py-1 border-r border-r-slate-400 border-opacity-75">
            <p className="font-normal lg:text-3xl sm:text-2xl text-lg">40+</p>
            <p className="font-semibold lg:text-4xl sm:text-3xl text-lg">
              Planets
            </p>
          </div>
          <div className="px-4 py-1 sm:border-t-0 border-t border-t-slate-400 border-opacity-75 sm:col-span-1 col-span-2">
            <p className="font-normal lg:text-3xl sm:text-2xl text-lg">10+</p>
            <p className="font-semibold lg:text-4xl sm:text-3xl text-lg">
              spaceships
            </p>
          </div>
        </section>
      </section>

      <section className="mt-8 min-h-screen w-full sm:p-4 p-2">
        {/* Featured Character  */}
        <FeaturedHeading heading={"characters"} />
        <section className="xl:w-[85%] sm:w-[75%] w-full mx-auto mt-16 p-1 grid lg:grid-cols-4 grid-cols-2 gap-y-4 font-author md:mb-24 mb-16">
          <div className="flex flex-col gap-4 md:h-[480px] h-[440px] sm:p-4 p-2 text-left capitalize border-x border-x-tertiary border-opacity-40 relative group cursor-default">
            <img
              src={anakin}
              alt="anakin"
              className="w-full h-[90%] object-cover group-hover:h-full group-hover:grayscale transition-all duration-300 ease-in"
            ></img>
            <p className="sm:text-2xl text-lg font-medium opacity-75 leading-[0.9] group-hover:hidden">
              anakin skywalker
            </p>
            <p className="absolute top-10 left-8 font-medium text-5xl uppercase scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px]">
              anakin
            </p>
          </div>
          <div className="flex flex-col-reverse gap-4 md:h-[480px] h-[440px] sm:p-4 p-2 text-left capitalize border-r border-r-tertiary border-opacity-40 relative group cursor-default">
            <img
              src={luke}
              alt="luke"
              className="w-full h-[90%] object-cover group-hover:h-full group-hover:grayscale transition-all duration-300 ease-in"
            ></img>
            <p className="sm:text-2xl text-lg font-medium opacity-75 leading-[0.9] group-hover:hidden">
              luke skywalker
            </p>
            <p className="absolute top-10 left-8 font-medium text-5xl uppercase scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px]">
              luke
            </p>
          </div>
          <div className="flex flex-col gap-4 md:h-[480px] h-[440px] sm:p-4 p-2 text-left capitalize relative group cursor-default">
            <img
              src={ashoka}
              alt="ashoka"
              className="w-full h-[90%] object-cover group-hover:h-full group-hover:grayscale transition-all duration-300 ease-in"
            ></img>
            <p className="sm:text-2xl text-lg font-medium opacity-75 leading-[0.9] group-hover:hidden">
              ashoka tano
            </p>
            <p className="absolute top-10 left-8 font-medium text-5xl uppercase scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px]">
              ashoka
            </p>
          </div>
          <div className="flex flex-col-reverse gap-4 md:h-[480px] h-[440px] sm:p-4 p-2 text-left capitalize border-x border-x-tertiary border-opacity-40 relative group cursor-default">
            <img
              src={han}
              alt="han"
              className="w-full h-[90%] object-cover group-hover:h-full group-hover:grayscale transition-all duration-300 ease-in"
            ></img>
            <p className="sm:text-2xl text-lg font-medium opacity-75 leading-[0.9] group-hover:hidden">
              han solo
            </p>
            <p className="absolute top-10 left-8 font-medium text-5xl uppercase scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px]">
              han
            </p>
          </div>
        </section>
        {/* Fearured planets */}
        <FeaturedHeading heading={"planets"} />
        <section className="xl:w-[83%] lg:w-[85%] sm:w-[95%] w-full mx-auto border border-tertiary border-opacity-20 mt-32 p-2 grid md:grid-cols-4 grid-cols-2 sm:gap-x-4 gap-x-2 md:gap-y-0 sm:gap-y-24 gap-y-16 mb-32">
          <div className="relative group cursor-default">
            <img
              src={tatooineWide}
              alt="Tatooine"
              className="w-full sm:h-[380px] h-[300px] group-hover:grayscale transition-all duration-300"
            ></img>
            <img
              src={tatooine}
              alt="Tatooine"
              className="sm:w-32 w-24 sm:h-32 h-24 rounded-full absolute sm:-top-20 -top-14 left-[50%] -translate-x-[50%]"
            ></img>
            <p className="sm:text-4xl text-3xl font-supreme font-semibold uppercase absolute top-8 left-4 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px] scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 text-white">
              Tatooine
            </p>
          </div>
          <div className="relative group cursor-default">
            <img
              src={bespinWide}
              alt="Bespin"
              className="w-full sm:h-[380px] h-[300px] group-hover:grayscale transition-all duration-300"
            ></img>
            <img
              src={bespin}
              alt="Bespin"
              className="sm:w-32 w-24 sm:h-32 h-24 rounded-full absolute sm:-top-20 -top-14 left-[50%] -translate-x-[50%]"
            ></img>
            <p className="sm:text-4xl text-3xl font-supreme font-semibold uppercase absolute top-8 left-4 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px] scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 text-alternate">
              Bespin
            </p>
          </div>
          <div className="relative group cursor-default">
            <img
              src={kashyyykWide}
              alt="Kashyyyk"
              className="w-full sm:h-[380px] h-[300px] group-hover:grayscale transition-all duration-300"
            ></img>
            <img
              src={kashyyyk}
              alt="Kashyyyk"
              className="sm:w-32 w-24 sm:h-32 h-24 rounded-full absolute sm:-top-20 -top-14 left-[50%] -translate-x-[50%]"
            ></img>
            <p className="sm:text-4xl text-3xl font-supreme font-semibold uppercase absolute top-8 left-4 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px] scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 text-white">
              Kashyyyk
            </p>
          </div>
          <div className="relative group cursor-default">
            <img
              src={stewjonWide}
              alt="Stewjon"
              className="w-full sm:h-[380px] h-[300px] group-hover:grayscale transition-all duration-300"
            ></img>
            <img
              src={stewjon}
              alt="Stewjon"
              className="sm:w-32 w-24 sm:h-32 h-24 object-contain rounded-full absolute sm:-top-20 -top-14 left-[50%] -translate-x-[50%]"
            ></img>
            <p className="sm:text-4xl text-3xl font-supreme font-semibold uppercase absolute top-8 left-4 [writing-mode:vertical-lr] [text-orientation:upright] [letter-spacing:-10px] scale-0 group-hover:scale-100 origin-top-right transition-all duration-300 text-alternate">
              Stewjon
            </p>
          </div>
        </section>
        {/* Featured Starship */}
        <FeaturedHeading heading={"Starship"} />
        <section className="w-full flex flex-col justify-center items-center mt-16 relative">
          <img
            src={starDestroyer}
            alt="Star-Destroyer"
            className="w-[600px] object-contain"
          />
          <p className="w-full text-center capitalize font-author font-semibold lg:text-9xl sm:text-8xl text-[12vw] leading-none absolute top-24 left-[50%] lg:-translate-x-[50%] -translate-x-[45%] mix-blend-difference opacity-70">
            Star Destroyer
          </p>
        </section>
      </section>
    </>
  );
}
