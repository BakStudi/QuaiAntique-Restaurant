import Route from "./Route.js";

// Définition des routes
export const allRoutes = [
	new Route("/", "Accueil", "/pages/home.html", []),
	new Route("/menu", "La carte", "/pages/menu.html", []),
	new Route("/galerie", "Galerie", "/pages/galerie.html", [], "/js/galerie.js"),
	new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
	new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
	new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"], "/js/account.js"),
	new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"], "/js/editPassword.js"),
	new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"], "/js/allResa.js"),
	new Route("/book", "Réserver", "/pages/reservations/book.html", ["client"], "/js/book.js"),
];

// Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Quai Antique";