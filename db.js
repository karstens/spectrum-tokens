import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, "data.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

await db.read();

db.data = db.data || { tokens: [], aliases: [] };

export default db;
