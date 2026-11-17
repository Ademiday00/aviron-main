import Link from "next/link";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import Navbar from "../Navbar/page";
const projects = [
  {
    title: "Knee Osteoarthritis Research",
    category: "Healthcare Research",
    description:
      "Research exploring artificial intelligence approaches for studying knee osteoarthritis and factors associated with pain severity.",
    pdf: "/projects/OA COMPLETE.pdf",
  },

  {
    title: "Breast Cancer Research",
    category: "Deep Learning",
    description:
      "A research project exploring deep learning techniques for breast cancer analysis.",
    pdf: "/projects/BREAST CANCER T.pdf",
  },
  {
    title: "Multiple Sclerosis Research",
    category: "Artificial Intelligence",
    description:
      "An overview of a machine learning project on multiple sclerosis, its objectives, methodology, and findings.",
    pdf: "/projects/MS LESION.pdf",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-6 pb-20 pt-36 text-white sm:px-10 lg:px-20">
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Our Work
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold sm:text-6xl">
          Research, projects, and innovation.
        </h1>

        <p className="mt-6 max-w-2xl leading-8 text-gray-400">
          Explore selected research projects and technical work related to
          healthcare, artificial intelligence, and software development.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="py-4">
              <FaFilePdf className="text-3xl text-red-400" />

              <p className="mt-6 text-sm text-blue-400">{project.category}</p>

              <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-blue-400"
                >
                  View PDF <FaArrowRight />
                </a>

                <a
                  href={project.pdf}
                  download
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-blue-400/40 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-semibold">
            Interested in our research?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Contact Aviron to discuss research, technical collaboration, or
            healthcare ideas.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 font-semibold text-black transition hover:bg-blue-400"
          >
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </div>
    </main>
  );
}
