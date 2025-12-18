import heroImage from "../assets/1.png";
import heroVideo from "../assets/2.mp4";

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
    </>
  );
};

export default HeroSection;