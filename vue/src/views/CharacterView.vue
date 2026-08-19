<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { fetchCharacter } from "../api";

/**
 * display specific characters data:
 * - name
 * - height
 * - weight
 * - birth year
 * - gender
 * - name of a homeworld
 */

const route = useRoute();
const id = computed(() => +route.params.id);
const character = ref<Character | null>(null);

onMounted(() => {
	const res = fetchCharacter(id.value);

	character.value = res;
});
</script>

<template>
	<div class="character">
		<div className="character__item">
			<p className="character__label">Name</p>
			<p className="character__value">{{ character?.name }}</p>
		</div>

		<div className="character__item">
			<p className="character__label">Height</p>
			<p className="character__value">{{ character?.height }}</p>
		</div>

		<div className="character__item">
			<p className="character__label">Weight</p>
			<p className="character__value">{{ character?.mass }}</p>
		</div>

		<div className="character__item">
			<p className="character__label">Birth Year</p>
			<p className="character__value">{{ character?.birth_year }}</p>
		</div>

		<div className="character__item">
			<p className="character__label">Gender</p>
			<p className="character__value">{{ character?.gender }}</p>
		</div>

		<div className="character__item">
			<p className="character__label">Homeworld</p>
			<p className="character__value">{{ character?.homeworld }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
// ...
</style>
