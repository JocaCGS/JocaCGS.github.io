<script>
	import { fade } from 'svelte/transition';
	let visible = true;
	</script>
	<button on:click={() => visible = !visible}>
	Alternar visibilidade
	</button>
	{#if visible}
	<div transition:fade>
	Este texto aparece e desaparece com efeito de fade.
	</div>
	{/if}


	<!-- <script>
	$: resultado = 0	

	let multi = "*"

	let num1 = 0
	let num2 = 0

function opSoma(){
	resultado = Number(num1) + Number(num2)
}

function opMulti(){
	resultado = num1 * num2
}

function opSub(){
	resultado = num1 - num2

}

function opDiv(){
	resultado = num1 / num2

}


</script>


<input type="text" bind:value={num1}/>
<button >+</button>
<button on:click={}>{multi}</button>
<button on:click={opSub}>-</button>
<button on:click={opDiv}>/</button>
<input type="text" bind:value={num2}/>
<h1>{resultado}</h1>



	 -->