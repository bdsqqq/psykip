declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"translations": {
"e/1.md": {
	id: "e/1.md";
  slug: "e/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/10.md": {
	id: "e/10.md";
  slug: "e/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/11.md": {
	id: "e/11.md";
  slug: "e/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/12.md": {
	id: "e/12.md";
  slug: "e/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/13.md": {
	id: "e/13.md";
  slug: "e/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/14.md": {
	id: "e/14.md";
  slug: "e/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/15.md": {
	id: "e/15.md";
  slug: "e/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/16.md": {
	id: "e/16.md";
  slug: "e/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/17.md": {
	id: "e/17.md";
  slug: "e/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/18.md": {
	id: "e/18.md";
  slug: "e/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/19.md": {
	id: "e/19.md";
  slug: "e/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/2.md": {
	id: "e/2.md";
  slug: "e/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/20.md": {
	id: "e/20.md";
  slug: "e/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/21.md": {
	id: "e/21.md";
  slug: "e/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/22.md": {
	id: "e/22.md";
  slug: "e/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/23.md": {
	id: "e/23.md";
  slug: "e/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/24.md": {
	id: "e/24.md";
  slug: "e/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/25.md": {
	id: "e/25.md";
  slug: "e/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/26.md": {
	id: "e/26.md";
  slug: "e/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/27.md": {
	id: "e/27.md";
  slug: "e/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/28.md": {
	id: "e/28.md";
  slug: "e/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/29.md": {
	id: "e/29.md";
  slug: "e/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/3.md": {
	id: "e/3.md";
  slug: "e/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/30.md": {
	id: "e/30.md";
  slug: "e/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/31.md": {
	id: "e/31.md";
  slug: "e/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/32.md": {
	id: "e/32.md";
  slug: "e/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/33.md": {
	id: "e/33.md";
  slug: "e/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/34.md": {
	id: "e/34.md";
  slug: "e/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/35.md": {
	id: "e/35.md";
  slug: "e/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/36.md": {
	id: "e/36.md";
  slug: "e/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/37.md": {
	id: "e/37.md";
  slug: "e/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/38.md": {
	id: "e/38.md";
  slug: "e/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/39.md": {
	id: "e/39.md";
  slug: "e/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/4.md": {
	id: "e/4.md";
  slug: "e/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/40.md": {
	id: "e/40.md";
  slug: "e/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/41.md": {
	id: "e/41.md";
  slug: "e/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/42.md": {
	id: "e/42.md";
  slug: "e/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/43.md": {
	id: "e/43.md";
  slug: "e/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/44.md": {
	id: "e/44.md";
  slug: "e/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/45.md": {
	id: "e/45.md";
  slug: "e/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/46.md": {
	id: "e/46.md";
  slug: "e/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/47.md": {
	id: "e/47.md";
  slug: "e/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/48.md": {
	id: "e/48.md";
  slug: "e/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/49.md": {
	id: "e/49.md";
  slug: "e/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/5.md": {
	id: "e/5.md";
  slug: "e/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/50.md": {
	id: "e/50.md";
  slug: "e/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/51.md": {
	id: "e/51.md";
  slug: "e/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/52.md": {
	id: "e/52.md";
  slug: "e/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/53.md": {
	id: "e/53.md";
  slug: "e/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/6.md": {
	id: "e/6.md";
  slug: "e/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/7.md": {
	id: "e/7.md";
  slug: "e/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/8.md": {
	id: "e/8.md";
  slug: "e/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"e/9.md": {
	id: "e/9.md";
  slug: "e/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/1.md": {
	id: "ec/1.md";
  slug: "ec/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/10.md": {
	id: "ec/10.md";
  slug: "ec/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/11.md": {
	id: "ec/11.md";
  slug: "ec/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/12.md": {
	id: "ec/12.md";
  slug: "ec/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/13.md": {
	id: "ec/13.md";
  slug: "ec/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/14.md": {
	id: "ec/14.md";
  slug: "ec/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/15.md": {
	id: "ec/15.md";
  slug: "ec/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/16.md": {
	id: "ec/16.md";
  slug: "ec/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/17.md": {
	id: "ec/17.md";
  slug: "ec/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/18.md": {
	id: "ec/18.md";
  slug: "ec/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/19.md": {
	id: "ec/19.md";
  slug: "ec/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/2.md": {
	id: "ec/2.md";
  slug: "ec/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/20.md": {
	id: "ec/20.md";
  slug: "ec/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/21.md": {
	id: "ec/21.md";
  slug: "ec/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/22.md": {
	id: "ec/22.md";
  slug: "ec/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/23.md": {
	id: "ec/23.md";
  slug: "ec/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/24.md": {
	id: "ec/24.md";
  slug: "ec/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/25.md": {
	id: "ec/25.md";
  slug: "ec/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/26.md": {
	id: "ec/26.md";
  slug: "ec/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/27.md": {
	id: "ec/27.md";
  slug: "ec/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/28.md": {
	id: "ec/28.md";
  slug: "ec/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/29.md": {
	id: "ec/29.md";
  slug: "ec/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/3.md": {
	id: "ec/3.md";
  slug: "ec/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/30.md": {
	id: "ec/30.md";
  slug: "ec/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/31.md": {
	id: "ec/31.md";
  slug: "ec/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/32.md": {
	id: "ec/32.md";
  slug: "ec/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/33.md": {
	id: "ec/33.md";
  slug: "ec/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/34.md": {
	id: "ec/34.md";
  slug: "ec/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/35.md": {
	id: "ec/35.md";
  slug: "ec/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/36.md": {
	id: "ec/36.md";
  slug: "ec/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/37.md": {
	id: "ec/37.md";
  slug: "ec/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/38.md": {
	id: "ec/38.md";
  slug: "ec/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/39.md": {
	id: "ec/39.md";
  slug: "ec/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/4.md": {
	id: "ec/4.md";
  slug: "ec/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/40.md": {
	id: "ec/40.md";
  slug: "ec/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/41.md": {
	id: "ec/41.md";
  slug: "ec/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/42.md": {
	id: "ec/42.md";
  slug: "ec/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/43.md": {
	id: "ec/43.md";
  slug: "ec/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/44.md": {
	id: "ec/44.md";
  slug: "ec/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/45.md": {
	id: "ec/45.md";
  slug: "ec/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/46.md": {
	id: "ec/46.md";
  slug: "ec/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/47.md": {
	id: "ec/47.md";
  slug: "ec/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/48.md": {
	id: "ec/48.md";
  slug: "ec/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/49.md": {
	id: "ec/49.md";
  slug: "ec/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/5.md": {
	id: "ec/5.md";
  slug: "ec/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/50.md": {
	id: "ec/50.md";
  slug: "ec/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/51.md": {
	id: "ec/51.md";
  slug: "ec/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/52.md": {
	id: "ec/52.md";
  slug: "ec/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/53.md": {
	id: "ec/53.md";
  slug: "ec/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/6.md": {
	id: "ec/6.md";
  slug: "ec/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/7.md": {
	id: "ec/7.md";
  slug: "ec/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/8.md": {
	id: "ec/8.md";
  slug: "ec/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"ec/9.md": {
	id: "ec/9.md";
  slug: "ec/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/1.md": {
	id: "gl/1.md";
  slug: "gl/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/10.md": {
	id: "gl/10.md";
  slug: "gl/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/11.md": {
	id: "gl/11.md";
  slug: "gl/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/12.md": {
	id: "gl/12.md";
  slug: "gl/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/13.md": {
	id: "gl/13.md";
  slug: "gl/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/14.md": {
	id: "gl/14.md";
  slug: "gl/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/15.md": {
	id: "gl/15.md";
  slug: "gl/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/16.md": {
	id: "gl/16.md";
  slug: "gl/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/17.md": {
	id: "gl/17.md";
  slug: "gl/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/18.md": {
	id: "gl/18.md";
  slug: "gl/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/19.md": {
	id: "gl/19.md";
  slug: "gl/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/2.md": {
	id: "gl/2.md";
  slug: "gl/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/20.md": {
	id: "gl/20.md";
  slug: "gl/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/21.md": {
	id: "gl/21.md";
  slug: "gl/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/22.md": {
	id: "gl/22.md";
  slug: "gl/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/23.md": {
	id: "gl/23.md";
  slug: "gl/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/24.md": {
	id: "gl/24.md";
  slug: "gl/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/25.md": {
	id: "gl/25.md";
  slug: "gl/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/26.md": {
	id: "gl/26.md";
  slug: "gl/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/27.md": {
	id: "gl/27.md";
  slug: "gl/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/28.md": {
	id: "gl/28.md";
  slug: "gl/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/29.md": {
	id: "gl/29.md";
  slug: "gl/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/3.md": {
	id: "gl/3.md";
  slug: "gl/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/30.md": {
	id: "gl/30.md";
  slug: "gl/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/31.md": {
	id: "gl/31.md";
  slug: "gl/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/32.md": {
	id: "gl/32.md";
  slug: "gl/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/33.md": {
	id: "gl/33.md";
  slug: "gl/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/34.md": {
	id: "gl/34.md";
  slug: "gl/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/35.md": {
	id: "gl/35.md";
  slug: "gl/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/36.md": {
	id: "gl/36.md";
  slug: "gl/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/37.md": {
	id: "gl/37.md";
  slug: "gl/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/38.md": {
	id: "gl/38.md";
  slug: "gl/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/39.md": {
	id: "gl/39.md";
  slug: "gl/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/4.md": {
	id: "gl/4.md";
  slug: "gl/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/40.md": {
	id: "gl/40.md";
  slug: "gl/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/41.md": {
	id: "gl/41.md";
  slug: "gl/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/42.md": {
	id: "gl/42.md";
  slug: "gl/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/43.md": {
	id: "gl/43.md";
  slug: "gl/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/44.md": {
	id: "gl/44.md";
  slug: "gl/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/45.md": {
	id: "gl/45.md";
  slug: "gl/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/46.md": {
	id: "gl/46.md";
  slug: "gl/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/47.md": {
	id: "gl/47.md";
  slug: "gl/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/48.md": {
	id: "gl/48.md";
  slug: "gl/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/49.md": {
	id: "gl/49.md";
  slug: "gl/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/5.md": {
	id: "gl/5.md";
  slug: "gl/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/50.md": {
	id: "gl/50.md";
  slug: "gl/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/51.md": {
	id: "gl/51.md";
  slug: "gl/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/52.md": {
	id: "gl/52.md";
  slug: "gl/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/53.md": {
	id: "gl/53.md";
  slug: "gl/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/6.md": {
	id: "gl/6.md";
  slug: "gl/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/7.md": {
	id: "gl/7.md";
  slug: "gl/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/8.md": {
	id: "gl/8.md";
  slug: "gl/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"gl/9.md": {
	id: "gl/9.md";
  slug: "gl/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/1.md": {
	id: "pem/1.md";
  slug: "pem/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/10.md": {
	id: "pem/10.md";
  slug: "pem/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/11.md": {
	id: "pem/11.md";
  slug: "pem/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/12.md": {
	id: "pem/12.md";
  slug: "pem/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/13.md": {
	id: "pem/13.md";
  slug: "pem/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/14.md": {
	id: "pem/14.md";
  slug: "pem/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/15.md": {
	id: "pem/15.md";
  slug: "pem/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/16.md": {
	id: "pem/16.md";
  slug: "pem/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/17.md": {
	id: "pem/17.md";
  slug: "pem/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/18.md": {
	id: "pem/18.md";
  slug: "pem/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/19.md": {
	id: "pem/19.md";
  slug: "pem/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/2.md": {
	id: "pem/2.md";
  slug: "pem/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/20.md": {
	id: "pem/20.md";
  slug: "pem/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/21.md": {
	id: "pem/21.md";
  slug: "pem/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/22.md": {
	id: "pem/22.md";
  slug: "pem/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/23.md": {
	id: "pem/23.md";
  slug: "pem/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/24.md": {
	id: "pem/24.md";
  slug: "pem/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/25.md": {
	id: "pem/25.md";
  slug: "pem/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/26.md": {
	id: "pem/26.md";
  slug: "pem/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/27.md": {
	id: "pem/27.md";
  slug: "pem/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/28.md": {
	id: "pem/28.md";
  slug: "pem/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/29.md": {
	id: "pem/29.md";
  slug: "pem/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/3.md": {
	id: "pem/3.md";
  slug: "pem/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/30.md": {
	id: "pem/30.md";
  slug: "pem/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/31.md": {
	id: "pem/31.md";
  slug: "pem/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/32.md": {
	id: "pem/32.md";
  slug: "pem/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/33.md": {
	id: "pem/33.md";
  slug: "pem/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/34.md": {
	id: "pem/34.md";
  slug: "pem/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/35.md": {
	id: "pem/35.md";
  slug: "pem/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/36.md": {
	id: "pem/36.md";
  slug: "pem/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/37.md": {
	id: "pem/37.md";
  slug: "pem/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/38.md": {
	id: "pem/38.md";
  slug: "pem/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/39.md": {
	id: "pem/39.md";
  slug: "pem/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/4.md": {
	id: "pem/4.md";
  slug: "pem/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/40.md": {
	id: "pem/40.md";
  slug: "pem/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/41.md": {
	id: "pem/41.md";
  slug: "pem/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/42.md": {
	id: "pem/42.md";
  slug: "pem/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/43.md": {
	id: "pem/43.md";
  slug: "pem/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/44.md": {
	id: "pem/44.md";
  slug: "pem/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/45.md": {
	id: "pem/45.md";
  slug: "pem/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/46.md": {
	id: "pem/46.md";
  slug: "pem/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/47.md": {
	id: "pem/47.md";
  slug: "pem/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/48.md": {
	id: "pem/48.md";
  slug: "pem/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/49.md": {
	id: "pem/49.md";
  slug: "pem/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/5.md": {
	id: "pem/5.md";
  slug: "pem/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/50.md": {
	id: "pem/50.md";
  slug: "pem/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/51.md": {
	id: "pem/51.md";
  slug: "pem/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/52.md": {
	id: "pem/52.md";
  slug: "pem/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/53.md": {
	id: "pem/53.md";
  slug: "pem/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/6.md": {
	id: "pem/6.md";
  slug: "pem/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/7.md": {
	id: "pem/7.md";
  slug: "pem/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/8.md": {
	id: "pem/8.md";
  slug: "pem/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"pem/9.md": {
	id: "pem/9.md";
  slug: "pem/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/1.md": {
	id: "sw/1.md";
  slug: "sw/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/10.md": {
	id: "sw/10.md";
  slug: "sw/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/11.md": {
	id: "sw/11.md";
  slug: "sw/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/12.md": {
	id: "sw/12.md";
  slug: "sw/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/13.md": {
	id: "sw/13.md";
  slug: "sw/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/14.md": {
	id: "sw/14.md";
  slug: "sw/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/15.md": {
	id: "sw/15.md";
  slug: "sw/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/16.md": {
	id: "sw/16.md";
  slug: "sw/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/17.md": {
	id: "sw/17.md";
  slug: "sw/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/18.md": {
	id: "sw/18.md";
  slug: "sw/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/19.md": {
	id: "sw/19.md";
  slug: "sw/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/2.md": {
	id: "sw/2.md";
  slug: "sw/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/20.md": {
	id: "sw/20.md";
  slug: "sw/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/21.md": {
	id: "sw/21.md";
  slug: "sw/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/22.md": {
	id: "sw/22.md";
  slug: "sw/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/23.md": {
	id: "sw/23.md";
  slug: "sw/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/24.md": {
	id: "sw/24.md";
  slug: "sw/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/25.md": {
	id: "sw/25.md";
  slug: "sw/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/26.md": {
	id: "sw/26.md";
  slug: "sw/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/27.md": {
	id: "sw/27.md";
  slug: "sw/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/28.md": {
	id: "sw/28.md";
  slug: "sw/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/29.md": {
	id: "sw/29.md";
  slug: "sw/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/3.md": {
	id: "sw/3.md";
  slug: "sw/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/30.md": {
	id: "sw/30.md";
  slug: "sw/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/31.md": {
	id: "sw/31.md";
  slug: "sw/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/32.md": {
	id: "sw/32.md";
  slug: "sw/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/33.md": {
	id: "sw/33.md";
  slug: "sw/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/34.md": {
	id: "sw/34.md";
  slug: "sw/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/35.md": {
	id: "sw/35.md";
  slug: "sw/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/36.md": {
	id: "sw/36.md";
  slug: "sw/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/37.md": {
	id: "sw/37.md";
  slug: "sw/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/38.md": {
	id: "sw/38.md";
  slug: "sw/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/39.md": {
	id: "sw/39.md";
  slug: "sw/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/4.md": {
	id: "sw/4.md";
  slug: "sw/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/40.md": {
	id: "sw/40.md";
  slug: "sw/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/41.md": {
	id: "sw/41.md";
  slug: "sw/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/42.md": {
	id: "sw/42.md";
  slug: "sw/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/43.md": {
	id: "sw/43.md";
  slug: "sw/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/44.md": {
	id: "sw/44.md";
  slug: "sw/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/45.md": {
	id: "sw/45.md";
  slug: "sw/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/46.md": {
	id: "sw/46.md";
  slug: "sw/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/47.md": {
	id: "sw/47.md";
  slug: "sw/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/48.md": {
	id: "sw/48.md";
  slug: "sw/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/49.md": {
	id: "sw/49.md";
  slug: "sw/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/5.md": {
	id: "sw/5.md";
  slug: "sw/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/50.md": {
	id: "sw/50.md";
  slug: "sw/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/51.md": {
	id: "sw/51.md";
  slug: "sw/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/52.md": {
	id: "sw/52.md";
  slug: "sw/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/53.md": {
	id: "sw/53.md";
  slug: "sw/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/6.md": {
	id: "sw/6.md";
  slug: "sw/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/7.md": {
	id: "sw/7.md";
  slug: "sw/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/8.md": {
	id: "sw/8.md";
  slug: "sw/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"sw/9.md": {
	id: "sw/9.md";
  slug: "sw/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/1.md": {
	id: "twh/1.md";
  slug: "twh/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/10.md": {
	id: "twh/10.md";
  slug: "twh/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/11.md": {
	id: "twh/11.md";
  slug: "twh/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/12.md": {
	id: "twh/12.md";
  slug: "twh/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/13.md": {
	id: "twh/13.md";
  slug: "twh/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/14.md": {
	id: "twh/14.md";
  slug: "twh/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/15.md": {
	id: "twh/15.md";
  slug: "twh/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/16.md": {
	id: "twh/16.md";
  slug: "twh/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/17.md": {
	id: "twh/17.md";
  slug: "twh/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/18.md": {
	id: "twh/18.md";
  slug: "twh/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/19.md": {
	id: "twh/19.md";
  slug: "twh/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/2.md": {
	id: "twh/2.md";
  slug: "twh/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/20.md": {
	id: "twh/20.md";
  slug: "twh/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/21.md": {
	id: "twh/21.md";
  slug: "twh/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/22.md": {
	id: "twh/22.md";
  slug: "twh/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/23.md": {
	id: "twh/23.md";
  slug: "twh/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/24.md": {
	id: "twh/24.md";
  slug: "twh/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/25.md": {
	id: "twh/25.md";
  slug: "twh/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/26.md": {
	id: "twh/26.md";
  slug: "twh/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/27.md": {
	id: "twh/27.md";
  slug: "twh/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/28.md": {
	id: "twh/28.md";
  slug: "twh/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/29.md": {
	id: "twh/29.md";
  slug: "twh/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/3.md": {
	id: "twh/3.md";
  slug: "twh/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/30.md": {
	id: "twh/30.md";
  slug: "twh/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/31.md": {
	id: "twh/31.md";
  slug: "twh/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/32.md": {
	id: "twh/32.md";
  slug: "twh/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/33.md": {
	id: "twh/33.md";
  slug: "twh/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/34.md": {
	id: "twh/34.md";
  slug: "twh/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/35.md": {
	id: "twh/35.md";
  slug: "twh/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/36.md": {
	id: "twh/36.md";
  slug: "twh/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/37.md": {
	id: "twh/37.md";
  slug: "twh/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/38.md": {
	id: "twh/38.md";
  slug: "twh/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/39.md": {
	id: "twh/39.md";
  slug: "twh/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/4.md": {
	id: "twh/4.md";
  slug: "twh/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/40.md": {
	id: "twh/40.md";
  slug: "twh/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/41.md": {
	id: "twh/41.md";
  slug: "twh/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/42.md": {
	id: "twh/42.md";
  slug: "twh/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/43.md": {
	id: "twh/43.md";
  slug: "twh/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/44.md": {
	id: "twh/44.md";
  slug: "twh/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/45.md": {
	id: "twh/45.md";
  slug: "twh/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/46.md": {
	id: "twh/46.md";
  slug: "twh/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/47.md": {
	id: "twh/47.md";
  slug: "twh/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/48.md": {
	id: "twh/48.md";
  slug: "twh/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/49.md": {
	id: "twh/49.md";
  slug: "twh/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/5.md": {
	id: "twh/5.md";
  slug: "twh/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/50.md": {
	id: "twh/50.md";
  slug: "twh/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/51.md": {
	id: "twh/51.md";
  slug: "twh/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/52.md": {
	id: "twh/52.md";
  slug: "twh/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/53.md": {
	id: "twh/53.md";
  slug: "twh/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/6.md": {
	id: "twh/6.md";
  slug: "twh/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/7.md": {
	id: "twh/7.md";
  slug: "twh/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/8.md": {
	id: "twh/8.md";
  slug: "twh/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twh/9.md": {
	id: "twh/9.md";
  slug: "twh/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/1.md": {
	id: "twr/1.md";
  slug: "twr/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/10.md": {
	id: "twr/10.md";
  slug: "twr/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/11.md": {
	id: "twr/11.md";
  slug: "twr/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/12.md": {
	id: "twr/12.md";
  slug: "twr/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/13.md": {
	id: "twr/13.md";
  slug: "twr/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/14.md": {
	id: "twr/14.md";
  slug: "twr/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/15.md": {
	id: "twr/15.md";
  slug: "twr/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/16.md": {
	id: "twr/16.md";
  slug: "twr/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/17.md": {
	id: "twr/17.md";
  slug: "twr/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/18.md": {
	id: "twr/18.md";
  slug: "twr/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/19.md": {
	id: "twr/19.md";
  slug: "twr/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/2.md": {
	id: "twr/2.md";
  slug: "twr/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/20.md": {
	id: "twr/20.md";
  slug: "twr/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/21.md": {
	id: "twr/21.md";
  slug: "twr/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/22.md": {
	id: "twr/22.md";
  slug: "twr/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/23.md": {
	id: "twr/23.md";
  slug: "twr/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/24.md": {
	id: "twr/24.md";
  slug: "twr/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/25.md": {
	id: "twr/25.md";
  slug: "twr/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/26.md": {
	id: "twr/26.md";
  slug: "twr/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/27.md": {
	id: "twr/27.md";
  slug: "twr/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/28.md": {
	id: "twr/28.md";
  slug: "twr/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/29.md": {
	id: "twr/29.md";
  slug: "twr/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/3.md": {
	id: "twr/3.md";
  slug: "twr/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/30.md": {
	id: "twr/30.md";
  slug: "twr/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/31.md": {
	id: "twr/31.md";
  slug: "twr/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/32.md": {
	id: "twr/32.md";
  slug: "twr/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/33.md": {
	id: "twr/33.md";
  slug: "twr/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/34.md": {
	id: "twr/34.md";
  slug: "twr/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/35.md": {
	id: "twr/35.md";
  slug: "twr/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/36.md": {
	id: "twr/36.md";
  slug: "twr/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/37.md": {
	id: "twr/37.md";
  slug: "twr/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/38.md": {
	id: "twr/38.md";
  slug: "twr/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/39.md": {
	id: "twr/39.md";
  slug: "twr/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/4.md": {
	id: "twr/4.md";
  slug: "twr/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/40.md": {
	id: "twr/40.md";
  slug: "twr/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/41.md": {
	id: "twr/41.md";
  slug: "twr/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/42.md": {
	id: "twr/42.md";
  slug: "twr/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/43.md": {
	id: "twr/43.md";
  slug: "twr/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/44.md": {
	id: "twr/44.md";
  slug: "twr/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/45.md": {
	id: "twr/45.md";
  slug: "twr/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/46.md": {
	id: "twr/46.md";
  slug: "twr/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/47.md": {
	id: "twr/47.md";
  slug: "twr/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/48.md": {
	id: "twr/48.md";
  slug: "twr/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/49.md": {
	id: "twr/49.md";
  slug: "twr/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/5.md": {
	id: "twr/5.md";
  slug: "twr/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/50.md": {
	id: "twr/50.md";
  slug: "twr/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/51.md": {
	id: "twr/51.md";
  slug: "twr/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/52.md": {
	id: "twr/52.md";
  slug: "twr/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/53.md": {
	id: "twr/53.md";
  slug: "twr/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/6.md": {
	id: "twr/6.md";
  slug: "twr/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/7.md": {
	id: "twr/7.md";
  slug: "twr/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/8.md": {
	id: "twr/8.md";
  slug: "twr/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"twr/9.md": {
	id: "twr/9.md";
  slug: "twr/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/1.md": {
	id: "wao/1.md";
  slug: "wao/1";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/10.md": {
	id: "wao/10.md";
  slug: "wao/10";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/11.md": {
	id: "wao/11.md";
  slug: "wao/11";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/12.md": {
	id: "wao/12.md";
  slug: "wao/12";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/13.md": {
	id: "wao/13.md";
  slug: "wao/13";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/14.md": {
	id: "wao/14.md";
  slug: "wao/14";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/15.md": {
	id: "wao/15.md";
  slug: "wao/15";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/16.md": {
	id: "wao/16.md";
  slug: "wao/16";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/17.md": {
	id: "wao/17.md";
  slug: "wao/17";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/18.md": {
	id: "wao/18.md";
  slug: "wao/18";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/19.md": {
	id: "wao/19.md";
  slug: "wao/19";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/2.md": {
	id: "wao/2.md";
  slug: "wao/2";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/20.md": {
	id: "wao/20.md";
  slug: "wao/20";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/21.md": {
	id: "wao/21.md";
  slug: "wao/21";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/22.md": {
	id: "wao/22.md";
  slug: "wao/22";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/23.md": {
	id: "wao/23.md";
  slug: "wao/23";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/24.md": {
	id: "wao/24.md";
  slug: "wao/24";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/25.md": {
	id: "wao/25.md";
  slug: "wao/25";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/26.md": {
	id: "wao/26.md";
  slug: "wao/26";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/27.md": {
	id: "wao/27.md";
  slug: "wao/27";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/28.md": {
	id: "wao/28.md";
  slug: "wao/28";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/29.md": {
	id: "wao/29.md";
  slug: "wao/29";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/3.md": {
	id: "wao/3.md";
  slug: "wao/3";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/30.md": {
	id: "wao/30.md";
  slug: "wao/30";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/31.md": {
	id: "wao/31.md";
  slug: "wao/31";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/32.md": {
	id: "wao/32.md";
  slug: "wao/32";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/33.md": {
	id: "wao/33.md";
  slug: "wao/33";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/34.md": {
	id: "wao/34.md";
  slug: "wao/34";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/35.md": {
	id: "wao/35.md";
  slug: "wao/35";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/36.md": {
	id: "wao/36.md";
  slug: "wao/36";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/37.md": {
	id: "wao/37.md";
  slug: "wao/37";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/38.md": {
	id: "wao/38.md";
  slug: "wao/38";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/39.md": {
	id: "wao/39.md";
  slug: "wao/39";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/4.md": {
	id: "wao/4.md";
  slug: "wao/4";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/40.md": {
	id: "wao/40.md";
  slug: "wao/40";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/41.md": {
	id: "wao/41.md";
  slug: "wao/41";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/42.md": {
	id: "wao/42.md";
  slug: "wao/42";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/43.md": {
	id: "wao/43.md";
  slug: "wao/43";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/44.md": {
	id: "wao/44.md";
  slug: "wao/44";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/45.md": {
	id: "wao/45.md";
  slug: "wao/45";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/46.md": {
	id: "wao/46.md";
  slug: "wao/46";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/47.md": {
	id: "wao/47.md";
  slug: "wao/47";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/48.md": {
	id: "wao/48.md";
  slug: "wao/48";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/49.md": {
	id: "wao/49.md";
  slug: "wao/49";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/5.md": {
	id: "wao/5.md";
  slug: "wao/5";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/50.md": {
	id: "wao/50.md";
  slug: "wao/50";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/51.md": {
	id: "wao/51.md";
  slug: "wao/51";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/52.md": {
	id: "wao/52.md";
  slug: "wao/52";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/53.md": {
	id: "wao/53.md";
  slug: "wao/53";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/6.md": {
	id: "wao/6.md";
  slug: "wao/6";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/7.md": {
	id: "wao/7.md";
  slug: "wao/7";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/8.md": {
	id: "wao/8.md";
  slug: "wao/8";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
"wao/9.md": {
	id: "wao/9.md";
  slug: "wao/9";
  body: string;
  collection: "translations";
  data: InferEntrySchema<"translations">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
