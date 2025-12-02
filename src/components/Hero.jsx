import React from "react";
import { hero, links } from "../data";

export default function Hero() {
  return (
    <section id="home" className="container-xxl py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Avatar Left */}
        <div className="flex justify-center md:justify-start">
          <div className="
            w-56 h-56 
            rounded-full overflow-hidden 
            border-2 border-zinc-700 
            shadow-xl 
            transition-all duration-500
            hover:scale-105 hover:shadow-[0_0_25px_rgba(255,200,60,0.5)]
          ">
            <img
              src="avatar.jpg"
              alt="Vikas Shukla"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Right */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight whitespace-nowrap">
            {hero.name}
            <span className="text-yellow-400"> - {hero.title}</span>
          </h1>

          <p className="mt-3 text-sm uppercase tracking-widest text-zinc-400">
            {hero.location} • Data products, ML models & decision intelligence
          </p>

          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            {hero.tagline}
          </p>

          <div className="mt-8 flex md:justify-start justify-center gap-4 flex-wrap">
            <a
              className="btn transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="btn transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-black"
              href={links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
