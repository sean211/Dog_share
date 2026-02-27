import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import bcrypt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    if (!email || !password) {
      return error(400, '모든 값을 입력하세요');
    }

    const existing = await db.query(
      'SELECT id FROM users WHERE email=$1',
      [email]
    );
    if (existing.rows.length) return error(400, '이미 존재하는 이메일입니다.');

    const hashed = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO users (email, password) VALUES ($1,$2)',
      [email, hashed] 
    );

    throw redirect(302, '/Login');
  }
};