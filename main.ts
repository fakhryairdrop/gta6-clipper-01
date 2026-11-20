import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// VIDEO.json must name the published YouTube video: a youtube.com/shorts/<id>,
// youtube.com/watch?v=<id>, or youtu.be/<id> URL with an 11-character video id.
const video = JSON.parse(readFileSync(join(botDir, "VIDEO.json"), "utf8"));
const match = /^https:\/\/(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})(?:[?&#]|$)/.exec(
  typeof video?.url === "string" ? video.url : "",
);
if (!match) {
  console.error(
    `Invalid VIDEO.json url: ${JSON.stringify(video?.url)} — expected a youtube.com/shorts/, youtube.com/watch?v=, or youtu.be/ URL with an 11-character video id.`,
  );
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
console.log(`VIDEO.json OK — video id ${match[1]}`);
