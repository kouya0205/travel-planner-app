// src/pages/api/auth/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: 'User created', user });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
