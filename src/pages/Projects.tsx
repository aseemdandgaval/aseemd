import React from 'react';

const projects = [
  { title: 'Project One', link: 'https://github.com/aseemdandgaval/project-one' },
  { title: 'Project Two', link: 'https://github.com/aseemdandgaval/project-two' }
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-xl mb-4">My Projects</h1>
      <ul className="list-disc ml-6 space-y-2">
        {projects.map((p) => (
          <li key={p.link}>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
