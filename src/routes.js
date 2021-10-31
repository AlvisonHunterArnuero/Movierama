import React from "react";
const CardsMovies = React.lazy(() => import("./components/CardsMovies"));
const HomePage = React.lazy(() => import("./components/HomePage"));
const Movie = React.lazy(() => import("./components/Movie"));

const routes = [
	{
		path: "/",
		exact: true,
		name: "card movies",
		component: HomePage,
	},

	{
		path: "/movies",
		exact: true,
		name: "Movies",
		component: CardsMovies,
	},
	{
		path: "/movies/:imdbID",
		exact: true,
		name: "Movie Details",
		component: Movie,
	},
    { path: "*", exact: true, name: "Page Not Found", component: HomePage },
];

export default routes;