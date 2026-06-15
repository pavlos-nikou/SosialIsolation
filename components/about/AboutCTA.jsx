import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-surface px-6 py-24">
      <div
        className="
        max-w-5xl
        mx-auto
        bg-warm-bg
        border
        border-border
        rounded-[3rem]
        p-12
        md:p-20
        text-center
        "
      >

        <span className="text-teal text-sm font-medium">
          Begin when you are ready
        </span>


        <h2
          className="
          mt-5
          text-4xl
          md:text-6xl
          font-semibold
          text-text
          leading-tight
          "
        >
          You are not alone.
        </h2>


        <p
          className="
          mt-6
          max-w-2xl
          mx-auto
          text-lg
          text-muted
          leading-relaxed
          "
        >
          TalkPoint is here to help you take the first small step toward
          connection — safely, privately and at your own pace.
        </p>


        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >

          <Link
            href="/talk"
            className="
            bg-teal
            text-white
            px-8
            py-3
            rounded-full
            hover:opacity-90
            transition
            "
          >
            Start safely
          </Link>


          <Link
            href="/"
            className="
            bg-surface
            border
            border-border
            text-text
            px-8
            py-3
            rounded-full
            "
          >
            Back home
          </Link>


        </div>

      </div>
    </section>
  );
}