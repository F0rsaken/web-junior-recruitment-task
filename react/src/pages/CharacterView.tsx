import { useEffect, useState } from "react";
import type { Character } from "../../../shared/types";
import { fetchCharacter } from "@/api/api";
import { useParams } from "react-router-dom";

/**
 * display specific characters data:
 * - name
 * - height
 * - weight
 * - birth year
 * - gender
 * - name of a homeworld
 */
function CharacterView() {
	const params = useParams();
	const [character, setCharacter] = useState<Character | null>(null);

	useEffect(() => {
		fetchCharacter(+params.id).then(_character => {
			setCharacter(_character);
		})
	}, [])

	return (
		<div className="character">
			<div className="character__item">
				<p className="character__label">Name</p>
				<p className="character__value">{character?.name}</p>
			</div>

			<div className="character__item">
				<p className="character__label">Height</p>
				<p className="character__value">{character?.height}</p>
			</div>

			<div className="character__item">
				<p className="character__label">Weight</p>
				<p className="character__value">{character?.mass}</p>
			</div>

			<div className="character__item">
				<p className="character__label">Birth Year</p>
				<p className="character__value">{character?.birth_year}</p>
			</div>

			<div className="character__item">
				<p className="character__label">Gender</p>
				<p className="character__value">{character?.gender}</p>
			</div>

			<div className="character__item">
				<p className="character__label">Homeworld</p>
				<p className="character__value">{character?.homeworld}</p>
			</div>
		</div>
	);
}

export default CharacterView;
