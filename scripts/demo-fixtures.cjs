// Explicit local provider fixture. Does not use TMDB_API_KEY or call TMDB.
const { join } = require('node:path');
const { buildServer } = require('../server/index.cjs');
const movies = [
  { id: 1001, title: 'Moonlight Harbor', release_date: '2026-01-01', poster_path: null },
  { id: 1002, title: 'The Last Orbit', release_date: '2025-01-01', poster_path: null },
  { id: 1003, title: 'City of Paper', release_date: '2024-01-01', poster_path: null },
];
const server = buildServer({
  database: join(__dirname, '../.data/fixture-demo.sqlite'),
  token: 'local-fixture-placeholder',
  fetchImpl: async (url) => {
    const u = new URL(url);
    let data;
    if (u.pathname.endsWith('/videos')) data = { results: [] };
    else if (/\/movie\/\d+$/.test(u.pathname)) data = { ...movies.find(m => m.id === Number(u.pathname.split('/').pop())), overview: 'Fictional local movie fixture; no provider request.', genres: [{ name: 'Demo' }], runtime: 108, vote_average: 8 };
    else data = { results: u.pathname.includes('/search/') ? movies.filter(m => m.title.toLowerCase().includes((u.searchParams.get('query') || '').toLowerCase())) : movies };
    return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
  },
});
server.listen(4000, '127.0.0.1', () => console.log('LOCAL MOVIE FIXTURES at http://localhost:4000 — fictional titles, real accounts/favorites, no TMDB calls. Poster placeholders may depend on external image hosting.'));
