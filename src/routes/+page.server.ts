import { db } from '$lib/server/db.js'
import { redirect } from '@sveltejs/kit'

async function GetUserLocation(user_id:any){
    const location = await db.query(
        'SELECT address_lat, address_lng FROM users WHERE id=$1',
        [user_id]
    );
    
    return location.rows[0]
}

export const load = async ({ locals }) => {
    if(!locals.user){
        throw redirect(301, '/Login')
    }
    const location = await GetUserLocation(locals.user)
    return {
        location: location
    }
}// 세션 확인



export const actions = {
    default: async ({ cookies,locals }) => {
        cookies.delete('session_id', {path:'/'}) //쿠키 삭제
        
        await db.query("DELETE FROM sessions WHERE user_id=$1",[locals.user])
        throw redirect(301, '/Login')
    }   
} // 세션 삭제