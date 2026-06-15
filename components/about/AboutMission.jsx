export default function AboutMission() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">

        <div>
          <span className="text-teal text-sm font-medium">
            Our mission
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
            Helping people feel heard before they feel measured.
          </h2>
        </div>

        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <p>
            TalkPoint exists to reduce social isolation by giving people a calm
            and respectful place to share how they feel.
          </p>

          <p>
            The goal is not to treat people like data, but to guide support
            responsibly while keeping users safe, informed and in control.
          </p>

          <div className="rounded-3xl bg-warm-surface border border-border p-6">
            <p className="text-text font-medium">
              “You are not alone. Your voice matters.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}