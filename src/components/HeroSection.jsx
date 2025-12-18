import heroImage from "../assets/1.png";
import heroVideo from "../assets/2.mp4";
import sectionImage from "../assets/3.png";
import latestImage from "../assets/4.png";

const HeroSection = () => {
  return (
    <>
      {/* --- Section 1 (top intro) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: headline + arrow */}
            <div className="flex-1">
              <h1 className="text-[52px] font-medium leading-[1.02] tracking-[-0.02em] text-[#111] sm:text-[64px] lg:text-[72px]">
                Discover Premium
                <br />
                Residences in Landmark
                <br />
                Homes
              </h1>

              <div className="mt-16 text-2xl font-light text-black/60">↓</div>
            </div>

            {/* Right: image + CTA */}
            <div className="w-full max-w-[360px] lg:max-w-[420px]">
              <div className="relative overflow-hidden bg-neutral-200">
                <img
                  src={heroImage}
                  alt="Interior"
                  className="h-[260px] w-full object-cover sm:h-[300px]"
                />

                <a
                  href="#"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white"
                >
                  + Explore Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2 (video hero) --- */}
      <section className="relative">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Top orange nav bar */}
        <div className="absolute left-0 top-0 z-10 w-full bg-[#ff5a1f]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 lg:px-14">
            <div className="flex items-center gap-6">
              <div className="text-sm font-semibold tracking-wide text-white">NESTORA</div>
              <div className="text-xs tracking-[0.25em] text-white/90">1997</div>
            </div>

            <nav className="hidden items-center gap-10 text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 md:flex">
              <a href="#" className="hover:text-white">Properties</a>
              <a href="#" className="hover:text-white">Studio</a>
              <a href="#" className="hover:text-white">Process</a>
              <a href="#" className="hover:text-white">+ Add Property</a>
            </nav>
          </div>
        </div>

        {/* Foreground content (bottom aligned like the screenshot) */}
        <div className="relative z-10 flex min-h-[520px] items-end lg:min-h-[600px]">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-14 lg:px-14">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Bottom-left: label + headline */}
              <div className="max-w-[520px]">
                <span className="inline-block bg-[#ff5a1f] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                  + Add Property
                </span>

                <h2 className="mt-6 text-[56px] font-light leading-[1.02] tracking-[-0.02em] text-white sm:text-[70px] lg:text-[78px]">
                  Modern
                  <br />
                  Homes. Prime
                  <br />
                  Locations.
                </h2>
              </div>

              {/* Bottom-right: stats */}
              <div className="grid w-full max-w-[640px] grid-cols-3 gap-10 text-white lg:pb-4">
                <div>
                  <div className="text-[44px] font-light leading-none lg:text-[52px]">99%</div>
                  <div className="mt-3 text-[11px] tracking-wide text-white/80">
                    Customer satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-[44px] font-light leading-none lg:text-[52px]">56+</div>
                  <div className="mt-3 text-[11px] tracking-wide text-white/80">
                    Experience agents
                  </div>
                </div>
                <div>
                  <div className="text-[44px] font-light leading-none lg:text-[52px]">249</div>
                  <div className="mt-3 text-[11px] tracking-wide text-white/80">
                    Total property sell
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3 (intro + image + sell/buy) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-14">
          {/* Top centered paragraph */}
          <p className="mx-auto max-w-[820px] text-center text-[18px] leading-[1.8] text-black/80 sm:text-[20px]">
            Discover stunning residential buildings and modern apartments designed
            for every lifestyle — whether you're buying, renting, or investing.
          </p>

          {/* Bottom layout */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            {/* Image + badge */}
            <div className="relative">
              <div className="overflow-hidden bg-neutral-200">
                <img
                  src={sectionImage}
                  alt="Property"
                  className="h-[280px] w-full object-cover sm:h-[330px]"
                />
              </div>

              {/* Orange badge */}
              <div className="absolute -bottom-10 left-0 w-[160px] bg-[#ff5a1f] px-6 py-7 text-white">
                <div className="text-[28px] font-light leading-none">25 Years</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/85">
                  Of successful
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/85">
                  experience in trading
                </div>
              </div>
            </div>

            {/* Right: tag + Sell/Buy */}
            <div className="pt-12 lg:pt-0">
              <span className="inline-block bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                + Explore Properties
              </span>

              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-[18px] font-medium text-black">Sell</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-black/65">
                    Speedily say has suitable disposal add boy.
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-medium text-black">Buy</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-black/65">
                    Passage its ten led removal. Preference any astonished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4 (Latest Properties) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14">
          {/* Top row */}
          <div className="grid gap-10 lg:grid-cols-[360px_1fr_auto] lg:items-start">
            <h2 className="text-[56px] font-medium leading-[1.02] tracking-[-0.02em] text-black sm:text-[64px]">
              Latest
              <br />
              Properties
            </h2>

            <div className="pt-3">
              <ul className="space-y-4 text-[14px] text-black/80">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-[#ff5a1f]" />
                  <span>Haig</span>
                </li>
                <li>Myrtle Pool House</li>
                <li>Clifton</li>
                <li>Sidney house</li>
                <li>Sweetman</li>
              </ul>
            </div>

            <div className="lg:pt-2">
              <a
                href="#"
                className="inline-block bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white"
              >
                + Explore All Projects
              </a>
            </div>
          </div>

          {/* Main content: image + details */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-stretch">
            <div className="overflow-hidden bg-neutral-200">
              <img
                src={latestImage}
                alt="Latest property"
                className="h-[360px] w-full object-cover sm:h-[420px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="text-[12px] tracking-[0.18em] text-black/70">2024</div>
                <h3 className="mt-6 text-[44px] font-medium leading-none text-black">
                  Haig
                </h3>

                <p className="mt-6 text-[13px] leading-[1.8] text-black/65">
                  Van buren st quincy,
                  <br />
                  illinois(il), 62301
                </p>

                <div className="mt-10 flex items-center gap-8 text-[12px] text-black/70">
                  <span>925 Sq.ft</span>
                  <span className="h-4 w-px bg-black/15" />
                  <span>3 Bath</span>
                  <span className="h-4 w-px bg-black/15" />
                  <span>2 Bed</span>
                </div>
              </div>

              <div className="mt-16">
                <div className="text-[18px] font-semibold text-black">$24,458 USD</div>
                <a
                  href="#"
                  className="mt-6 inline-block bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white"
                >
                  + Explore Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;