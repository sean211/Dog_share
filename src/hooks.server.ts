import { db } from "$lib/server/db";

export async function handle({ event, resolve }){
    const sessionId = event.cookies.get('session_id');
    if(sessionId){
        const result = await db.query(
            'SELECT user_id FROM sessions WHERE id = $1',[sessionId]
        )

        if(result.rows[0]){
            event.locals.user = result.rows[0].user_id // 왜 오류?
        }
    }
    return resolve(event)
}