"use client";

import Navbar from "../Navbar/page";
import Link from "next/link";
import {
  FaArrowRight,
  FaFlask,
  FaBrain,
  FaMicroscope,
  FaChartLine,
  FaLaptopMedical,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="min-h-screen  bg-[#090909] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 pb-20 pt-36 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            What We Do
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Research, intelligence, and{" "}
            <span className="text-red-400">healthcare innovation</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            We look around healthcare challenges through scientific research,
            artificial intelligence, and finding better approaches to
            technology. Our goal is to turn meaningful research questions into
            practical ideas and solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-black/50 border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Our Areas of Work
          </p>

          <h2 className="max-w-2xl text-3xl font-semibold sm:text-5xl">
            How we approach healthcare challenges.
          </h2>

          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div>
              <FaFlask className="text-3xl text-red-400" />

              <h3 className="mt-6 text-xl font-semibold">
                Healthcare Research
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Research support for healthcare-related questions, including
                study planning, literature reviews, data analysis, and
                evidence-based investigation.
              </p>
            </div>

            {/* Service 2 */}
            <div>
              <FaBrain className="text-3xl text-blue-400" />

              <h3 className="mt-6 text-xl font-semibold">Machine Learning</h3>

              <p className="mt-4 leading-8 text-gray-400">
                Finding out machine learning methods to identify patterns in
                data, investigate research questions, and develop predictive
                models for suitable research applications.
              </p>
            </div>

            {/* Service 3 */}
            <div>
              <FaMicroscope className="text-3xl text-orange-400" />

              <h3 className="mt-6 text-xl font-semibold">
                Deep Learning Research
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Research into neural networks and deep learning ways for complex
                data, including clinical text and medical images, where suitable
                datasets are available.
              </p>
            </div>

            {/* Service 4 */}
            <div>
              <FaChartLine className="text-3xl text-blue-400" />

              <h3 className="mt-6 text-xl font-semibold">Data Analysis</h3>

              <p className="mt-4 leading-8 text-gray-400">
                Analysing and interpreting data to uncover useful patterns,
                evaluate research findings, and support informed conclusions.
              </p>
            </div>

            {/* Service 5 */}
            <div>
              <FaLaptopMedical className="text-3xl text-red-400" />

              <h3 className="mt-6 text-xl font-semibold">
                Healthcare AI Innovation
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Exploring AI-powered healthcare tools designed around real-world
                challenges, professional needs, and responsible technology
                development.
              </p>
            </div>

            {/* Service 6 */}
            <div>
              <FaBrain className="text-3xl text-orange-400" />

              <h3 className="mt-6 text-xl font-semibold">
                AI Model Development
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                Research and development of machine learning and deep learning
                models, from data preparation and experimentation to model
                evaluation and prototype development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AvironClinIQ */}
      {/* <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Current Initiative
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold sm:text-5xl">
            AvironClinIQ: exploring AI for clinical decision support.
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-gray-400">
            AvironClinIQ is a clinical decision-support system in development.
            The research explores how clinical information and AI-based
            analysis could help healthcare professionals review information
            and consider possible clinical insights.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">
            AvironClinIQ is under development and is not presented as a
            clinically validated system for patient care.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 font-semibold transition hover:text-blue-400"
          >
            Discuss a collaboration <FaArrowRight />
          </Link>
        </div>
      </section> */}

      {/* Collaboration Section */}
      <section className=" border-white/10 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/40 px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Have a research idea or healthcare challenge?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            We welcome conversations with researchers, healthcare professionals,
            institutions, and organisations interested in healthcare research
            and AI innovation.
          </p>

          <Link
            href="/contact"
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
