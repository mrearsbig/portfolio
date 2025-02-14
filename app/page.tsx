import ExperienceWrapper from "@/components/experience";
import ProjectWrapper from "@/components/projects";
import { Button } from "@/components/ui/button";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  FolderClosed,
  UserRound,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto min-h-screen lg:px-24 px-6 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left sidebar */}
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-[40%] lg:flex lg:flex-col lg:justify-between lg:py-24">
          <div>
            <nav className="mb-16 hidden lg:block">
              <ul className="flex gap-4">
                <li>
                  <Link href="#about">
                    <Button variant="outline" size="sm">
                      <UserRound />
                      About
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#projects">
                    <Button variant="outline" size="sm">
                      <FolderClosed />
                      Projects
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="#experience">
                    <Button variant="outline" size="sm">
                      <Briefcase />
                      Experience
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
            <h1 className="text-5xl font-bold tracking-tight">
              <Link href="/">Alexander Viafara</Link>
            </h1>
            <h2 className="text-2xl mt-2 font-medium tracking-tight">
              Software Engineer
            </h2>
            <p className="text-lg mt-3 leading-normal text-muted-foreground">
              Turning ideas into great results — Code. Create. Conquer.
            </p>
          </div>
          {/* Social media */}
          <div className="hidden lg:flex gap-4 items-center mt-8">
            <Link
              href="https://github.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="lg:w-[60%] lg:py-24">
          {/* About */}
          <section id="about" className="mb-16 lg:mb-36 scroll-mt-24">
            <p className="text-muted-foreground text-lg mb-4">
              I am <span className="text-foreground">Alexander Viafara</span>, a
              passionate{" "}
              <span className="text-foreground">software developer</span> and{" "}
              <span className="text-foreground">empirical designer</span>. My
              journey in the software world started{" "}
              <span className="text-foreground">more than three years ago</span>
              , and since then, I have developed a unique ability to{" "}
              <span className="text-foreground">
                combine programming logic with visual design
              </span>
              , always aiming for the{" "}
              <span className="text-foreground">best user experience</span>.
            </p>

            <p className="text-muted-foreground text-lg mb-4">
              Throughout my career, I have worked on{" "}
              <span className="text-foreground">various projects</span>, from{" "}
              <span className="text-foreground">enterprise systems</span> to{" "}
              <span className="text-foreground">mobile applications</span>,
              always with a focus on{" "}
              <span className="text-foreground">detail and usability</span>.
              Outside of work, I enjoy{" "}
              <span className="text-foreground">playing soccer</span>,{" "}
              <span className="text-foreground">exploring new video games</span>
              , and <span className="text-foreground">traveling</span> to
              experience{" "}
              <span className="text-foreground">
                different cultures and perspectives
              </span>
              .
            </p>

            <p className="text-muted-foreground text-lg mb-4">
              My goal is to continue{" "}
              <span className="text-foreground">growing professionally</span>,{" "}
              <span className="text-foreground">learning new technologies</span>
              , and contributing to{" "}
              <span className="text-foreground">innovative projects</span>. I
              love the idea of working in{" "}
              <span className="text-foreground">collaborative teams</span>,
              where{" "}
              <span className="text-foreground">learning and creativity</span>{" "}
              flow freely.
            </p>
          </section>
          {/* Projects */}
          <section id="projects" className="mb-16 lg:mb-36 scroll-mt-24">
            <ProjectWrapper />
            <div className="flex items-center">
              <Button
                asChild
                variant="link"
                className="text-black hover:text-primary text-lg"
              >
                <Link
                  href="https://github.com/mrearsbig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project History
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
          {/* Experience */}
          <section id="experience" className="mb-16 lg:mb-36 scroll-mt-24">
            <ExperienceWrapper />
            <div className="flex items-center">
              <Button
                asChild
                variant="link"
                className="text-black hover:text-primary text-lg"
              >
                <Link
                  href="/Vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Complete Resume
                  <ArrowDown className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
          {/* Footer */}
          <footer className="max-w-md pb-16 text-sm sm:pb-0">
            <p className="text-muted-foreground">
              Conceptualized in{" "}
              <Link
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-purple-500"
              >
                Figma
              </Link>{" "}
              and brought to life in{" "}
              <Link
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-blue-500"
              >
                Visual Studio Code
              </Link>
              . Built using{" "}
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-black"
              >
                Next.js
              </Link>
              , styled with{" "}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-cyan-500"
              >
                Tailwind CSS
              </Link>{" "}
              and{" "}
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-yellow-500"
              >
                shadcn
              </Link>{" "}
              components. Features powered by the{" "}
              <Link
                href="https://docs.github.com/en/rest"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-gray-500"
              >
                GitHub API
              </Link>
              , with icons from{" "}
              <Link
                href="https://fontawesome.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-indigo-500"
              >
                Font Awesome
              </Link>{" "}
              and{" "}
              <Link
                href="https://lucide.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-green-500"
              >
                Lucide
              </Link>
              . Hosted and deployed on{" "}
              <Link
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-black"
              >
                Vercel
              </Link>
              . All text is beautifully rendered in the{" "}
              <Link
                href="https://vercel.com/font"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground hover:text-orange-500"
              >
                Geist
              </Link>{" "}
              typeface.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
