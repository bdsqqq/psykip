declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"translations": {
"e/1.md": {
  id: "e/1.md",
  slug: "e/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/10.md": {
  id: "e/10.md",
  slug: "e/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/11.md": {
  id: "e/11.md",
  slug: "e/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/12.md": {
  id: "e/12.md",
  slug: "e/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/13.md": {
  id: "e/13.md",
  slug: "e/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/14.md": {
  id: "e/14.md",
  slug: "e/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/15.md": {
  id: "e/15.md",
  slug: "e/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/16.md": {
  id: "e/16.md",
  slug: "e/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/17.md": {
  id: "e/17.md",
  slug: "e/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/18.md": {
  id: "e/18.md",
  slug: "e/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/19.md": {
  id: "e/19.md",
  slug: "e/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/2.md": {
  id: "e/2.md",
  slug: "e/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/20.md": {
  id: "e/20.md",
  slug: "e/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/21.md": {
  id: "e/21.md",
  slug: "e/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/22.md": {
  id: "e/22.md",
  slug: "e/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/23.md": {
  id: "e/23.md",
  slug: "e/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/24.md": {
  id: "e/24.md",
  slug: "e/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/25.md": {
  id: "e/25.md",
  slug: "e/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/26.md": {
  id: "e/26.md",
  slug: "e/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/27.md": {
  id: "e/27.md",
  slug: "e/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/28.md": {
  id: "e/28.md",
  slug: "e/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/29.md": {
  id: "e/29.md",
  slug: "e/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/3.md": {
  id: "e/3.md",
  slug: "e/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/30.md": {
  id: "e/30.md",
  slug: "e/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/31.md": {
  id: "e/31.md",
  slug: "e/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/32.md": {
  id: "e/32.md",
  slug: "e/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/33.md": {
  id: "e/33.md",
  slug: "e/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/34.md": {
  id: "e/34.md",
  slug: "e/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/35.md": {
  id: "e/35.md",
  slug: "e/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/36.md": {
  id: "e/36.md",
  slug: "e/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/37.md": {
  id: "e/37.md",
  slug: "e/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/38.md": {
  id: "e/38.md",
  slug: "e/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/39.md": {
  id: "e/39.md",
  slug: "e/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/4.md": {
  id: "e/4.md",
  slug: "e/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/40.md": {
  id: "e/40.md",
  slug: "e/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/41.md": {
  id: "e/41.md",
  slug: "e/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/42.md": {
  id: "e/42.md",
  slug: "e/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/43.md": {
  id: "e/43.md",
  slug: "e/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/44.md": {
  id: "e/44.md",
  slug: "e/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/45.md": {
  id: "e/45.md",
  slug: "e/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/46.md": {
  id: "e/46.md",
  slug: "e/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/47.md": {
  id: "e/47.md",
  slug: "e/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/48.md": {
  id: "e/48.md",
  slug: "e/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/49.md": {
  id: "e/49.md",
  slug: "e/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/5.md": {
  id: "e/5.md",
  slug: "e/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/50.md": {
  id: "e/50.md",
  slug: "e/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/51.md": {
  id: "e/51.md",
  slug: "e/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/52.md": {
  id: "e/52.md",
  slug: "e/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/53.md": {
  id: "e/53.md",
  slug: "e/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/6.md": {
  id: "e/6.md",
  slug: "e/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/7.md": {
  id: "e/7.md",
  slug: "e/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/8.md": {
  id: "e/8.md",
  slug: "e/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"e/9.md": {
  id: "e/9.md",
  slug: "e/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/1.md": {
  id: "ec/1.md",
  slug: "ec/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/10.md": {
  id: "ec/10.md",
  slug: "ec/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/11.md": {
  id: "ec/11.md",
  slug: "ec/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/12.md": {
  id: "ec/12.md",
  slug: "ec/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/13.md": {
  id: "ec/13.md",
  slug: "ec/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/14.md": {
  id: "ec/14.md",
  slug: "ec/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/15.md": {
  id: "ec/15.md",
  slug: "ec/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/16.md": {
  id: "ec/16.md",
  slug: "ec/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/17.md": {
  id: "ec/17.md",
  slug: "ec/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/18.md": {
  id: "ec/18.md",
  slug: "ec/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/19.md": {
  id: "ec/19.md",
  slug: "ec/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/2.md": {
  id: "ec/2.md",
  slug: "ec/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/20.md": {
  id: "ec/20.md",
  slug: "ec/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/21.md": {
  id: "ec/21.md",
  slug: "ec/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/22.md": {
  id: "ec/22.md",
  slug: "ec/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/23.md": {
  id: "ec/23.md",
  slug: "ec/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/24.md": {
  id: "ec/24.md",
  slug: "ec/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/25.md": {
  id: "ec/25.md",
  slug: "ec/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/26.md": {
  id: "ec/26.md",
  slug: "ec/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/27.md": {
  id: "ec/27.md",
  slug: "ec/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/28.md": {
  id: "ec/28.md",
  slug: "ec/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/29.md": {
  id: "ec/29.md",
  slug: "ec/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/3.md": {
  id: "ec/3.md",
  slug: "ec/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/30.md": {
  id: "ec/30.md",
  slug: "ec/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/31.md": {
  id: "ec/31.md",
  slug: "ec/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/32.md": {
  id: "ec/32.md",
  slug: "ec/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/33.md": {
  id: "ec/33.md",
  slug: "ec/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/34.md": {
  id: "ec/34.md",
  slug: "ec/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/35.md": {
  id: "ec/35.md",
  slug: "ec/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/36.md": {
  id: "ec/36.md",
  slug: "ec/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/37.md": {
  id: "ec/37.md",
  slug: "ec/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/38.md": {
  id: "ec/38.md",
  slug: "ec/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/39.md": {
  id: "ec/39.md",
  slug: "ec/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/4.md": {
  id: "ec/4.md",
  slug: "ec/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/40.md": {
  id: "ec/40.md",
  slug: "ec/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/41.md": {
  id: "ec/41.md",
  slug: "ec/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/42.md": {
  id: "ec/42.md",
  slug: "ec/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/43.md": {
  id: "ec/43.md",
  slug: "ec/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/44.md": {
  id: "ec/44.md",
  slug: "ec/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/45.md": {
  id: "ec/45.md",
  slug: "ec/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/46.md": {
  id: "ec/46.md",
  slug: "ec/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/47.md": {
  id: "ec/47.md",
  slug: "ec/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/48.md": {
  id: "ec/48.md",
  slug: "ec/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/49.md": {
  id: "ec/49.md",
  slug: "ec/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/5.md": {
  id: "ec/5.md",
  slug: "ec/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/50.md": {
  id: "ec/50.md",
  slug: "ec/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/51.md": {
  id: "ec/51.md",
  slug: "ec/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/52.md": {
  id: "ec/52.md",
  slug: "ec/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/53.md": {
  id: "ec/53.md",
  slug: "ec/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/6.md": {
  id: "ec/6.md",
  slug: "ec/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/7.md": {
  id: "ec/7.md",
  slug: "ec/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/8.md": {
  id: "ec/8.md",
  slug: "ec/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"ec/9.md": {
  id: "ec/9.md",
  slug: "ec/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/1.md": {
  id: "gl/1.md",
  slug: "gl/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/10.md": {
  id: "gl/10.md",
  slug: "gl/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/11.md": {
  id: "gl/11.md",
  slug: "gl/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/12.md": {
  id: "gl/12.md",
  slug: "gl/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/13.md": {
  id: "gl/13.md",
  slug: "gl/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/14.md": {
  id: "gl/14.md",
  slug: "gl/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/15.md": {
  id: "gl/15.md",
  slug: "gl/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/16.md": {
  id: "gl/16.md",
  slug: "gl/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/17.md": {
  id: "gl/17.md",
  slug: "gl/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/18.md": {
  id: "gl/18.md",
  slug: "gl/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/19.md": {
  id: "gl/19.md",
  slug: "gl/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/2.md": {
  id: "gl/2.md",
  slug: "gl/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/20.md": {
  id: "gl/20.md",
  slug: "gl/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/21.md": {
  id: "gl/21.md",
  slug: "gl/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/22.md": {
  id: "gl/22.md",
  slug: "gl/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/23.md": {
  id: "gl/23.md",
  slug: "gl/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/24.md": {
  id: "gl/24.md",
  slug: "gl/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/25.md": {
  id: "gl/25.md",
  slug: "gl/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/26.md": {
  id: "gl/26.md",
  slug: "gl/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/27.md": {
  id: "gl/27.md",
  slug: "gl/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/28.md": {
  id: "gl/28.md",
  slug: "gl/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/29.md": {
  id: "gl/29.md",
  slug: "gl/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/3.md": {
  id: "gl/3.md",
  slug: "gl/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/30.md": {
  id: "gl/30.md",
  slug: "gl/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/31.md": {
  id: "gl/31.md",
  slug: "gl/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/32.md": {
  id: "gl/32.md",
  slug: "gl/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/33.md": {
  id: "gl/33.md",
  slug: "gl/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/34.md": {
  id: "gl/34.md",
  slug: "gl/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/35.md": {
  id: "gl/35.md",
  slug: "gl/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/36.md": {
  id: "gl/36.md",
  slug: "gl/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/37.md": {
  id: "gl/37.md",
  slug: "gl/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/38.md": {
  id: "gl/38.md",
  slug: "gl/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/39.md": {
  id: "gl/39.md",
  slug: "gl/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/4.md": {
  id: "gl/4.md",
  slug: "gl/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/40.md": {
  id: "gl/40.md",
  slug: "gl/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/41.md": {
  id: "gl/41.md",
  slug: "gl/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/42.md": {
  id: "gl/42.md",
  slug: "gl/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/43.md": {
  id: "gl/43.md",
  slug: "gl/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/44.md": {
  id: "gl/44.md",
  slug: "gl/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/45.md": {
  id: "gl/45.md",
  slug: "gl/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/46.md": {
  id: "gl/46.md",
  slug: "gl/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/47.md": {
  id: "gl/47.md",
  slug: "gl/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/48.md": {
  id: "gl/48.md",
  slug: "gl/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/49.md": {
  id: "gl/49.md",
  slug: "gl/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/5.md": {
  id: "gl/5.md",
  slug: "gl/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/50.md": {
  id: "gl/50.md",
  slug: "gl/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/51.md": {
  id: "gl/51.md",
  slug: "gl/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/52.md": {
  id: "gl/52.md",
  slug: "gl/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/53.md": {
  id: "gl/53.md",
  slug: "gl/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/6.md": {
  id: "gl/6.md",
  slug: "gl/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/7.md": {
  id: "gl/7.md",
  slug: "gl/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/8.md": {
  id: "gl/8.md",
  slug: "gl/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"gl/9.md": {
  id: "gl/9.md",
  slug: "gl/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/1.md": {
  id: "pem/1.md",
  slug: "pem/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/10.md": {
  id: "pem/10.md",
  slug: "pem/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/11.md": {
  id: "pem/11.md",
  slug: "pem/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/12.md": {
  id: "pem/12.md",
  slug: "pem/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/13.md": {
  id: "pem/13.md",
  slug: "pem/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/14.md": {
  id: "pem/14.md",
  slug: "pem/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/15.md": {
  id: "pem/15.md",
  slug: "pem/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/16.md": {
  id: "pem/16.md",
  slug: "pem/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/17.md": {
  id: "pem/17.md",
  slug: "pem/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/18.md": {
  id: "pem/18.md",
  slug: "pem/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/19.md": {
  id: "pem/19.md",
  slug: "pem/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/2.md": {
  id: "pem/2.md",
  slug: "pem/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/20.md": {
  id: "pem/20.md",
  slug: "pem/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/21.md": {
  id: "pem/21.md",
  slug: "pem/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/22.md": {
  id: "pem/22.md",
  slug: "pem/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/23.md": {
  id: "pem/23.md",
  slug: "pem/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/24.md": {
  id: "pem/24.md",
  slug: "pem/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/25.md": {
  id: "pem/25.md",
  slug: "pem/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/26.md": {
  id: "pem/26.md",
  slug: "pem/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/27.md": {
  id: "pem/27.md",
  slug: "pem/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/28.md": {
  id: "pem/28.md",
  slug: "pem/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/29.md": {
  id: "pem/29.md",
  slug: "pem/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/3.md": {
  id: "pem/3.md",
  slug: "pem/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/30.md": {
  id: "pem/30.md",
  slug: "pem/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/31.md": {
  id: "pem/31.md",
  slug: "pem/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/32.md": {
  id: "pem/32.md",
  slug: "pem/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/33.md": {
  id: "pem/33.md",
  slug: "pem/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/34.md": {
  id: "pem/34.md",
  slug: "pem/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/35.md": {
  id: "pem/35.md",
  slug: "pem/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/36.md": {
  id: "pem/36.md",
  slug: "pem/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/37.md": {
  id: "pem/37.md",
  slug: "pem/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/38.md": {
  id: "pem/38.md",
  slug: "pem/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/39.md": {
  id: "pem/39.md",
  slug: "pem/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/4.md": {
  id: "pem/4.md",
  slug: "pem/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/40.md": {
  id: "pem/40.md",
  slug: "pem/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/41.md": {
  id: "pem/41.md",
  slug: "pem/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/42.md": {
  id: "pem/42.md",
  slug: "pem/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/43.md": {
  id: "pem/43.md",
  slug: "pem/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/44.md": {
  id: "pem/44.md",
  slug: "pem/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/45.md": {
  id: "pem/45.md",
  slug: "pem/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/46.md": {
  id: "pem/46.md",
  slug: "pem/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/47.md": {
  id: "pem/47.md",
  slug: "pem/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/48.md": {
  id: "pem/48.md",
  slug: "pem/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/49.md": {
  id: "pem/49.md",
  slug: "pem/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/5.md": {
  id: "pem/5.md",
  slug: "pem/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/50.md": {
  id: "pem/50.md",
  slug: "pem/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/51.md": {
  id: "pem/51.md",
  slug: "pem/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/52.md": {
  id: "pem/52.md",
  slug: "pem/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/53.md": {
  id: "pem/53.md",
  slug: "pem/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/6.md": {
  id: "pem/6.md",
  slug: "pem/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/7.md": {
  id: "pem/7.md",
  slug: "pem/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/8.md": {
  id: "pem/8.md",
  slug: "pem/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"pem/9.md": {
  id: "pem/9.md",
  slug: "pem/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/1.md": {
  id: "sw/1.md",
  slug: "sw/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/10.md": {
  id: "sw/10.md",
  slug: "sw/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/11.md": {
  id: "sw/11.md",
  slug: "sw/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/12.md": {
  id: "sw/12.md",
  slug: "sw/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/13.md": {
  id: "sw/13.md",
  slug: "sw/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/14.md": {
  id: "sw/14.md",
  slug: "sw/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/15.md": {
  id: "sw/15.md",
  slug: "sw/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/16.md": {
  id: "sw/16.md",
  slug: "sw/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/17.md": {
  id: "sw/17.md",
  slug: "sw/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/18.md": {
  id: "sw/18.md",
  slug: "sw/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/19.md": {
  id: "sw/19.md",
  slug: "sw/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/2.md": {
  id: "sw/2.md",
  slug: "sw/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/20.md": {
  id: "sw/20.md",
  slug: "sw/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/21.md": {
  id: "sw/21.md",
  slug: "sw/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/22.md": {
  id: "sw/22.md",
  slug: "sw/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/23.md": {
  id: "sw/23.md",
  slug: "sw/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/24.md": {
  id: "sw/24.md",
  slug: "sw/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/25.md": {
  id: "sw/25.md",
  slug: "sw/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/26.md": {
  id: "sw/26.md",
  slug: "sw/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/27.md": {
  id: "sw/27.md",
  slug: "sw/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/28.md": {
  id: "sw/28.md",
  slug: "sw/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/29.md": {
  id: "sw/29.md",
  slug: "sw/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/3.md": {
  id: "sw/3.md",
  slug: "sw/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/30.md": {
  id: "sw/30.md",
  slug: "sw/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/31.md": {
  id: "sw/31.md",
  slug: "sw/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/32.md": {
  id: "sw/32.md",
  slug: "sw/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/33.md": {
  id: "sw/33.md",
  slug: "sw/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/34.md": {
  id: "sw/34.md",
  slug: "sw/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/35.md": {
  id: "sw/35.md",
  slug: "sw/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/36.md": {
  id: "sw/36.md",
  slug: "sw/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/37.md": {
  id: "sw/37.md",
  slug: "sw/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/38.md": {
  id: "sw/38.md",
  slug: "sw/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/39.md": {
  id: "sw/39.md",
  slug: "sw/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/4.md": {
  id: "sw/4.md",
  slug: "sw/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/40.md": {
  id: "sw/40.md",
  slug: "sw/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/41.md": {
  id: "sw/41.md",
  slug: "sw/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/42.md": {
  id: "sw/42.md",
  slug: "sw/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/43.md": {
  id: "sw/43.md",
  slug: "sw/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/44.md": {
  id: "sw/44.md",
  slug: "sw/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/45.md": {
  id: "sw/45.md",
  slug: "sw/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/46.md": {
  id: "sw/46.md",
  slug: "sw/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/47.md": {
  id: "sw/47.md",
  slug: "sw/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/48.md": {
  id: "sw/48.md",
  slug: "sw/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/49.md": {
  id: "sw/49.md",
  slug: "sw/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/5.md": {
  id: "sw/5.md",
  slug: "sw/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/50.md": {
  id: "sw/50.md",
  slug: "sw/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/51.md": {
  id: "sw/51.md",
  slug: "sw/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/52.md": {
  id: "sw/52.md",
  slug: "sw/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/53.md": {
  id: "sw/53.md",
  slug: "sw/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/6.md": {
  id: "sw/6.md",
  slug: "sw/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/7.md": {
  id: "sw/7.md",
  slug: "sw/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/8.md": {
  id: "sw/8.md",
  slug: "sw/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"sw/9.md": {
  id: "sw/9.md",
  slug: "sw/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/1.md": {
  id: "twh/1.md",
  slug: "twh/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/10.md": {
  id: "twh/10.md",
  slug: "twh/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/11.md": {
  id: "twh/11.md",
  slug: "twh/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/12.md": {
  id: "twh/12.md",
  slug: "twh/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/13.md": {
  id: "twh/13.md",
  slug: "twh/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/14.md": {
  id: "twh/14.md",
  slug: "twh/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/15.md": {
  id: "twh/15.md",
  slug: "twh/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/16.md": {
  id: "twh/16.md",
  slug: "twh/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/17.md": {
  id: "twh/17.md",
  slug: "twh/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/18.md": {
  id: "twh/18.md",
  slug: "twh/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/19.md": {
  id: "twh/19.md",
  slug: "twh/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/2.md": {
  id: "twh/2.md",
  slug: "twh/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/20.md": {
  id: "twh/20.md",
  slug: "twh/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/21.md": {
  id: "twh/21.md",
  slug: "twh/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/22.md": {
  id: "twh/22.md",
  slug: "twh/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/23.md": {
  id: "twh/23.md",
  slug: "twh/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/24.md": {
  id: "twh/24.md",
  slug: "twh/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/25.md": {
  id: "twh/25.md",
  slug: "twh/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/26.md": {
  id: "twh/26.md",
  slug: "twh/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/27.md": {
  id: "twh/27.md",
  slug: "twh/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/28.md": {
  id: "twh/28.md",
  slug: "twh/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/29.md": {
  id: "twh/29.md",
  slug: "twh/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/3.md": {
  id: "twh/3.md",
  slug: "twh/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/30.md": {
  id: "twh/30.md",
  slug: "twh/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/31.md": {
  id: "twh/31.md",
  slug: "twh/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/32.md": {
  id: "twh/32.md",
  slug: "twh/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/33.md": {
  id: "twh/33.md",
  slug: "twh/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/34.md": {
  id: "twh/34.md",
  slug: "twh/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/35.md": {
  id: "twh/35.md",
  slug: "twh/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/36.md": {
  id: "twh/36.md",
  slug: "twh/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/37.md": {
  id: "twh/37.md",
  slug: "twh/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/38.md": {
  id: "twh/38.md",
  slug: "twh/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/39.md": {
  id: "twh/39.md",
  slug: "twh/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/4.md": {
  id: "twh/4.md",
  slug: "twh/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/40.md": {
  id: "twh/40.md",
  slug: "twh/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/41.md": {
  id: "twh/41.md",
  slug: "twh/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/42.md": {
  id: "twh/42.md",
  slug: "twh/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/43.md": {
  id: "twh/43.md",
  slug: "twh/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/44.md": {
  id: "twh/44.md",
  slug: "twh/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/45.md": {
  id: "twh/45.md",
  slug: "twh/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/46.md": {
  id: "twh/46.md",
  slug: "twh/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/47.md": {
  id: "twh/47.md",
  slug: "twh/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/48.md": {
  id: "twh/48.md",
  slug: "twh/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/49.md": {
  id: "twh/49.md",
  slug: "twh/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/5.md": {
  id: "twh/5.md",
  slug: "twh/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/50.md": {
  id: "twh/50.md",
  slug: "twh/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/51.md": {
  id: "twh/51.md",
  slug: "twh/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/52.md": {
  id: "twh/52.md",
  slug: "twh/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/53.md": {
  id: "twh/53.md",
  slug: "twh/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/6.md": {
  id: "twh/6.md",
  slug: "twh/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/7.md": {
  id: "twh/7.md",
  slug: "twh/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/8.md": {
  id: "twh/8.md",
  slug: "twh/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twh/9.md": {
  id: "twh/9.md",
  slug: "twh/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/1.md": {
  id: "twr/1.md",
  slug: "twr/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/10.md": {
  id: "twr/10.md",
  slug: "twr/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/11.md": {
  id: "twr/11.md",
  slug: "twr/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/12.md": {
  id: "twr/12.md",
  slug: "twr/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/13.md": {
  id: "twr/13.md",
  slug: "twr/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/14.md": {
  id: "twr/14.md",
  slug: "twr/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/15.md": {
  id: "twr/15.md",
  slug: "twr/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/16.md": {
  id: "twr/16.md",
  slug: "twr/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/17.md": {
  id: "twr/17.md",
  slug: "twr/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/18.md": {
  id: "twr/18.md",
  slug: "twr/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/19.md": {
  id: "twr/19.md",
  slug: "twr/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/2.md": {
  id: "twr/2.md",
  slug: "twr/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/20.md": {
  id: "twr/20.md",
  slug: "twr/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/21.md": {
  id: "twr/21.md",
  slug: "twr/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/22.md": {
  id: "twr/22.md",
  slug: "twr/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/23.md": {
  id: "twr/23.md",
  slug: "twr/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/24.md": {
  id: "twr/24.md",
  slug: "twr/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/25.md": {
  id: "twr/25.md",
  slug: "twr/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/26.md": {
  id: "twr/26.md",
  slug: "twr/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/27.md": {
  id: "twr/27.md",
  slug: "twr/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/28.md": {
  id: "twr/28.md",
  slug: "twr/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/29.md": {
  id: "twr/29.md",
  slug: "twr/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/3.md": {
  id: "twr/3.md",
  slug: "twr/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/30.md": {
  id: "twr/30.md",
  slug: "twr/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/31.md": {
  id: "twr/31.md",
  slug: "twr/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/32.md": {
  id: "twr/32.md",
  slug: "twr/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/33.md": {
  id: "twr/33.md",
  slug: "twr/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/34.md": {
  id: "twr/34.md",
  slug: "twr/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/35.md": {
  id: "twr/35.md",
  slug: "twr/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/36.md": {
  id: "twr/36.md",
  slug: "twr/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/37.md": {
  id: "twr/37.md",
  slug: "twr/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/38.md": {
  id: "twr/38.md",
  slug: "twr/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/39.md": {
  id: "twr/39.md",
  slug: "twr/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/4.md": {
  id: "twr/4.md",
  slug: "twr/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/40.md": {
  id: "twr/40.md",
  slug: "twr/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/41.md": {
  id: "twr/41.md",
  slug: "twr/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/42.md": {
  id: "twr/42.md",
  slug: "twr/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/43.md": {
  id: "twr/43.md",
  slug: "twr/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/44.md": {
  id: "twr/44.md",
  slug: "twr/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/45.md": {
  id: "twr/45.md",
  slug: "twr/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/46.md": {
  id: "twr/46.md",
  slug: "twr/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/47.md": {
  id: "twr/47.md",
  slug: "twr/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/48.md": {
  id: "twr/48.md",
  slug: "twr/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/49.md": {
  id: "twr/49.md",
  slug: "twr/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/5.md": {
  id: "twr/5.md",
  slug: "twr/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/50.md": {
  id: "twr/50.md",
  slug: "twr/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/51.md": {
  id: "twr/51.md",
  slug: "twr/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/52.md": {
  id: "twr/52.md",
  slug: "twr/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/53.md": {
  id: "twr/53.md",
  slug: "twr/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/6.md": {
  id: "twr/6.md",
  slug: "twr/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/7.md": {
  id: "twr/7.md",
  slug: "twr/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/8.md": {
  id: "twr/8.md",
  slug: "twr/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"twr/9.md": {
  id: "twr/9.md",
  slug: "twr/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/1.md": {
  id: "wao/1.md",
  slug: "wao/1",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/10.md": {
  id: "wao/10.md",
  slug: "wao/10",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/11.md": {
  id: "wao/11.md",
  slug: "wao/11",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/12.md": {
  id: "wao/12.md",
  slug: "wao/12",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/13.md": {
  id: "wao/13.md",
  slug: "wao/13",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/14.md": {
  id: "wao/14.md",
  slug: "wao/14",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/15.md": {
  id: "wao/15.md",
  slug: "wao/15",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/16.md": {
  id: "wao/16.md",
  slug: "wao/16",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/17.md": {
  id: "wao/17.md",
  slug: "wao/17",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/18.md": {
  id: "wao/18.md",
  slug: "wao/18",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/19.md": {
  id: "wao/19.md",
  slug: "wao/19",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/2.md": {
  id: "wao/2.md",
  slug: "wao/2",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/20.md": {
  id: "wao/20.md",
  slug: "wao/20",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/21.md": {
  id: "wao/21.md",
  slug: "wao/21",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/22.md": {
  id: "wao/22.md",
  slug: "wao/22",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/23.md": {
  id: "wao/23.md",
  slug: "wao/23",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/24.md": {
  id: "wao/24.md",
  slug: "wao/24",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/25.md": {
  id: "wao/25.md",
  slug: "wao/25",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/26.md": {
  id: "wao/26.md",
  slug: "wao/26",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/27.md": {
  id: "wao/27.md",
  slug: "wao/27",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/28.md": {
  id: "wao/28.md",
  slug: "wao/28",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/29.md": {
  id: "wao/29.md",
  slug: "wao/29",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/3.md": {
  id: "wao/3.md",
  slug: "wao/3",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/30.md": {
  id: "wao/30.md",
  slug: "wao/30",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/31.md": {
  id: "wao/31.md",
  slug: "wao/31",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/32.md": {
  id: "wao/32.md",
  slug: "wao/32",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/33.md": {
  id: "wao/33.md",
  slug: "wao/33",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/34.md": {
  id: "wao/34.md",
  slug: "wao/34",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/35.md": {
  id: "wao/35.md",
  slug: "wao/35",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/36.md": {
  id: "wao/36.md",
  slug: "wao/36",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/37.md": {
  id: "wao/37.md",
  slug: "wao/37",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/38.md": {
  id: "wao/38.md",
  slug: "wao/38",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/39.md": {
  id: "wao/39.md",
  slug: "wao/39",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/4.md": {
  id: "wao/4.md",
  slug: "wao/4",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/40.md": {
  id: "wao/40.md",
  slug: "wao/40",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/41.md": {
  id: "wao/41.md",
  slug: "wao/41",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/42.md": {
  id: "wao/42.md",
  slug: "wao/42",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/43.md": {
  id: "wao/43.md",
  slug: "wao/43",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/44.md": {
  id: "wao/44.md",
  slug: "wao/44",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/45.md": {
  id: "wao/45.md",
  slug: "wao/45",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/46.md": {
  id: "wao/46.md",
  slug: "wao/46",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/47.md": {
  id: "wao/47.md",
  slug: "wao/47",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/48.md": {
  id: "wao/48.md",
  slug: "wao/48",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/49.md": {
  id: "wao/49.md",
  slug: "wao/49",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/5.md": {
  id: "wao/5.md",
  slug: "wao/5",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/50.md": {
  id: "wao/50.md",
  slug: "wao/50",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/51.md": {
  id: "wao/51.md",
  slug: "wao/51",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/52.md": {
  id: "wao/52.md",
  slug: "wao/52",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/53.md": {
  id: "wao/53.md",
  slug: "wao/53",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/6.md": {
  id: "wao/6.md",
  slug: "wao/6",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/7.md": {
  id: "wao/7.md",
  slug: "wao/7",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/8.md": {
  id: "wao/8.md",
  slug: "wao/8",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
"wao/9.md": {
  id: "wao/9.md",
  slug: "wao/9",
  body: string,
  collection: "translations",
  data: InferEntrySchema<"translations">
},
},

	};

	type ContentConfig = typeof import("./config");
}
