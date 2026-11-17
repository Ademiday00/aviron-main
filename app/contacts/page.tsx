"use client";

import Navbar from "../Navbar/page";

import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaFlask,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-36 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact Aviron
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Lets discover what we can{" "}
            <span className="text-red-400">build together</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have a research idea, a healthcare challenge, or an interest in AI
            innovation? We welcome conversations with researchers, healthcare
            professionals, institutions, and potential collaborators.
          </p>
        </div>
      </section>

      {/* Contact information */}
      <section className="bg-black px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Get in Touch
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Start a conversation
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              Whether you are interested in healthcare research, machine
              learning, deep learning, or healthcare innovation, we would
              welcome the opportunity to hear from you.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-xl text-blue-400" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Contact us by email to discuss your enquiry or idea.
                  </p>

                  {/* Replace with your official Aviron email */}
                  <a
                    href="mailto:YOUR-AVIRON-EMAIL@example.com"
                    className="mt-2 inline-block text-sm text-blue-400 transition hover:text-red-400"
                  >
                    fayanbajo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaFlask className="mt-1 text-xl text-red-400" />
                <div>
                  <h3 className="font-semibold">Research & Collaboration</h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-gray-400">
                    We welcome enquiries about research collaboration,
                    healthcare AI, academic projects, and innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaLocationDot className="mt-1 text-xl text-orange-400" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-400">
                    Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="md:pt-14">
            <h2 className="text-2xl font-semibold">Connect with Aviron</h2>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Follow our work and connect with us as we explore research,
              artificial intelligence, and healthcare innovation.
            </p>

            <div className="mt-8 space-y-6">
              {/* Replace # with your official profile URLs */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:text-blue-400"
              >
                <FaLinkedinIn className="text-xl text-blue-400" />
                <span>LinkedIn</span>
                <FaArrowRight className="ml-auto text-sm" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 transition hover:text-red-400"
              >
                <FaGithub className="text-xl text-red-400" />
                <span>GitHub</span>
                <FaArrowRight className="ml-auto text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/40 px-6 py-14 text-center sm:px-12 sm:py-16">
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Every meaningful collaboration starts with a conversation.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
            Tell us what you are researching, the challenge you are discovering,
            or how you would like to work with Aviron.
          </p>

          <a
            href="mailto:YOUR-AVIRON-EMAIL@example.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-blue-400"
          >
            Email Aviron <FaArrowRight />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Aviron. All rights reserved.
      </footer>
    </main>
  );
}
