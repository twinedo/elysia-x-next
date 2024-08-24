import { treaty } from '@elysiajs/eden';
import Elysia from 'elysia';
import { NextResponse } from 'next/server';

const app = new Elysia({ prefix: '/api' }).get('/', () =>
	NextResponse.json({ status: 200, message: 'Hello from Elysia', data: null })
);

export type App = typeof app;
export const server = treaty<App>('localhost:3000');

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const DELETE = app.handle;
export const PATCH = app.handle;
export const OPTIONS = app.handle;
