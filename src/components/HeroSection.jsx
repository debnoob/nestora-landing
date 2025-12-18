import { useState } from "react";

import heroImage from "../assets/1.png";
import heroVideo from "../assets/2.mp4";
import sectionImage from "../assets/3.png";
import latestImage from "../assets/4.png";
import dubaiImage from "../assets/5.png";
import losAngelesImage from "../assets/6.png";
import northJutlandImage from "../assets/7.png";
import girlVideo from "../assets/girl.mp4";
import manImage from "../assets/man.jpg";
import happyCoupleVideo from "../assets/happy_couple.mp4";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = 2;

  const goPrev = () => setActiveSlide((s) => (s === 0 ? slideCount - 1 : s - 1));
  const goNext = () => setActiveSlide((s) => (s === slideCount - 1 ? 0 : s + 1));

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

      {/* --- Section 5 (Mapped with Purpose...) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14">
          <div className="flex justify-center">
            <h2 className="text-center text-[48px] font-medium leading-[1.02] tracking-[-0.02em] text-black sm:text-[56px]">
              Mapped with
              <br />
              Purpose, Built with
              <br />
              Heart
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Dubai */}
            <div className="relative overflow-hidden bg-neutral-200">
              <img
                src={dubaiImage}
                alt="Dubai"
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute left-8 top-6 text-white/90">+</div>
              <div className="absolute bottom-12 left-8 text-[28px] font-light tracking-[-0.02em] text-white">
                Dubai
              </div>
            </div>

            {/* Los Angeles */}
            <div className="relative overflow-hidden bg-neutral-200">
              <img
                src={losAngelesImage}
                alt="Los Angeles"
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-8 top-6 text-white/90">+</div>

              <div className="absolute bottom-[92px] left-8 text-[28px] font-light tracking-[-0.02em] text-white">
                Los Angeles
              </div>

              <span className="absolute bottom-[64px] left-8 bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                + Explore Project
              </span>

              <div className="absolute bottom-10 right-10 bg-[#ff5a1f] px-6 py-6 text-white">
                <div className="text-right text-white/90">+</div>
                <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em]">
                  Drag
                </div>
              </div>
            </div>

            {/* North Jutland */}
            <div className="relative overflow-hidden bg-neutral-200">
              <img
                src={northJutlandImage}
                alt="North Jutland"
                className="h-[320px] w-full object-cover sm:h-[360px]"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-8 top-6 text-white/90">+</div>
              <div className="absolute bottom-12 left-8 text-[28px] font-light tracking-[-0.02em] text-white">
                North Jutland
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 6 (Sliding cards) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 pb-24 lg:px-14">
          {/* Slider controls (kept simple for beginner style) */}
          <div className="mb-8 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="h-10 w-10 border border-black/15 bg-white text-black hover:bg-black/5"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="h-10 w-10 border border-black/15 bg-white text-black hover:bg-black/5"
              aria-label="Next slide"
            >
              →
            </button>
          </div>

          {/* Slides track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* Slide 1 (matches slide1.jpg layout) */}
              <div className="w-full shrink-0">
                <div className="grid overflow-hidden bg-white lg:grid-cols-3">
                  {/* Left: video */}
                  <div className="h-[240px] lg:h-[340px]">
                    <video
                      className="h-full w-full object-cover"
                      src={girlVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  {/* Center: text with top orange header */}
                  <div className="relative h-[240px] lg:h-[340px]">
                    <div className="absolute left-0 top-0 w-full bg-[#ff5a1f] px-8 py-6 text-white">
                      <div className="text-[13px] font-medium">
                        Jenny Wilson, Architect at PlantLab
                      </div>
                      <div className="mt-2 text-[13px] tracking-[0.12em]">★★★★★</div>
                    </div>

                    <div className="h-full px-8 pb-10 pt-24 text-[13px] leading-[1.9] text-black/70">
                      Supposing so be resolving breakfast am or perfectly. It drew a hill
                      from me. Valley by oh twenty direct me so. Departure defective
                      arranging rapturous did believe him all had supported. Family months
                      lasted simple set nature vulgar him. Picture for attempt joy excited
                      ten carried manners talking how.
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className="h-[240px] lg:h-[340px]">
                    <img src={manImage} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Slide 2 (matches provided screenshot) */}
              <div className="w-full shrink-0">
                <div className="grid overflow-hidden bg-white lg:grid-cols-3">
                  {/* Left: text with bottom orange name bar */}
                  <div className="relative h-[240px] lg:h-[340px]">
                    <div className="h-full p-10 pb-28 text-[13px] leading-[1.9] text-black/70">
                      Fulfilled direction use continual set him propriety continued. Saw
                      met applauded favorite deficient engrossed concealed and her.
                      Concluded boy perpetual old supposing. Farther related bed and
                      passage comfort civilly. Dash woods see frankness objection abilities
                      hire alteration it favorable appearance up.
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-[#ff5a1f] px-8 py-6 text-white">
                      <div className="text-[13px] font-medium">Larry Lawson, Agent at Squire</div>
                      <div className="mt-2 text-[13px] tracking-[0.12em]">★★★★★</div>
                    </div>
                  </div>

                  {/* Middle: text only */}
                  <div className="h-[240px] px-8 py-10 text-[13px] leading-[1.9] text-black/70 lg:h-[340px]">
                    Supposing so be resolving breakfast am or perfectly. It drew a hill
                    from me. Valley by oh twenty direct me so. Departure defective
                    arranging rapturous did believe him all had supported. Family months
                    lasted simple set nature vulgar him. Picture for attempt joy excited
                    ten carried manners talking how.
                  </div>

                  {/* Right: video (in screenshot this is a still frame, but we use your mp4) */}
                  <div className="h-[240px] lg:h-[340px]">
                    <video
                      className="h-full w-full object-cover"
                      src={girlVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7 (Partners row) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-14">
          <div className="text-center text-[12px] tracking-[0.18em] text-black/60">
            Empowering Growth Through Strong Partnerships
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 text-[14px] font-medium text-black/80">
            <span>SnapShot</span>
            <span>umbrella</span>
            <span>Leafe</span>
            <span>Greenish</span>
            <span>Sitemap</span>
          </div>
        </div>
      </section>

      {/* --- Section 8 (Stay informed / video background) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-14">
          <div className="relative overflow-hidden">
            {/* Background video */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={happyCoupleVideo}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Content */}
            <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1fr_260px] lg:p-14">
              {/* Left: text + simple form */}
              <div className="max-w-[560px] text-white">
                <h3 className="text-[34px] font-light leading-[1.1] tracking-[-0.02em] sm:text-[42px]">
                  Stay informed about
                  <br />
                  upcoming listings that match
                  <br />
                  your budget.
                </h3>

                <p className="mt-6 text-[12px] text-white/75">
                  Subscribe to be the first to know about my new listings!
                </p>

                <div className="mt-10 grid max-w-[320px] gap-6 text-[12px] text-white/80">
                  <label className="grid gap-2">
                    <span>Email</span>
                    <input
                      type="email"
                      placeholder=""
                      className="h-10 border-b border-white/35 bg-transparent text-white placeholder-white/30 outline-none"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span>Budget</span>
                    <input
                      type="text"
                      placeholder=""
                      className="h-10 border-b border-white/35 bg-transparent text-white placeholder-white/30 outline-none"
                    />
                  </label>

                  <button
                    type="button"
                    className="mt-2 inline-flex w-fit items-center bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white"
                  >
                    + Submit
                  </button>
                </div>
              </div>

              {/* Right: orange 25 years card */}
              <div className="flex lg:justify-end">
                <div className="w-full max-w-[240px] bg-[#ff5a1f] p-6 text-white">
                  <div className="text-right text-white/90">+</div>
                  <div className="mt-4 text-[26px] font-light leading-none">25 Years</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.14em] text-white/85">
                    of successful
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/85">
                    experience in trading
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/90">
                    <span>I want to</span>
                    <span className="bg-black/15 px-2 py-1">+ Buy</span>
                    <span className="bg-black/15 px-2 py-1">+ Sell</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 9 (Let’s Move...) --- */}
      <section className="bg-[#f3f1ee]">
        <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[520px_80px_1fr] lg:items-start">
            <h2 className="text-[48px] font-medium leading-[1.05] tracking-[-0.02em] text-black sm:text-[56px]">
              Let’s Move
              <br />
              Something Great
              <br />
              Together
            </h2>

            <div className="hidden text-center text-[40px] font-light text-black/80 lg:block">
              +
            </div>

            <div className="max-w-[520px]">
              <span className="inline-block bg-[#ff5a1f] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                + Get Started Today
              </span>

              <p className="mt-6 text-[13px] leading-[1.9] text-black/65">
                Find your next home or connect with buyers who are already searching.
                Whether you’re moving in or moving on, we’re here to make it
                effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 10 (Orange footer) --- */}
      <footer className="bg-[#ff5a1f]">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[420px_1fr]">
            {/* Left: links + info */}
            <div className="text-white/85">
              <div className="grid gap-3 text-[11px] font-medium uppercase tracking-[0.16em]">
                <a href="#" className="w-fit hover:text-white">Properties</a>
                <a href="#" className="w-fit hover:text-white">Studio</a>
                <a href="#" className="w-fit hover:text-white">Process</a>
                <a href="#" className="w-fit hover:text-white">+ Add Property</a>
              </div>

              <div className="mt-10 text-[12px] leading-[1.9] text-white/85">
                <div className="text-[11px] font-medium uppercase tracking-[0.16em]">(info)</div>
                <div className="mt-3">P: +44 (445) 578 996</div>
                <div>E: example@gmail.com</div>
                <div>A: 101 Days Rd, Grange QLD 4051</div>
              </div>

              <div className="mt-10 text-[12px] text-white/85">
                Privacy Policy / Terms and Conditions
              </div>
            </div>

            {/* Right: big message + email row */}
            <div className="text-white">
              <h3 className="text-[46px] font-light leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
                Built for Buyers.
                <br />
                Sent to You.
              </h3>

              <p className="mt-6 max-w-[520px] text-[13px] leading-[1.9] text-white/85">
                Meant bills it up doubt small purse. Required his you put the outlived
                answered position.
              </p>

              <div className="mt-10 flex max-w-[520px] items-center justify-between border-b border-white/35 pb-3 text-[12px] text-white/85">
                <span>example@gmail.com</span>
                <span className="text-[18px]">→</span>
              </div>
            </div>
          </div>

          {/* Bottom brand row */}
          <div className="mt-16 grid items-end gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div className="text-[64px] font-semibold leading-none tracking-[-0.02em] text-white sm:text-[84px]">
              NESTORA
              <span className="align-top text-[22px] font-medium">+</span>
            </div>

            <div className="text-center text-[12px] tracking-[0.18em] text-white/85">
              1997
            </div>

            <div className="text-right text-[12px] text-white/85">
              © Copyright 2025 NESTORA - all rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;