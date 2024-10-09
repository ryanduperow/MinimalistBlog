import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		author: z.string().default('Ryan DuPerow'),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = {
	blog: blogCollection,
};