export default function AboutThread() {
  return (
    <section className="bg-warm-bg px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div className="bg-surface border border-border rounded-[2rem] p-10 flex items-center justify-center">
          <img
            src="Logo.svg"
            alt="TalkPoint continuous thread logo"
            className="w-64 h-auto"
            style={{scale: 2.5}}
          />
        </div>

        <div>
          <span className="text-teal text-sm font-medium">
            The thread
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-text leading-tight">
            A quiet line that does not break.
          </h2>

          <p className="mt-6 text-lg text-muted leading-relaxed">
            The TalkPoint logo is based on one continuous line. It represents
            connection, continuity and quiet resilience.
          </p>

          <p className="mt-5 text-lg text-muted leading-relaxed">
            The line feels soft and human, like a drawing made without lifting
            the pencil — a small sign that connection can still exist, even when
            someone feels isolated.
          </p>
        </div>

      </div>
    </section>
  );
}