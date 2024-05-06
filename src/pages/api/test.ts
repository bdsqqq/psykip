import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({params, request}) => {
    return new Response(
        JSON.stringify(request),
        {
            status: 200,
            headers: {
                "Content-type": "application/json"
            }
        }
    )   
}