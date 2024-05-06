import type { APIRoute } from 'astro';
import { db } from '../../../db';
import type { Bookmark } from '../../../components/SelectionPopover';
import { bookmarksSchema } from '../../../drizzle/schema';

export const GET: APIRoute = async ({params, request}) => {
    const result = await db.select().from(bookmarksSchema)

    return new Response(
        JSON.stringify(result),
        {
            status: 200,
            headers: {
                "Content-type": "application/json"
            }
        }
    )   
}