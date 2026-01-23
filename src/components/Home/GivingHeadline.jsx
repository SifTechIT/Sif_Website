function GivingHeadline() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        {/* Line 1 */}
        <h1 className="text-center  text-[34px] font-extrabold leading-[1.05] tracking-tight text-[#5f5f5f] sm:text-[52px]">
          How joy of giving helps build
        </h1>

        {/* Line 2 (a + promising + future) */}
        <div className="mt-2 flex flex-wrap items-end justify-center gap-x-4 gap-y-2">
          <span className="font-serif text-[34px] font-extrabold leading-none tracking-tight text-[#5f5f5f] sm:text-[52px]">
            a
          </span>

          <span
            className="
              relative
              font-[cursive]
              text-[46px]
              leading-[0.85]
              text-[#d77a3a]
              sm:text-[76px]
            "
            style={{
              fontFamily: '"Great Vibes", cursive',
              transform: "rotate(-2deg)",
              textShadow: "0 1px 0 rgba(0,0,0,0.06)",
            }}
          >
            promising
          </span>

          <span className="font-serif text-[34px] font-extrabold leading-none tracking-tight text-[#5f5f5f] sm:text-[52px]">
            future
          </span>
        </div>
      </div>
    </section>
  );
}

export default GivingHeadline;
