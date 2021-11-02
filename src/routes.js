import React from "react";
const Welcome = React.lazy(() => import("./components/Welcome"));
const HomePage = React.lazy(() => import("./components/HomePage"));
const MovieResults = React.lazy(() => import("./components/MovieResults"));
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
    { path: "*", exact: true, name: "Page Not Found", component: Welcome },
];

export default routes;