CREATE TABLE `bookmarks` (
	`id` text PRIMARY KEY NOT NULL,
	`chapterStart` numeric NOT NULL,
	`chapterEnd` numeric NOT NULL,
	`text` text NOT NULL,
	`comment` text NOT NULL,
	`translatiionCode` text,
	`lastUpdated` numeric NOT NULL,
	`active` text NOT NULL,
	`userId` text NOT NULL
);
