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
import { ArrowUpRight, Briefcase, FolderClosed, UserRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto min-h-screen lg:px-24 px-6 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left sidebar */}
        <header className="lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex lg:flex-col lg:justify-between lg:py-24">
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
            <h1 className="text-5xl font-bold mb-5">
              <Link href="/">Alexander Viafara</Link>
            </h1>
            <h2 className="text-2xl mb-4">Software Engineer</h2>
            <p className="text-lg">
              More than a developer, a architect of the future.
            </p>
          </div>
          {/* Social media */}
          <div className="hidden lg:flex gap-4 items-center mt-8">
            <Link
              href="https://github.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.instagram.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.facebook.com/mrearsbig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="lg:w-1/2 lg:py-24">
          {/* About */}
          <section className="mb-16 lg:mb-36">
            <p className="text-lg mb-4">
              I am Alexander Viafara, a passionate software developer and
              empirical designer. My journey in the software world started more
              than three years ago, and since then, I have developed a unique
              ability to combine programming logic with visual design, always
              aiming for the best user experience.
            </p>
            <p className="text-lg mb-4">
              Throughout my career, I have worked on various projects, from
              enterprise systems to mobile applications, always with a focus on
              detail and usability. Outside of work, I enjoy playing soccer,
              exploring new video games, and traveling to experience different
              cultures and perspectives.
            </p>
            <p className="text-lg">
              My goal is to continue growing professionally, learning new
              technologies, and contributing to innovative projects. I love the
              idea of working in collaborative teams, where learning and
              creativity flow freely.
            </p>
          </section>
          {/* Projects */}
          <section className="mb-16 lg:mb-36">
            <ProjectWrapper />
            <div className="flex items-center">
              <Button asChild variant="link">
                <Link
                  href="https://github.com/mrearsbig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project History
                </Link>
              </Button>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
