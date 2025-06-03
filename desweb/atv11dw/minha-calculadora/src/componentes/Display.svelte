<script>
  export let value = "";
</script>

<style>
  .display {
    width: 100%;
    height: 40px;
    font-size: 1.5em;
    margin-bottom: 10px;
    padding: 5px;
    border: #;
    color: #FFD700;
  }
</style>

<input class="display" type="text" readonly bind:value={value} />
