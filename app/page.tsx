import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function HomePage() {
  const html = await readFile(join(process.cwd(), "index.html"), "utf8");

  return (
    <main className="landing-shell">
      <iframe
        className="landing-frame"
        srcDoc={html}
        title="E-Global Landing Page"
        sandbox="allow-scripts allow-same-origin"
      />
    </main>
  );
}
