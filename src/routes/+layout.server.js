import matter from 'gray-matter';
import { resolve, extname, basename } from 'node:path';
import { readFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import slug from 'slug';

const extension = '.md';

export async function load() {
	const files = await readdir('src/blog/', { encoding: 'utf8' });

	const blog = files
		.filter((file) => extname(file) === extension)
		.map((file) => {
			const { data } = matter(readFileSync(resolve('src/blog', file)));
			const href = slug(basename(file, extension));
			return {
				href,
				file,
				...data
			};
		});

	return {
		blog: [...blog].sort((a, b) => b.date - a.date)
	};
}
