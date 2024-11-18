import { fetchMovies } from './modules/api.js';
import { initSlider } from './modules/slider.js';
import { validateForm } from './modules/formValidation.js';
import { createMovieItem } from './modules/movie-item.js'; 




async function loadMovies() {
  const movies = await fetchMovies();
  console.log(movies);
}
loadMovies();

initSlider('slider');

validateForm(validaeForm); 


    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const movieList = document.getElementById('movieList');
    const genreFilter = document.getElementById('genreFilter');
    const searchInput = document.getElementById('searchInput');
    const accordion = document.getElementById('accordion');
    const contactForm = document.getElementById('contactForm');
    const cookieNotification = document.getElementById('cookieNotification');
    const acceptCookies = document.getElementById('acceptCookies');
    const scrollTop = document.getElementById('scrollTop');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

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
    

    const movies = [
        {
            title: "Movie Title 1",
            genre: "Action",
            poster: "https://via.placeholder.com/300x400/FF5733/fff?text=Movie+1",
        },
        {
            title: "Another Movie",
            genre: "Comedy",
            poster: "https://via.placeholder.com/300x400/33C1FF/fff?text=Movie+2",
        },
        
    ];

    const apiKey = 'YOUR_API_KEY';


    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        
        burger.children[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
        burger.children[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        burger.children[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    function displayMovies(moviesToDisplay) {
        movieList.innerHTML = ''; 

        moviesToDisplay.forEach(movie => {
            const movieItem = createMovieItem(movie);
            movieList.appendChild(movieItem);
        });
    }

    
    function filterAndSearchMovies() {
        const selectedGenre = genreFilter.value;
        const searchTerm = searchInput.value.toLowerCase();

        const filteredMovies = movies.filter(movie => {
            const genreMatch = selectedGenre === 'all' || movie.genre.toLowerCase() === selectedGenre;
            const searchMatch = movie.title.toLowerCase().includes(searchTerm);
            return genreMatch && searchMatch;
        });

        displayMovies(filteredMovies);
    }

    genreFilter.addEventListener('change', filterAndSearchMovies);
    searchInput.addEventListener('input', filterAndSearchMovies);

   
    accordion.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordion-title')) {
            const content = e.target.nextElementSibling;
            content.classList.toggle('open');
        }
    });

   
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        console.log('Form submitted!');
    });

    
    acceptCookies.addEventListener('click', () => {
        cookieNotification.style.display = 'none';
        
    });

    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTop.classList.add('show');
        } else {
            scrollTop.classList.remove('show');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior:   
    'smooth' });
    });

    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type',   
    type);
        togglePassword.textContent = type === 'password' ? 'Show'   
    : 'Hide';
    });

    
    displayMovies(movies);

    function displayMovies(moviesToDisplay) {
        movieList.innerHTML = ''; 
      
        moviesToDisplay.forEach(movie => {
          const movieItem = createMovieItem(movie);
          movieList.appendChild(movieItem);
        });
      }
      
      
      function searchMovies() {
        const searchTerm = searchInput.value.toLowerCase();
      
        const filteredMovies = movies.filter(movie => {
          return movie.title.toLowerCase().includes(searchTerm);
        });
      
        displayMovies(filteredMovies); 
      }
      
    
      searchInput.addEventListener('input', searchMovies); 
      
      
      displayMovies(movies); 
      

