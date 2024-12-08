
const HeroSection = () => {
  return (
    <>
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-shrink-0">
                <a
                  href="#"
                  title="BakerStreet"
                  className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary"
                >
                  <img
                    className="w-auto h-8"
                    src=""
                    alt="PureDrops"
                  />
                </a>
              </div>

              <div className="md:hidden">
                <button
                  type="button"
                  className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                <a
                  href="#"
                  title="Courses"
                  className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
                >
                  Model
                </a>

                <a
                  href="#"
                  title="Sign Up"
                  className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-normal leading-7 transition-all duration-200 border-2 rounded-full text-white border-primary focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary hover:bg-white hover:text-black focus:ring-offset-secondary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://i.postimg.cc/J49DY0Gw/Bgimgpuredrops.jpg"
            alt="Background"
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="w-full lg:w-2/3 xl:w-1/2">
              <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                A step towards change.
              </h1>
              <p className="mt-6 tracking-tighter text-white">
                <span className="font-sans font-normal text-7xl">
                  Securing Clean Water for Everyone
                </span>
                <br />
                <span className="font-serif italic font-normal text-8xl">
                  Pure Drops
                </span>
              </p>
              <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                Water is life. Yet, millions lack access to clean drinking
                water. Pollution, contamination, and scarcity threaten the
                health of communities worldwide. Pure Drops is a step towards
                change.
              </p>

              <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                <a
                  href="#"
                  title="Get Started"
                  className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                  role="button"
                >
                  Contact Us
                </a>

                <a
                  href="#"
                  title="Watch Model"
                  className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full sm:leading-8 text-white border-primary hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary"
                  role="button"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    />
                  </svg>
                  Watch Model
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
