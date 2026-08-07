import MovieTile from "@/components/MovieTile";

/**
 * display list of all Star Wars movies
 */
function HomeView() {
	return (
		<div className="movie-grid">
			<MovieTile />

			<MovieTile />
		</div>
	);
}

export default HomeView;
