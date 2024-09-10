function addMovie() {
    const input = document.getElementById('movieInput');
    const movieName = input.value.trim();
    
    const movieList = document.getElementById('movieList');
    const li = document.createElement('li');

    const movieText = document.createElement('span');
    movieText.textContent = movieName;
    li.appendChild(movieText);

    const viewedBtn = document.createElement('button');
    viewedBtn.textContent = 'Vista';
    viewedBtn.className = 'view-btn';
    viewedBtn.onclick = function () {
        if (movieText.classList.contains('viewed')) {
            movieText.classList.remove('viewed');
            viewedBtn.textContent = 'Vista';
        } else {
            movieText.classList.add('viewed');
            viewedBtn.textContent = 'Para ver';
        }
    };
    li.appendChild(viewedBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Eliminar';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function () {
        movieList.removeChild(li);
    };
    li.appendChild(removeBtn);

    movieList.appendChild(li);
    input.value = ''; // Limpiar el campo de entrada
}