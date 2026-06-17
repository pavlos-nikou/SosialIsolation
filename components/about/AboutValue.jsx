"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Users } from "lucide-react";


export default function AboutValues() {

  const values = [
    {
      icon: ShieldCheck,
      title: "Safe first",
      description:
        "Every interaction is designed around emotional safety, trust and giving users control over their experience.",
    },
    {
      icon: Heart,
      title: "Data second",
      description:
        "Information is handled responsibly and used only to guide meaningful support, never to reduce people into numbers.",
    },
    {
      icon: Users,
      title: "Human always",
      description:
        "Behind every message is a real person with a story, feelings and a need to be treated with dignity.",
    },
  ];


  return (

    <section
      className="
      relative
      overflow-hidden

      bg-surface

      px-6
      py-28
      "
    >


      {/* background */}
      <motion.div
        animate={{
          scale:[1,1.1,1],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
        }}

        className="
        absolute
        -left-20
        top-20

        h-80
        w-80

        rounded-full

        bg-care

        blur-[130px]
        "
      />


      <motion.div
        animate={{
          y:[0,-20,0],
        }}

        transition={{
          duration:10,
          repeat:Infinity,
        }}

        className="
        absolute
        bottom-10
        right-0

        h-72
        w-72

        rounded-full

        bg-sage/40

        blur-[120px]
        "
      />




      <div className="relative mx-auto max-w-6xl">



        {/* Header */}
        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
            amount:0.4,
          }}

          transition={{
            duration:0.7,
          }}

          className="
          mx-auto
          max-w-3xl
          text-center
          "
        >


          <span
            className="
            inline-flex

            rounded-full

            bg-care

            px-5
            py-2

            text-sm
            font-medium

            text-teal
            "
          >

            Our values

          </span>



          <h2
            className="
            mt-6

            text-4xl
            md:text-6xl

            font-semibold

            tracking-tight

            text-text
            "
          >

            Built around people,
            not profiles.

          </h2>



          <p
            className="
            mx-auto

            mt-6

            max-w-xl

            text-lg
            leading-relaxed

            text-muted
            "
          >

            TalkPoint follows simple principles that keep the experience calm,
            respectful and focused on human connection.

          </p>



        </motion.div>









        {/* Cards */}
        <div
          className="
          mt-16

          grid

          gap-8

          md:grid-cols-3
          "
        >


          {values.map((value,index)=>{

            const Icon=value.icon;


            return(

              <motion.div

                key={value.title}


                initial={{
                  opacity:0,
                  y:40,
                }}


                whileInView={{
                  opacity:1,
                  y:0,
                }}


                viewport={{
                  once:true,
                  amount:0.4,
                }}


                transition={{
                  duration:0.7,
                  delay:index * 0.15,
                }}



                whileHover={{
                  y:-10,
                }}


                className="
                group

                relative
                overflow-hidden

                rounded-[2rem]

                border
                border-border

                bg-warm-bg/80

                p-8

                shadow-sm

                backdrop-blur-md
                "
              >



                <div
                  className="
                  flex

                  h-16
                  w-16

                  items-center
                  justify-center

                  rounded-2xl

                  bg-sage

                  text-teal

                  transition

                  group-hover:scale-110
                  "
                >

                  <Icon size={28}/>

                </div>




                <h3
                  className="
                  mt-10

                  text-2xl
                  font-semibold

                  text-text
                  "
                >

                  {value.title}

                </h3>



                <p
                  className="
                  mt-5

                  leading-relaxed

                  text-muted
                  "
                >

                  {value.description}

                </p>



                <div
                  className="
                  absolute

                  bottom-0
                  left-0

                  h-1
                  w-0

                  bg-teal

                  transition-all
                  duration-500

                  group-hover:w-full
                  "
                />


              </motion.div>

            )

          })}


        </div>


      </div>

    </section>
  );
}