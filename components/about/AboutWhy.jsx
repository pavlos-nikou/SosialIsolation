export default function AboutWhy() {
  const reasons = [
    {
      title: "Many people feel alone",
      text: "Social isolation can be hard to explain. TalkPoint gives people a gentle place to begin sharing.",
    },
    {
      title: "Support can be hard to find",
      text: "People may need help but not know which service, group or organization can support them.",
    },
    {
      title: "Technology should feel safe",
      text: "TalkPoint is designed to feel human, respectful and calm — not like surveillance or a cold form.",
    },
  ];

  return (
    <section className="bg-warm-bg px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl">
          <span className="text-teal text-sm font-medium">
            Why it exists
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
            A small first step toward connection.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-3xl p-8 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-care flex items-center justify-center text-teal font-semibold">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-4 text-muted leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}