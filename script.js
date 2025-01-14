document.addEventListener('DOMContentLoaded', function () {
    const movieItems = document.querySelectorAll('.movie-item');

    movieItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const movieId = item.getAttribute('data-movie-id');
            window.location.href = `movie-details.html?id=${movieId}`;
        });
    });
});
