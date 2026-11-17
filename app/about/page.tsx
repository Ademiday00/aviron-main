"use client";

import Navbar from "../Navbar/page";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaFlask, FaBrain, FaLightbulb } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 pb-20 pt-36 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
            About Aviron
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Exploring new possibilities in{" "}
            <span className="text-blue-400">healthcare</span> through research
            and intelligent technology
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Aviron focuses on healthcare research, artificial intelligence, and
            healthcare ideas. We discover how scientific research and
            intelligent systems can contribute to better healthcare solutions.
          </p>
        </div>
      </section>

      {/* Logo and Introduction */}
      <section className=" bg-[#080707] px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src="/images/aviron.PNG"
              alt="Aviron logo"
              width={280}
              height={280}
              className="h-52 w-52 object-contain sm:h-64 sm:w-64"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Who We Are
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Research with purpose. Innovation with impact
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Aviron is a healthcare research and creating ideas that may
              support healthcare professionals and institutions. We explore the
              use of artificial intelligence to address healthcare challenges.
              Our work includes machine learning, deep learning, and research
              into intelligent systems that can support healthcare
              professionals.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              We aim to connect research, technology, and real-world healthcare
              needs while developing ideas responsibly and building solutions
              grounded in evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            What We Focus On
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            Bringing research and technology together
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/2 p-7">
              <FaFlask className="text-2xl text-red-400" />
              <h3 className="mt-6 text-xl font-semibold">
                Healthcare Research
              </h3>
              <p className="mt-4 leading-7 text-gray-400">
                Exploring healthcare questions through structured research, data
                analysis, and scientific methods.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-7">
              <FaBrain className="text-2xl text-blue-400" />
              <h3 className="mt-6 text-xl font-semibold">
                Artificial Intelligence
              </h3>
              <p className="mt-4 leading-7 text-gray-400">
                Studying and developing machine learning and deep learning
                models for relevant healthcare research problems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/7 bg-white/2 p-7">
              <FaLightbulb className="text-2xl text-orange-400" />
              <h3 className="mt-6 text-xl font-semibold">
                Healthcare Innovation
              </h3>
              <p className="mt-4 leading-7 text-gray-400">
                Exploring practical ideas and intelligent tools that may help
                address challenges in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AvironClinIQ
      <section className="px-6 pb-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-blue-400/20 bg-blue-400/5 p-8 sm:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Research Initiative
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Introducing AvironClinIQ
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-gray-400">
            AvironClinIQ is a clinical decision-support system currently in
            development. It is being explored as a way to combine clinical
            information and AI-based analysis to provide useful insights that
            may support healthcare professionals in their decision-making.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            The system is under development and has not been established as
            clinically validated for patient care.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-3 font-medium text-white transition hover:text-blue-400"
          >
            Explore our work <FaArrowRight />
          </Link>
        </div>
      </section> */}

      {/* Closing Section */}
      <section className=" border-white/7 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/40 px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            The future of healthcare begins with better questions
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            We welcome conversations with researchers, healthcare professionals,
            and organisations interested in healthcare research and innovation.
          </p>

          <Link
            href="/contacts"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-blue-400"
          >
            Connect with Aviron <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Aviron. All rights reserved.
      </footer>
    </main>
  );
}
