import React from "react";
import { CalendarDays, Briefcase } from "lucide-react";

interface CompactJobExperienceProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
}

export default function CompactJobExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
  skills = [],
}: CompactJobExperienceProps) {
  return (
    <div className="w-full my-4 overflow-hiddenshadow-lg rounded-lg transition-all delay-150 hover:scale-105">
      <div className="">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm  opacity-65 flex items-center mt-1">
              <Briefcase className="mr-1 h-4 w-4" />
              {company}
            </p>
          </div>
          <p className="text-sm flex opacity-65 items-center mt-2 sm:mt-0">
            <CalendarDays className="mr-1 h-4 w-4" />
            {startDate} - {endDate}
          </p>
        </div>
        <p className="font-roboto py-2 text-justify text-base opacity-75 mb-4">{description}</p>
        {skills.length > 0 && (
          <div className="flex dark:text-slate-800 flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
    