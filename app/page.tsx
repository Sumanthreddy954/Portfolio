
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
            <span>Hey, I&apos;m Sumanth Reddy 👋.</span>
            <br />
            <span className="opacity-65 font-light text-lg">
              Data Engineer | ETL, Analytics & Cloud Enthusiast.
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
          I'm Sumanth Reddy, an aspiring data analyst, ETL builder, and cloud enthusiast based out of India. 
          Have been smashing my keyboard since 2021, diving into datasets and pipelines. 
          I love crafting scalable data solutions, exploring cloud tech like AWS and GCP, 
          and turning raw data into actionable insights that make a real impac.
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
            company="AICTE"
            role="Data Analyst Intern"
            dateRange="May 2023 - July 2023"
            tags={["Python", "SQL", "AWS (EC2, S3, Glue, Athena, RDS, QuickSight)","ETL (AWS Glue and Python)"]}
            logoUrl="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?ssl=1"
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
          title="Uber Ride Data Analytics"
          startDate="Nov 2024"
          endDate="Dev 2024"
          description="Uber Ride Data Analytics is a cloud-powered project that analyzes Uber ride patterns, peak hours, and regional demand using GCP tools like Dataflow and BigQuery. 
          It delivers actionable insights through scalable pipelines and interactive visualizations."
          skills={["Python", "SQL", "Google Cloud Storage", "BigQuery", "Dataflow", "GCP"]}
          codeLink="https://github.com/Sumanthreddy954/uber-data-analytics"
          
        />
        <ProjectCard
          title="YouTube ETL Dataflow Analysis"
          startDate="jan 2024"
          endDate="Feb 2024"
          description="YouTube ETL Dataflow Analysis is a cloud-based pipeline built to process and analyze YouTube video engagement data. Using AWS services like Glue, Athena, and QuickSight, the project extracts key insights on user behavior and content categories through automated ETL workflows and interactive dashboards."
          skills={["Python", "SQL", "AWS S3", "AWS Glue", "AWS Athena", "QuickSight", "Cloud Dataflow"]}
          codeLink="https://github.com/Sumanthreddy954/YouTube-ETL-Dataflow-Analysis"
          
        />
        
      </div>
      {/*---------------------Projects----------------- */}
      <div>
        <h1 className="text-2xl text-sky-600 font-semibold font-Inconsolata ">
          &gt;_Certfications
        </h1>
        <div className="py-4">
          <LinkPreview url="https://drive.google.com/file/d/1KrkQw17_xYlKpk-PEUsjcHmuHDWGgPh9/view?usp=sharing">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">AWS Academy Data Analytics</h1>
              <ExternalLink />
            </div>
          </LinkPreview>
        </div>
        <div className="py-4">
          <LinkPreview url="https://drive.google.com/file/d/1KVmHhC2ottnCM6tcJiXgqAUtOUq7yFkS/view?usp=sharing">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">
                Cisco Data Analytics Essentials
              </h1>
              <ExternalLink />
            </div>
          </LinkPreview>
        </div>
        <div className="py-4">
          <LinkPreview url="https://drive.google.com/file/d/1yH5YqB8cZgMSrjX3lpDzi3Hj0ybAZYEM/view?usp=sharing">
            <div className=" flex justify-between hover:scale-105 transition-transform delay-100 border-b border-black dark:border-white py-4">
              <h1 className="font-poppins text-2xl ">
                AWS Academy Cloud Foundations
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
          <h1>@Sumanth Reddy</h1>
          <div className="flex gap-4">
            
            <a
              href="https://www.linkedin.com/in/sumanthreddy-b1aa1627b/"
              className="text flex gap-1 hover:text-sky-600 font-poppins font-medium transition-all delay-75"
            >
              <Linkedin className="w-5" />
            </a>
            <a
              href="https://github.com/Sumanthreddy954/"
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
