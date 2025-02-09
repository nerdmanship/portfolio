import Link from 'next/link';
import ShowcaseLayout from "./components/ShowcaseLayout";
import projects from "./data/projects";

export default function Home() {
  return (
    <main className="p-4">
      <section className="flex flex-col items-center justify-center h-[90vh]">
        <h1 className="font-mono text-4xl mb-6 text-center">Johan.wtf</h1>
        </section>
        <ShowcaseLayout projects={projects} />
    </main>
  );
}
