export async function fetchMovies() {
  try {
    const response = await fetch('https://github.com/r-spacex/spacex-api'); 
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return await response.json();
  } catch (error) {
    console.error('Error in fetchMovies:', error);
    throw error;
  }
}
