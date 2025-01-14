document.addEventListener("DOMContentLoaded", () => {
    const movieGrid = document.getElementById("movie-grid");
    const movieModal = document.getElementById("movie-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalPoster = document.getElementById("modal-poster");
    const modalGenre = document.getElementById("modal-genre");
    const modalYear = document.getElementById("modal-year");
    const modalDescription = document.getElementById("modal-description");
    const modalDownload = document.getElementById("modal-download");

    const closeBtn = document.querySelector(".close-modal");

    fetch("movies.json")
        .then(response => response.json())
        .then(movies => {
            movies.forEach(movie => {
                const movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");

                movieCard.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <button class="download-btn" onclick="showDetails(${JSON.stringify(movie).replace(/"/g, '&quot;')})">Details</button>
                `;

                movieGrid.appendChild(movieCard);
            });
        });

    closeBtn.addEventListener("click", () => {
        movieModal.classList.add("hidden");
    });

    window.showDetails = (movie) => {
        modalTitle.textContent = movie.title;
        modalPoster.src = movie.poster;
        modalGenre.textContent = "Genre: " + movie.genre;
        modalYear.textContent = "Year: " + movie.year;
        modalDescription.textContent = "Description: " + movie.description;
        modalDownload.href = movie.download;
        movieModal.classList.remove("hidden");
    };
});
