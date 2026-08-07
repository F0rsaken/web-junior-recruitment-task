<script setup lang="ts">
/**
 * display specific movie data:
 * - title
 * - director's name
 * - producer's name
 * - release date
 * - list of characters with links to characters site
 */
</script>

<template>
	<div class="movie-tile">
		<div class="movie-tile__body">
			<p class="movie-tile__title">__Movie Title Here__</p>

			<div>
				<p>
					<span class="movie-tile__meta">Director</span>
					__Director Name__
				</p>

				<p>
					<span class="movie-tile__meta">Producer</span>
					__Producer Name__
				</p>

				<p>
					<span class="movie-tile__meta">Release Date</span>
					__Release Date__
				</p>
			</div>

			<div class="movie-tile__characters">
				<p class="movie-tile__characters-title">Characters</p>

				<div class="movie-tile__characters-list">
					<RouterLink :to="`/character/:id`">
						<p class="movie-tile__character">__Character Name__</p>
					</RouterLink>

					<RouterLink :to="`/character/:id`">
						<p class="movie-tile__character">__Character Name__</p>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
