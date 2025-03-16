
import { ThemeSwitcher } from "./ThemeSwitcher";
import profile from "./ProfileDB.jpg";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import CompactJobExperienceCard from "./components/CompactJobExperienceCard";
import ProjectCard from "./components/ProjectCard";
import { LinkPreview } from "@/components/ui/link-preview";
import ExperienceItem from "./components/Experince";
import TechStack from "./components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <div>


      {/* ---------navbar---------- */}
      <div className="py-16 flex flex-col lg:flex-row lg:text-left text-center items-center gap-8">
        <Image
          className="rounded-full border-2 hover:border-4 hover:border-sky-600 hover:border-y-pink-700 transition-all delay-75 border-pink-700"
          src={profile}
          height={150}
          width={150}
          alt="some"
        />
        <div className="flex flex-col gap- lg:items-start items-center">
          <h1 className="text-4xl font-roboto font-semibold">
            <span>Hey, I&apos;m Dinesh Babu 👋.</span>
            <br />
            <span className="opacity-65 font-light text-lg">
              Fullstack Wizard, building AI agents and Blockchain Developer.
            </span>
          </h1>
          {/* <div className="flex gap-4">
            <a
              href="https://x.com/CHDINES95141791"
              className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75"
            >
              <Twitter className="w-5" /> Twitter
            </a>
            <a className="text flex gap-1 hover:text-pink-600 font-poppins font-medium transition-all delay-75">
              <Instagram className="w-5" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-babu-cheemaladari-4b9902136/"
              className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75"
            >
              <Linkedin className="w-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/chdineshbabu/"
              className="text flex gap-1 hover:text-gray-400 font-poppins font-medium transition-all delay-75"
            >
              <Github className="w-5" /> Github
            </a>
          </div> */}
        </div>
      </div>
      {/*--------------Hero ---------------------- */}
      <div>
        <h1 className="text-2xl font-semibold text-sky-600 font-Inconsolata p">
          &gt;_About
        </h1>
        <p className="font-roboto py-2 text-base font-light opacity-75">
          I'm Dinesh, a Web3, blockchain, and full-stack developer and Building Ai Agents based out
          of India. Have been smashing my keyboard since 2022.on . I love building
          innovative solutions, exploring new technologies, and creating
          impactful digital experiences.
        </p>
      </div>
      <br />
      {/*------------Intro-------------------------*/}
      <div className="">
        <h1 className="text-2xl pb-2  pt-6 text-sky-600 font-semibold font-Inconsolata p">
          &gt;_Experience
        </h1>
        <div className="flex flex-col gap-2">
        <ExperienceItem
            company="Warlands Corp."
            role="Blockchain Developer"
            dateRange="Jan 2025 - Present"
            tags={["Nextjs", "Solidity", "Firebase", "Solana"]}
            logoUrl="https://media.licdn.com/dms/image/v2/C4E0BAQGMaDiYFM_Cwg/company-logo_200_200/company-logo_200_200/0/1651565665971/warlands_nft_logo?e=1747267200&v=beta&t=rHn5IN8d4mePRGqdfbSn-peqIRQnJT60e_oiXvd-K40"
          />
          <ExperienceItem
            company="Sustally Inc."
            role="Fullstack Developer Intern"
            dateRange="July 2023 - March 2024"
            tags={["Nextjs", "MongoDb", "Langchain"]}
            logoUrl="https://media.licdn.com/dms/image/v2/D4E0BAQG6v9wMkNg5bA/company-logo_200_200/company-logo_200_200/0/1701914172156/sustally_logo?e=1747267200&v=beta&t=E_hHhMWZooSak4KPwZOCVCOz9Cfte7mg11RZzYDO9Ws"
          />
        </div>
      </div>
      <br />
      {/*-------------------Skills---------------- */}
      <div className="pb-8">
        <h1 className="text-2xl pb-2  pt-6 text-sky-600 font-semibold font-Inconsolata p">
          &gt;_Skills
        </h1>
        <div>
          <TechStack />
        </div>

      </div>
      {/*-------------------Exprarice ---------------- */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-sky-600 font-semibold font-Inconsolata ">
          &gt;_Previous Work
        </h1>
        <ProjectCard
          title="GenCerti(Blockchain based Certification)"
          startDate="Sep 2024"
          endDate="Sep 2024"
          description="GenCerti is an innovative blockchain-based application designed to simplify the process of creating, issuing, and validating certificates. The app ensures that certificates are tamper-proof, easily shareable, and verifiable. "
          skills={["Next.js", "Etherum", "MongoDb", "Tailwind.css"]}
          deployedLink="https://gencerti.vercel.app/"
          codeLink="https://github.com/chdineshbabu/genCerti"
        />
        <ProjectCard
          title="TokenForge(Token Creation on Solana Blockchain)"
          startDate="Sep 2024"
          endDate="Oct 2024"
          description="Create and manage tokens on the Solana blockchain effortlessly. Generate metadata-rich tokens for seamless integration and enhanced functionality within your applications."
          skills={["Next.js", "Solana", "Tailwind.css"]}
          deployedLink="https://forgetoken.vercel.app/"
          codeLink="https://github.com/chdineshbabu/tokenlp"
        />
        <ProjectCard
          title="KeyFordge(Solana HD Wallet)"
          startDate="Sep 2024"
          endDate="Sep 2024"
          description="A Solana blockchain wallet app designed for secure account creation using mnemonic seed phrases, ensuring user-friendly access and management of their private and public keys."
          skills={["Next.js", "Solana", "Tailwind.css"]}
          deployedLink="https://keyforge-seven.vercel.app/"
          codeLink="https://github.com/chdineshbabu/keyforge"
        />
      </div>
      {/*---------------------Projects----------------- */}
      <div>
        <h1 className="text-2xl text-sky-600 font-semibold font-Inconsolata ">
          &gt;_Certfications
        </h1>
        <div className="py-4">
          <LinkPreview url="https://www.coursera.org/account/accomplishments/professional-cert/V7H2YU8HQR6U">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">Google Cybersecurity</h1>
              <ExternalLink />
            </div>
          </LinkPreview>
        </div>
        <div className="py-4">
          <LinkPreview url="https://udemy-certificate.s3.amazonaws.com/image/UC-2e404cfb-cb8d-41ae-b161-3e37c1838dd2.jpg">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">
                The Complete 2021 Web Development Bootcamp
              </h1>
              <ExternalLink />
            </div>
          </LinkPreview>
        </div>
        <div className="py-4">
          <LinkPreview url="https://drive.google.com/file/d/1n-Z3GI-WSa3Ua4yLrrpTUhvufYDWFylr/view">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">
                CCSK v4.1 Foundation Training
              </h1>
              <ExternalLink />
            </div>
          </LinkPreview>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <hr className="w-full" />
        <br />
        <div className="flex justify-between opacity-65">
          <h1>@DINESH BABU</h1>
          <div className="flex gap-4">
            <a
              href="https://x.com/CHDINES95141791"
              className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75"
            >
              <Twitter className="w-5" />
            </a>
            <a className="text flex gap-1 hover:text-pink-600 font-poppins font-medium transition-all delay-75">
              <Instagram className="w-5" />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-babu-cheemaladari-4b9902136/"
              className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75"
            >
              <Linkedin className="w-5" />
            </a>
            <a
              href="https://github.com/chdineshbabu/"
              className="text flex gap-1 hover:text-gray-400 font-poppins font-medium transition-all delay-75"
            >
              <Github className="w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
