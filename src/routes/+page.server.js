import { marked } from 'marked';
import matter from 'gray-matter';
import { resolve, extname, basename } from 'node:path';
import { readdirSync, readFileSync } from 'node:fs';

export async function load() {
	const markdownFiles = readdirSync(resolve('src/blog/'), { encoding: 'utf-8' }).filter(
		(d) => extname(d) === '.md'
	);

	const blog = markdownFiles.map((file) => {
		const { data } = matter(readFileSync(resolve('src/blog', file)));
		return {
			...data
		};
	});

	return {
		blog: [...blog].sort((a, b) => b.date - a.date)
	};
}
