import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/page";
import { FaArrowRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Home = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-10 lg:px-20 gap-3">
        {/* Background glow */}
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 ">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Healthcare Research{" "}
              <FaCircle className="inline-block text-[4px] align-middle" />{" "}
              Artificial Intelligence
            </p>

            <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Advancing Healthcare Through
              <span className="text-blue-400"> Research</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              At Aviron, we discover the potential of artificial intelligence,
              machine learning, and scientific research to address healthcare
              challenges and healthcare findings.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Discover Aviron <FaArrowRight className="inline-block" />
              </Link>

              <Link
                href="/contact"
                className="rounded border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Work With Us
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>Healthcare Research</span>
              <span>AI Model Development</span>
              <span>Healthcare Innovation</span>
            </div>
          </div>

          {/* AI visual */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full border border-blue-500/20 sm:h-80 sm:w-80" />
            <div className="absolute h-80 w-80 rounded-full border border-red-500/10 sm:h-104 sm:w-104" />

            <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-full border border-white/10 bg-linear-to-br from-blue-950/70 via-black to-red-950/40 shadow-[0_0_100px_rgba(37,99,235,0.12)]">
              <div className="absolute inset-8 rounded-full border border-blue-400/20" />
              <div className="absolute inset-16 rounded-full border border-red-400/20" />

              <div className="relative text-center">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                  <Image
                    src="/images/aviron.PNG"
                    alt="Aviron logo"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>
                <p className="text-xl font-semibold tracking-[0.35em]">
                  AVIRON
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Research. Intelligence. Innovation.
                </p>
              </div>

              <div className="absolute right-8 top-12 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_#60a5fa]" />
              <div className="absolute bottom-16 left-10 h-2 w-2 rounded-full bg-red-400 shadow-[0_0_20px_#f87171]" />
              <div className="absolute bottom-24 right-12 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_#fb923c]" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="border-t border-white/7 px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              About Aviron
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Researching today for the healthcare products of tomorrow
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="leading-8 text-gray-400">
              Aviron focuses on healthcare research, artificial intelligence,
              and technology solutions. We explore how machine learning, deep
              learning, and data analysis can be applied to real-world
              healthcare problems.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              We believe meaningful new ideas begins with understanding the
              problem, conducting responsible research, and carefully evaluating
              possible solutions.
            </p>

            <Link
              href="/about"
              className="mt-7 w-fit border-b border-blue-400 pb-2 text-sm text-blue-400 transition hover:text-white"
            >
              Learn more about Aviron <FaArrowRight className="inline-block" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#07021f] px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              What We Do
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              Where healthcare meets technology
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              We bring research and AI methods together to discover new
              approaches to healthcare challenges.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-white/10 bg-white/2 p-7 transition hover:border-red-500/40 hover:bg-white/4">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-2xl text-red-400">
                ✳
              </div>
              <h3 className="text-xl font-semibold">Healthcare Research</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Investigating healthcare challenges through scientific research,
                data analysis, and evidence-based approaches.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/7 p-7 transition hover:border-blue-500/40 hover:bg-white bg-white ">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-400">
                ◈
              </div>
              <h3 className="text-xl font-semibold text-black ">
                Artificial Intelligence
              </h3>
              <p className="mt-4 leading-7 text-black">
                Researching machine learning and deep learning models for
                healthcare and other scientific applications.
              </p>
            </div>

            <div className="group rounded-2xl border border-white/10 bg-white/2 p-7 transition hover:border-orange-500/40 hover:bg-white/4 sm:col-span-2 lg:col-span-1">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-2xl text-orange-400">
                ⌘
              </div>
              <h3 className="text-xl font-semibold">Healthcare Innovation</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Exploring responsible, technology-driven ideas that may support
                healthcare professionals and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AVIRONCLINIQ */}
      {/* <section className="px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-950/50 via-[#0a0a0a] to-red-950/30 p-6 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
                Aviron Research Initiative
              </span>
              <span className="rounded-full border border-orange-400/30 px-3 py-1 text-xs text-orange-300">
                In Development
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Clinical information
                </p>
                <div className="mt-3 h-2 w-4/5 rounded bg-white/10" />
                <div className="mt-3 h-2 w-3/5 rounded bg-white/10" />
                <div className="mt-3 h-2 w-2/3 rounded bg-white/10" />
              </div>

              <div className="flex justify-center text-2xl text-blue-400">
                ↓
              </div>

              <div className="rounded-xl border border-blue-400/20 bg-blue-400/5 p-5">
                <p className="font-medium text-blue-300">
                  AI-assisted analysis
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Exploring how clinical data and medical information may be
                  analysed to provide decision-support insights.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Introducing AvironClinIQ
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Exploring new possibilities in clinical decision support.
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              AvironClinIQ is a clinical decision-support system under
              development by Aviron. It aims to explore how clinical
              information, medical reports, and imaging data can be analysed
              together to provide useful insights for healthcare professionals.
            </p>
            <p className="mt-4 leading-8 text-gray-400">
              It is being developed as a tool to support professional judgement,
              not replace a clinican expertise.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-400 hover:text-blue-400"
            >
              Explore Our Work{" "}
              <FaArrowRight className=" mt-1 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section> */}

      {/* OUR APPROACH */}
      <section className="border-y border-white/7 bg-[#080808] px-5 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Our Approach
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              Thoughtful research Responsible innovation
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-4xl font-light text-red-400">01</p>
              <h3 className="mt-5 text-lg font-semibold">Understand</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Identify the challenge and understand the problem we aim to
                address.
              </p>
            </div>

            <div>
              <p className="text-4xl font-light text-blue-400">02</p>
              <h3 className="mt-5 text-lg font-semibold">Research</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Explore relevant evidence, data, and appropriate research
                methods.
              </p>
            </div>

            <div>
              <p className="text-4xl font-light text-orange-400">03</p>
              <h3 className="mt-5 text-lg font-semibold">Develop</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Build and evaluate models or concepts against defined
                objectives.
              </p>
            </div>

            <div>
              <p className="text-4xl font-light text-blue-400">04</p>
              <h3 className="mt-5 text-lg font-semibold">Evaluate</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Assess performance, limitations, and potential applications
                responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION CTA */}
      <section className="px-5 py-24 sm:px-10 lg:px-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-blue-950/50 via-[#101010] to-red-950/30 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
              Collaborate With Aviron
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Lets explore what we can achieve together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              We welcome conversations with healthcare professionals,
              researchers, institutions, and partners interested in healthcare
              research and responsible AI innovation.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-blue-100"
            >
              Start a Conversation{" "}
              <FaArrowRight className=" mt-1 ml-1 inline-block" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/7 px-5 py-10 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/aviron.PNG"
              alt="Aviron logo"
              width={80}
              height={32}
              className="h-auto w-16"
            />
            <span className="text-lg font-semibold tracking-[0.2em]">
              AVIRON
            </span>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Aviron. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
