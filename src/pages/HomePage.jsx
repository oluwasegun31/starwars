import anakin from "../assets/anakin.jpg";
import luke from "../assets/luke.png";
import ashoka from "../assets/ashoka.jpeg";
import han from "../assets/han.jpg";
import { FeaturedHeading } from "../components";

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
        <section className="xl:w-[85%] sm:w-[75%] w-full mx-auto mt-16 p-1 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-4 font-author md:mb-24 mb-16">
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
      </section>
    </>
  );
}
