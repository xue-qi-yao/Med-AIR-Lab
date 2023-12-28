
{
    document.addEventListener('DOMContentLoaded', () => {
        const papersContainer = document.querySelector('.papers-container');
        const showSelected = document.querySelector('.show-selected');
        const showByDate = document.querySelector('.show-by-date');
        const bookChapters = document.querySelector('.book-chapters');

        showSelected.addEventListener('click', () => {
            papersContainer.classList.remove('papers-by-date');
            papersContainer.classList.remove('book-chapters');
            papersContainer.classList.add('papers-selected');
        });

        showByDate.addEventListener('click', () => {
            papersContainer.classList.remove('papers-selected');
            papersContainer.classList.remove('book-chapters');
            papersContainer.classList.add('papers-by-date');
        });

        bookChapters.addEventListener('click', () => {
            papersContainer.classList.remove('papers-selected');
            papersContainer.classList.remove('papers-by-date');
            papersContainer.classList.add('book-chapters');
        });

        papersContainer.classList.add('papers-selected');
    });

    function filterElements(tag) {
        var elements = document.getElementsByClassName("publication");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (tag === "all" || element.classList.contains(tag)) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        }
    }
}