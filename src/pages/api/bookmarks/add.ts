import type { APIRoute } from 'astro';
import { db } from '../../../db';
import type { Bookmark } from '../../../components/SelectionPopover';
import { newId } from '../../../lib/id';
import { bookmarksSchema } from '../../../drizzle/schema';

const testBookmark: Bookmark = {
    id: newId("bookmark"),
    chapterStart: "1",
    chapterEnd: "2",
    text: "hej do",
    comment: "",
    translationCode: "sw",
    lastUpdated: new Date().getTime().toString(),
    active: "true",
    userId: "69420"
  }

export const GET: APIRoute = async ({params, request}) => {
    const bookmark = testBookmark;
    const result = await db.insert(bookmarksSchema).values(bookmark)

    return new Response(
        JSON.stringify(bookmark),
        {
            status: 200,
            headers: {
                "Content-type": "application/json"
            }
        }
    )   
}