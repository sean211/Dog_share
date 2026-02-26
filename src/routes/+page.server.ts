import { db } from '$lib/server/db.js'
import { redirect } from '@sveltejs/kit'

export const load = ({ locals }) => {
    if(!locals.user){
        throw redirect(301, '/Login')
    }
}// 세션 확인

export const actions = {
    default: async ({ cookies,locals }) => {
        cookies.delete('session_id', {path:'/'}) //쿠키 삭제
        
        await db.query("DELETE FROM sessions WHERE user_id=$1",[locals.user])
        throw redirect(301, '/Login')
    }   
} // 세션 삭제