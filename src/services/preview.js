// Fictional sample data for the explicitly labeled GitHub Pages preview.
export const previewMode = import.meta.env?.MODE === 'pages' || globalThis.location?.hostname.endsWith('.github.io');
const movies = [
  { id: 1001, title: 'Moonlight Harbor', release_date: '2026-01-01', vote_average: 7.8, overview: 'A lighthouse keeper follows a mysterious signal across a quiet harbor.' },
  { id: 1002, title: 'The Last Orbit', release_date: '2025-01-01', vote_average: 8.4, overview: 'A small crew must find a way home before their final orbit ends.' },
  { id: 1003, title: 'City of Paper', release_date: '2024-01-01', vote_average: 8.1, overview: 'An illustrator discovers stories hidden in the streets of a paper city.' },
].map(movie => ({ ...movie, poster_path: null, genres: [{ name: 'Fictional preview' }], runtime: 108 }));
export function previewRequest(path) {
  const url = new URL(path || '?', 'https://preview.invalid');
  if (url.pathname === '/search') {
    const query = (url.searchParams.get('query') || '').toLowerCase();
    return { results: movies.filter(movie => movie.title.toLowerCase().includes(query)) };
  }
  if (url.pathname === '/') {
    const rows = [...movies];
    const sort = url.searchParams.get('sort');
    if (sort === 'newest') rows.sort((a, b) => b.release_date.localeCompare(a.release_date));
    if (sort === 'oldest') rows.sort((a, b) => a.release_date.localeCompare(b.release_date));
    if (sort === 'relevant') rows.sort((a, b) => b.vote_average - a.vote_average);
    return { results: Number(url.searchParams.get('page') || 1) === 1 ? rows : [] };
  }
  const match = /^\/(\d+)(\/videos)?$/.exec(url.pathname);
  const movie = match && movies.find(item => item.id === Number(match[1]));
  if (!movie) throw new Error('This movie is not in the sample catalog.');
  return match[2] ? { results: [] } : movie;
}
