export function createMovieItem(movie) {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');

    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = `${movie.title} poster`;

    const title = document.createElement('h3');
    title.textContent = movie.title;

    movieItem.appendChild(img);
    movieItem.appendChild(title);

    return movieItem;
}