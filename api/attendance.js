import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const data = await kv.get('attendance_records');
    return res.status(200).json(data || {});
  }
  if (req.method === 'POST') {
    await kv.set('attendance_records', req.body);
    return res.status(200).json({ success: true });
  }
}