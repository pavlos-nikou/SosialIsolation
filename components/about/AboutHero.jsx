export default function AboutHero() {
  return (
    <section className="min-h-[85vh] flex items-center bg-warm-bg px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-block mb-5 rounded-full bg-care px-5 py-2 text-sm text-teal">
            Safe first. Data second. Human always.
          </span>


          <h1 className="
            text-5xl md:text-6xl
            font-semibold
            text-text
            leading-tight
          ">
            A safe space where
            connection can begin again.
          </h1>


          <p className="
            mt-6
            text-lg
            leading-relaxed
            text-muted
            max-w-xl
          ">
            TalkPoint helps people share how they feel safely,
            privately, and without pressure — creating a bridge
            between people and the support they may need.
          </p>


          <div className="mt-10 flex gap-4">

            <button
              className="
              bg-teal
              text-white
              px-7 py-3
              rounded-full
              hover:opacity-90
              transition
              "
            >
              Start safely
            </button>


            <button
              className="
              border
              border-border
              px-7 py-3
              rounded-full
              text-text
              bg-surface
              "
            >
              Learn more
            </button>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div
          className="
          bg-surface
          rounded-[3rem]
          p-12
          shadow-sm
          border
          border-border
          "
        >

          <div
            className="
            bg-warm-surface
            rounded-[2rem]
            p-10
            text-center
            "
          >

            <p className="text-6xl mb-6">
              ◌
            </p>


            <h3 className="
              text-2xl
              text-teal
              font-medium
            ">
              You are not alone.
            </h3>


            <p className="
              mt-4
              text-muted
              leading-relaxed
            ">
              Your voice matters.
              You can share safely,
              with dignity, clarity and control.
            </p>


          </div>

        </div>


      </div>

    </section>
  )
}