<script>
  export let onInput;
  export let onClear;
  export let onEqual;

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "=", "0", "C", "+",
  ];
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  button {
    font-size: 1.2em;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #0a0;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #666;
  }

  button:active {
    background-color: #888;
  }

</style>

<div class="grid">
  {#each buttons as btn}
    {#if btn === "C"}
      <button on:click={onClear}>{btn}</button>
    {:else if btn === "="}
      <button class="equal" on:click={onEqual}>{btn}</button>
    {:else}
      <button on:click={() => onInput(btn)}>{btn}</button>
    {/if}
  {/each}
</div>
