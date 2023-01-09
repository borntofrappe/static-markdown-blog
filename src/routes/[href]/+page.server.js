import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

export async function load({ params, parent }) {
	const { blog } = await parent();
	const post = blog.find(({ href }) => href === params.href);

	if (!post) throw error(404, `Post "${params.href}" not found`);

	const { file } = post;
	const { content } = matter(readFileSync(resolve('src/blog', file)));
	const html = marked(content);
	return {
		...post,
		html
	};
}
