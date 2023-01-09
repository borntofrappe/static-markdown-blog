import matter from 'gray-matter';
import { resolve, extname } from 'node:path';
import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';

export async function load() {
	const files = await readdir('src/blog/', { encoding: 'utf8' });

	const blog = files
		.filter((file) => extname(file) === '.md')
		.map((file) => {
			const { data } = matter(readFileSync(resolve('src/blog', file)));
			return {
				...data
			};
		});

	return {
		blog: [...blog].sort((a, b) => b.date - a.date)
	};
}
