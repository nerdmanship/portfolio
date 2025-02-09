"use client";

import Showcase from "./Showcase";

export default function ShowcaseLayout({ projects }) {
  // chunk the array so that every odd row is 2 items, even row is 3
  const rows = [];
  let i = 0;
  while (i < projects.length) {
    const isEvenRow = rows.length % 2 === 0;
    const chunkSize = isEvenRow ? 2 : 3;
    rows.push(projects.slice(i, i + chunkSize));
    i += chunkSize;
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div className="flex flex-col gap-4">
        {rows.map((rowItems, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          
          return (
            <div 
              key={rowIndex} 
              className={`grid gap-4 grid-cols-1 ${
                isEvenRow ? 'md:grid-cols-2' : 'md:grid-cols-3'
              }`}
            >
              {rowItems.map((project, idx) => (
                <Showcase key={idx} {...project} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
} 