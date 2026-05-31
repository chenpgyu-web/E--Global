import { readFile } from "node:fs/promises";
import { join } from "node:path";

export default async function HomePage() {
  const html = await readFile(join(process.cwd(), "index.html"), "utf8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : html;

  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}
