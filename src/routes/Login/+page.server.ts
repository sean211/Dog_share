import { db } from '$lib/server/db';
import { error, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt'


export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const user_id = form.get('id')
    const password = form.get('password') as string
    
    const user = await db.query(
      'SELECT * FROM users WHERE email=$1',
        [user_id]
    );

    if(!user.rows[0]){
      throw error(400, "user not found")
    }

    const check = await bcrypt.compare(password, user.rows[0].password)
    if(!check){
      throw error(400, "password wrong")
    }

    const sessionid = crypto.randomUUID()
    const expires = new Date(Date.now() + 1000*60*60*24)

    await db.query(
      "INSERT INTO sessions (id, user_id, expire) VALUES ($1,$2,$3)", 
      [sessionid, user.rows[0].id, expires]
    );

    cookies.set('session_id', sessionid, {path: '/'})
    
    throw redirect(301, '/')
  }
};