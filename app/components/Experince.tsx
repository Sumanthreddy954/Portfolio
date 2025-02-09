import Image from "next/image";

interface ExperienceItemProps {
  company: string;
  role: string;
  dateRange: string;
  tags: string[];
  logoUrl: string;
}

export default function ExperienceItem({
  company,
  role,
  dateRange,
  tags,
  logoUrl,
}: ExperienceItemProps) {
  return (
    <div className="flex items-start gap-4 p-4 pl-0 rounded-lg bg-zinc-950 hover:scale-105 transition-transform delay-100" >
      <div className="relative flex-shrink-0">
        <Image
          src={logoUrl || "/placeholder.svg"}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="rounded-full bg-zinc-800"
        />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-md font-normal text-white">{company}</h3>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-zinc-400 font-normal text-sm mt-1">{role}</p>
      </div>
      <div className="text-sm text-zinc-500 whitespace-nowrap">{dateRange}</div>
    </div>
  );
}