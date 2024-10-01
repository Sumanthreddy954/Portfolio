import { LinkPreview } from "@/components/ui/link-preview";
import { CalendarDays, Code, Tag } from "lucide-react";

interface ProjectCardProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
  deployedLink?: string;
  codeLink?: string;
}

export default function ProjectCard({
  title,
  startDate,
  endDate,
  description,
  skills = [],
  deployedLink,
  codeLink,
}: ProjectCardProps = {
  title: "E-commerce Platform",
  startDate: "Jan 2023",
  endDate: "Apr 2023",
  description:
    "Developed a full-stack e-commerce platform with features including user authentication, product catalog, shopping cart, and payment integration.",
  skills: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
  deployedLink: "https://example-ecommerce.com",
  codeLink: "https://github.com/username/ecommerce-project",
}) {
  return (
    <div className="w-full py-2 rounded-lg transition-all delay-150 hover:scale-105">
      {deployedLink ? (
        <LinkPreview url={deployedLink} className="">
          <div className="">
            <div className="flex justify-between items-end">
              <h2 className="text-xl font-bold hover:text-sky-600">{title}</h2>
              <div className="text-sm opacity-65 flex items-center">
                <CalendarDays className="mr-1 h-4 w-4" />
                {startDate} - {endDate}
              </div>
            </div>
          </div>
        </LinkPreview>
      ) : (
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-bold hover:text-sky-600">{title}</h2>
          <div className="text-sm opacity-65 flex items-center">
            <CalendarDays className="mr-1 h-4 w-4" />
            {startDate} - {endDate}
          </div>
        </div>
      )}

      <div className="py-4">
        <p className="text-base opacity-65 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {skill}
                </span>
              ))}
            </div>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <Code className="mr-2 h-4 w-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
