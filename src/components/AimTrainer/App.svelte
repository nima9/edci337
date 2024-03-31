<!-- App.svelte -->
<script>
	import { onMount } from "svelte";

	let isDarkMode = false;

	onMount(() => {
		isDarkMode = document.documentElement.classList.contains("dark");
	});

	let score = 0;
	let timer = 10;
	let timerId;
	let dotPosition = {
		x: 0,
		y: 0,
	};

	const startGame = () => {
		score = 0;
		timer = 10;
		resetDotPosition();
		timerId = setInterval(updateTimer, 1000);
	};

	const updateTimer = () => {
		timer--;
		if (timer === 0) {
			clearInterval(timerId);
		}
	};

	const resetDotPosition = () => {
		dotPosition.x = Math.random() * (window.innerWidth - 50);
		dotPosition.y = Math.random() * (window.innerHeight - 100);
	};

	const handleClick = () => {
		score++;
		resetDotPosition();
	};

	onMount(() => {
		startGame();
	});
</script>

<div>
	<h1>Aim Trainer (Click the dots!)</h1>
	<div>
		<p>Score: <span class="text-xl font-bold text-yellow-500"> {score}</span></p>
	</div>
	<p>Time left: {timer} seconds</p>
	{#if timer > 0}
		<button
			class="dot border-green-600"
			style="left: {dotPosition.x}px; top: {dotPosition.y}px; {isDarkMode
				? 'background-color: yellowgreen;'
				: 'background-color: black;'}"
			on:click={handleClick}
		></button>
	{:else}
		<p>Game over, your score is {score}</p>
		<button class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800" on:click={startGame}
			>Restart</button
		>
	{/if}
</div>

<style>
	.dot {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;
	}
</style>
