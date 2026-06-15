export default function AboutPrivacy() {
  const points = [
    "You can stop at any time.",
    "Your private conversation is not treated as a public record.",
    "Support requests require clear consent.",
  ];

  return (
    <section className="bg-surface px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <span className="text-teal text-sm font-medium">
            Privacy & trust
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
            Built to feel safe before it collects anything.
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            TalkPoint is designed to avoid unnecessary data collection.
            Users stay informed and in control of what is shared.
          </p>
        </div>

        <div className="bg-warm-bg border border-border rounded-[2rem] p-8">
          <h3 className="text-2xl font-semibold text-text">
            What users should know
          </h3>

          <div className="mt-8 space-y-4">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-surface rounded-2xl p-5 border border-border"
              >
                <span className="text-teal font-semibold">✓</span>

                <p className="text-muted leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}