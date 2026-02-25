import Route from "./Route.js";

// Définition des routes
export const allRoutes = [
	new Route("/", "Accueil", "/pages/home.html"),
	new Route("/galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js"),
	new Route("/signup", "Inscription", "/pages/auth/signup.html"),
	new Route("/signin", "Connexion", "/pages/auth/signin.html"),
	new Route("/account", "Mon compte", "/pages/auth/account.html"),
	new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
	new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
	new Route("/book", "Réserver", "/pages/reservations/book.html")
];

// Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Quai Antique";