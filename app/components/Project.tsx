import React from "react";
import { encode } from "qss"; // Ensure 'qss' is installed using npm or yarn
import { ArrowRight } from "lucide-react";

interface ProjectShowcaseProps {
  projectNumber: string;
  projectName: string;
  description: string;
  imageSrc: string;
  codeLink: string;
  moreProjectsLink: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projectNumber = "01",
  projectName = "PROJECT NAME",
  description = "Guide concept digital sculpture with human features. Created in a set of apps, tips and tools are included.",
  imageSrc = "/placeholder.svg",
  codeLink = "3D rendered human head profile",
  moreProjectsLink = "#",
}) => {
  const isStatic = false; 
  const width = 300;
  const height = 175;
  const quality = 50;
  let src;

  if (!isStatic) {
    const params = encode({
      url: imageSrc,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc; // Use static image when isStatic is true
  }

  return (
    <div className="max-w-4xl mx-auto py-6 hover:scale-105 transition-all delay-75">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-xl font-mono">
            {projectNumber} / {projectName}
          </h2>
          <p className="text-sm opacity-65 font-extralight font-poppins  leading-relaxed">
            {description}
          </p>
          <div className="flex gap-4">
          <a
            href={imageSrc}
            className="flex gap-1 hover:gap-2 text-roboto opacity-75 text-base underline hover:text-sky-500 transition-colors"
          >
            Take a Look Out <ArrowRight />
          </a>
          <a
            href={codeLink}
            className="flex gap-1 hover:gap-2 text-roboto opacity-75 text-base underline hover:text-sky-500 transition-colors"
          >
            Code <ArrowRight />
          </a>
          </div>
        </div>
        <div className="relative aspect-[3/2] w-full">
          <img
            src={src}
            alt={'imageAlt'}
            className="object-cover w-full h-full rounded-sm"
          />
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default ProjectShowcase;
