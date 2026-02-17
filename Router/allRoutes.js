import Route from "./Route.js";

// Définition des routes
export const allRoutes = [
	new Route("/", "Accueil", "/pages/home.html")
	// new Route("/Galerie", "Galerie", "/pages/galerie.html", "/js/galerie.js")
];

// Le titre s'affiche comme ceci : Route.titre - websiteName
export const websiteName = "Quai Antique";