import type { APIRoute } from 'astro';
import indexData from '../../../data/symbols/index.json';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    return new Response(JSON.stringify({
      success: true,
      data: indexData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};