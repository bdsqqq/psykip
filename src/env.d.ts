/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// lucia stuff, see: https://lucia-auth.com/getting-started/astro
declare namespace App {
	interface Locals {
		session: import("lucia").Session | null;
		user: import("lucia").User | null;
	}
}