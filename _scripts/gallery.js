{
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryImage = document.getElementById('gallery-image');
    const captionElement = document.querySelector('.caption');

    const photos = [
    {
        src: '../images/gallery1.png',
        caption: 'Gallery 1'
    },
    {
        src: '../images/gallery2.png',
        caption: 'Gallery 2'
    },
    {
        src: '../images/gallery3.png',
        caption: 'Gallery 3'
    },
    {
        src: '../images/gallery4.png',
        caption: 'Gallery 4'
    },
    {
        src: '../images/gallery5.png',
        caption: 'Gallery 5'
    },
    {
        src: '../images/gallery6.png',
        caption: 'Gallery 6'
    },
    {
        src: '../images/gallery7.png',
        caption: 'Gallery 7'
    },
    {
        src: '../images/gallery8.png',
        caption: 'Gallery 8'
    },
    {
        src: '../images/gallery9.png',
        caption: 'Gallery 9'
    },
    {
        src: '../images/gallery10.png',
        caption: 'Gallery 10'
    },
    {
        src: '../images/gallery11.png',
        caption: 'Gallery 11'
    },
    {
        src: '../images/gallery12.png',
        caption: 'Gallery 12'
    },
    {
        src: '../images/gallery13.png',
        caption: 'Gallery 13'
    },
    {
        src: '../images/gallery14.png',
        caption: 'Gallery 14'
    },
    {
        src: '../images/gallery15.png',
        caption: 'Gallery 15'
    },
    {
        src: '../images/gallery16.png',
        caption: 'Gallery 16'
    },
    {
        src: '../images/gallery17.png',
        caption: 'Gallery 17'
    }
    ];
    let currentIndex = 0;

    function showCurrentPhoto() {
    const currentPhoto = photos[currentIndex];
    galleryImage.src = currentPhoto.src;
    captionElement.textContent = currentPhoto.caption;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) {
            currentIndex = photos.length - 1;
        } else {
            currentIndex--;
        }
        showCurrentPhoto();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex === photos.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        showCurrentPhoto();
    });
    showCurrentPhoto();

    // var galleryImage = document.getElementById('gallery-image');
    // var caption = document.getElementById('caption');
    // var prevButton = document.getElementById('prev-button');
    // var nextButton = document.getElementById('next-button');

    // var images = ['images/gallery1.png', 'images/gallery2.png', 'images/gallery3.png', 'images/gallery14.png', 'images/gallery5.png'];
    // var captions = ['Gallery 1', 'Gallery 2', 'Gallery 3', 'Gallery 4', 'Gallery 5'];
    // var currentImageIndex = 0;

    // function updateGalleryImage() {
    // galleryImage.src = images[currentImageIndex];
    // caption.textContent = captions[currentImageIndex];
    // }

    // for (var i = startIndex; i <= endIndex; i++) {
    //     var previewImage = document.createElement('img');
    //     previewImage.src = images[i];
    //     previewImage.classList.add('preview-image');
    //     previewImage.addEventListener('click', function(index) {
    //     return function() {
    //         currentImageIndex = index;
    //         updateGalleryImage();
    //     };
    //     }(i));
    //     previewBar.appendChild(previewImage);
    // }


    // prevButton.addEventListener('click', function() {
    // currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // updateGalleryImage();
    // });

    // nextButton.addEventListener('click', function() {
    // currentImageIndex = (currentImageIndex + 1) % images.length;
    // updateGalleryImage();
    // });
    
}