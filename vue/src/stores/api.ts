import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ofetch } from "ofetch";

import type { Character, Movie } from "../../../shared/types";

export const useApiStore = defineStore("api", () => {
	async function fetchMovies() {
		try {
			const movies = await ofetch<Movie[]>(
				"https://swapi.info/api/films",
			);

			return movies;
		} catch (error) {
			console.error("There was a problem while fetching movies", error);

			return [];
		}
	}

	async function fetchCharacter(id: number) {
		try {
			const character = await ofetch<Character>(
				`https://swapi.info/api/people/${id}`,
			);

			return character;
		} catch (error) {
			console.error(
				"There was a problem while fetching character",
				error,
			);

			return null;
		}
	}

	return { fetchMovies, fetchCharacter };
});
