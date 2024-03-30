<script>
	import { vocab } from "./vocabData.js";

	import Flashcard from "./Flashcard.svelte";

	let flashcardIndex = 0;
	$: clue = vocab[flashcardIndex].image;
	$: eng = vocab[flashcardIndex].eng;
	$: romanji = vocab[flashcardIndex].romanji;
	$: actualUse = vocab[flashcardIndex].actualUse;
	$: furigana = vocab[flashcardIndex].furigana;

	let showCardBack = false;
	const toggleShowBack = () => (showCardBack = !showCardBack);

	const prevCard = () => {
		showCardBack = false;
		if (flashcardIndex === 0) {
			flashcardIndex = vocab.length - 1;
		} else {
			flashcardIndex -= 1;
		}
	};

	const nextCard = () => {
		showCardBack = false;
		if (flashcardIndex === vocab.length - 1) {
			flashcardIndex = 0;
		} else {
			flashcardIndex += 1;
		}
	};
</script>

<main>
	<!-- FLASHCARD -->
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<Flashcard {clue} {eng} {romanji} {actualUse} {furigana} {showCardBack} />
		</div>
	</div>

	<!-- BUTTONS -->
	<div>
		<button
			class="bg-amber-600 px-2 py-2 text-white cursor-pointer active:bg-yellow-900"
			on:click={prevCard}>&#8592;</button
		>
		<button
			class="bg-amber-600 px-2 py-2 text-white cursor-pointer active:bg-yellow-900"
			on:click={toggleShowBack}
		>
			{showCardBack ? "Hide Answer" : "Show Answer"}
		</button>

		<button
			class="bg-amber-600 px-2 py-2 text-white cursor-pointer active:bg-yellow-900"
			on:click={nextCard}>&#8594;</button
		>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}

	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
		/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
</style>
