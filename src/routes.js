import React from "react";
const MovieResults = React.lazy(() => import("./components/MovieResults"));
const HomePage = React.lazy(() => import("./components/HomePage"));
const Welcome = React.lazy(() => import("./components/Welcome"));
const Movie = React.lazy(() => import("./components/Movie"));

const routes = [
	{
		path: "/",
		exact: true,
		name: "Welcome",
		component: Welcome,
	},
	{
		path: "/homepage",
		exact: true,
		name: "HomePage",
		component: HomePage,
	},

	{
		path: "/movies",
		exact: true,
		name: "Movies",
		component: MovieResults,
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