import { fetchMovies } from './modules/api.js';
import { initSlider } from './modules/slider.js';
import { validateForm } from './modules/formValidation.js';
import { createMovieItem } from './modules/movie-item.js';

const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const movieList = document.getElementById('movieList');
const genreFilter = document.getElementById('genreFilter');
const searchInput = document.getElementById('searchInput');
const accordion = document.getElementById('accordion');
const contactForm = document.getElementById('contactForm');
const cookieNotification = document.getElementById('cookieNotification');
const acceptCookiesButton = document.getElementById('acceptCookies');
const scrollTop = document.getElementById('scrollTop');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const burgerMenu = document.querySelector('.burger-menu');
const burgerDropdown = document.querySelector('.burger-dropdown');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
  burgerDropdown.classList.toggle('active');
});


async function loadMovies() {
    try {
      const movies = await fetchMovies();
      displayMovies(movies);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  }

loadMovies();

initSlider('slider');

validateForm();

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

function displayMovies(moviesToDisplay) {
  movieList.innerHTML = '';
  moviesToDisplay.forEach((movie) => {
    const movieItem = createMovieItem(movie);
    movieList.appendChild(movieItem);
  });
}

const movies = [
  {
    title: 'Action',
    genre: 'Action',
    poster: 'https://img.freepik.com/free-photo/3d-view-kids-watching-movie-cinema_23-2151020694.jpg?text=Movie+1',
  },
  {
    title: 'Comedy',
    genre: 'Comedy',
    poster: 'https://img.freepik.com/free-photo/3d-view-kids-watching-movie-cinema_23-2151020694.jpg?text=Movie+2',
  },
  {
    title: 'Drama',
    genre: 'Drama',
    poster: 'https://img.freepik.com/free-photo/3d-view-kids-watching-movie-cinema_23-2151020694.jpg?text=Movie+3',
  },
];

function filterAndSearchMovies() {
  const selectedGenre = genreFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter((movie) => {
    const genreMatch = selectedGenre === 'all' || movie.genre.toLowerCase() === selectedGenre;
    const searchMatch = movie.title.toLowerCase().includes(searchTerm);
    return genreMatch && searchMatch;
  });

  displayMovies(filteredMovies);
}

genreFilter.addEventListener('change', filterAndSearchMovies);
searchInput.addEventListener('input', filterAndSearchMovies);


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted!');
});

acceptCookiesButton.addEventListener('click', () => {
  cookieNotification.style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
});

function showCookieNotification() {
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieNotification.style.display = 'block';
  }
}

showCookieNotification();

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

displayMovies(movies);