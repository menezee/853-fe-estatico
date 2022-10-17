import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DB_FILE_PATH = path.join(__dirname, 'db.json');

async function read() {
	const data = await readFile(DB_FILE_PATH, 'utf-8');
	return JSON.parse(data);
}

async function write(data) {
	try {
		const prev = await read();
		const newArr = JSON.stringify([...prev, data]);
		await writeFile(DB_FILE_PATH, newArr);
		return true;
	} catch (err) {
		console.error('error writing on db', err);
		return false;
	}
}

export default {
	read,
	write,
};
