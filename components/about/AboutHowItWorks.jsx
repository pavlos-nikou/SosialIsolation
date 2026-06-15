export default function AboutHowItWorks() {
  const steps = [
    {
      title: "Share safely",
      text: "Users can express how they feel in a calm and low-pressure way.",
    },
    {
      title: "Understand needs",
      text: "TalkPoint helps identify what kind of support may be useful.",
    },
    {
      title: "Connect to support",
      text: "When the user chooses, their request can be guided toward the right support service.",
    },
  ];

  return (
    <section className="bg-warm-bg px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-3xl">
          <span className="text-teal text-sm font-medium">
            How it works
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
            A gentle path from sharing to support.
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            TalkPoint is designed as a simple journey. The user stays in control
            at every step.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-14 h-14 rounded-full bg-care text-teal flex items-center justify-center font-semibold shrink-0">
                {index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-text">
                  {step.title}
                </h3>

                <p className="mt-2 text-muted leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}