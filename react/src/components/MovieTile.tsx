import { Link } from "react-router-dom";

/**
 * display specific movie data:
 * - title
 * - director's name
 * - producer's name
 * - release date
 * - list of characters with links to characters site
 *
 * Implement function that returns character id from character url
 */
function MovieTile() {
	// TODO implement
	const extractCharacterId = (url: string) => {
		return 0
	};

	return (
		<div className="movie-tile">
			<div className="movie-tile__body">
				<p className="movie-tile__title">__Movie Title Here__</p>

				<div>
					<p>
						<span className="movie-tile__meta">Director</span>
						__Director Name__
					</p>

					<p>
						<span className="movie-tile__meta">Producer</span>
						__Producer Name__
					</p>

					<p>
						<span className="movie-tile__meta">Release Date</span>
						__Release Date__
					</p>
				</div>

				<div className="movie-tile__characters">
					<p className="movie-tile__characters-title">Characters</p>

					<div className="movie-tile__characters-list">
						<Link to="/character/:id">
							<p className="movie-tile__character">__Character Name__</p>
						</Link>

						<Link to="/character/:id">
							<p className="movie-tile__character">__Character Name__</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieTile;
