export default function AboutValues() {

  const values = [
    {
      title: "Safe first",
      description:
        "Every interaction is designed around emotional safety, trust and giving users control over their experience.",
    },
    {
      title: "Data second",
      description:
        "Information is handled responsibly and used only to guide meaningful support, never to reduce people into numbers.",
    },
    {
      title: "Human always",
      description:
        "Behind every message is a real person with a story, feelings and a need to be treated with dignity.",
    },
  ];


  return (
    <section className="bg-surface px-6 py-24">

      <div className="max-w-6xl mx-auto">


        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-teal text-sm font-medium">
            Our values
          </span>


          <h2 className="
            mt-4
            text-4xl
            md:text-5xl
            font-semibold
            text-text
          ">
            Built around people,
            not profiles.
          </h2>


          <p className="
            mt-6
            text-muted
            text-lg
            leading-relaxed
          ">
            TalkPoint follows simple principles that keep the experience calm,
            respectful and focused on human connection.
          </p>

        </div>



        {/* Cards */}
        <div className="
          mt-16
          grid
          md:grid-cols-3
          gap-8
        ">

          {values.map((value, index) => (

            <div
              key={index}
              className="
              rounded-[2rem]
              bg-warm-bg
              border
              border-border
              p-8
              "
            >

              <div className="
                h-14
                w-14
                rounded-full
                bg-sage
                flex
                items-center
                justify-center
                text-teal
                text-xl
              ">
                {index + 1}
              </div>


              <h3 className="
                mt-8
                text-2xl
                font-medium
                text-text
              ">
                {value.title}
              </h3>


              <p className="
                mt-4
                text-muted
                leading-relaxed
              ">
                {value.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}