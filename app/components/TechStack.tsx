export default function TechStack() {
    const technologies = [
      ["Next.js", "Solidity", "Typescript", "Node.js", "Express", "React", "TailwindCSS", "Rust","Postgres", "MongoDB", "Docker", "AWS", "Git", "Python"],
    ]
  
    return (
      <div className="bg-black pl-0 p-4 flex flex-col gap-2">
        {technologies.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-2">
            {row.map((tech) => (
              <button
                key={tech}
                className="px-4 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-black hover:bg-gray-100 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>
        ))}
      </div>
    )
  }
  