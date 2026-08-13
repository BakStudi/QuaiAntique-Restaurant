const bookingSlot = document.getElementById("allBookings");

// Objectif final : Récupérer les informations des réservations sur la bdd en contactant l'API

let inputDate = "25/02/2026";
let inputHeure = "12:45";
let inputNbrDePers = 6
let inputAllergie = "Crevette";


let myBooking = getBook(inputDate, inputHeure, inputNbrDePers, inputAllergie);


bookingSlot.innerHTML = myBooking;


function getBook(inputDate, inputHeure, inputNbrDePers, inputAllergie) {
    inputDate = sanitizeHtml(inputDate);
    inputHeure = sanitizeHtml(inputHeure);
    inputNbrDePers = sanitizeHtml(inputNbrDePers);
    inputAllergie = sanitizeHtml(inputAllergie);

    return `<div class="bookLine pt-4">
    <a href="#" class="bookLink">
        <span>${inputDate}</span> | 
        <span>${inputHeure}</span> | 
        <span>${inputNbrDePers} personnes</span> | 
        <span>${inputAllergie}</span>
    </a>
    <div class="image-action-buttons">
        <!-- **** Afficher la réservation à modifier **** -->
        <a class="btn btn-outline-primary btn-sm hideUnderMd" href="#" role="button"><i class="bi bi-pencil-square"></i> Modifier</a>
        <!-- ou -->
        <button type="button" class="btn btn-outline-primary btn-sm hideOverMd" data-bs-toggle="modal" data-bs-target="#EditBookingModal"><i class="bi bi-pencil-square"></i></button>

        <!-- **** Modal de confirmation de suppression de la réservation **** -->
        <a class="btn btn-outline-danger btn-sm hideUnderMd" href="#" role="button" data-bs-toggle="modal" data-bs-target="#CancelBookingModal"><i class="bi bi-trash"></i> Supprimer</a>
        <!-- ou -->
        <button type="button" class="btn btn-outline-danger btn-sm hideOverMd" data-bs-toggle="modal" data-bs-target="#CancelBookingModal"><i class="bi bi-trash"></i></button>
    </div>
</div>`;
}