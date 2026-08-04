const galerieImage = document.getElementById("allImages");

// Récupérer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')">';
let imgSource = "../images/wow_pho-food-712665_1920.jpg";

let monImage = getImage(titre, imgSource);



galerieImage.innerHTML = monImage;



function getImage(titre, urlImage) {
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" alt="" class="rounded w-100">
                    <p class="titre-image">${titre}</p>
                    <div class="image-action-buttons" data-show="admin">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}