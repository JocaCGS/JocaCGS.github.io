<script>
  import Display from './componentes/Display.svelte';
  import Keyboard from './componentes/Keyboard.svelte';

  let current = "";
  let previous = "";
  let operator = "";

  function handleInput(char) {
    if (/[0-9.]/.test(char)) {
      current += char;
    } else if (/[+\-*/]/.test(char)) {
      if (current) {
        previous = current;
        operator = char;
        current = "";
      }
    }
  }

  function handleClear() {
    current = "";
    previous = "";
    operator = "";
  }

  function handleEqual() {
    if (previous && operator && current) {
      const a = parseFloat(previous);
      const b = parseFloat(current);

      switch (operator) {
        case '+':
          current = (a + b).toString();
          break;
        case '-':
          current = (a - b).toString();
          break;
        case '*':
          current = (a * b).toString();
          break;
        case '/':
          current = b !== 0 ? (a / b).toString() : "Erro";
          break;
      }

      previous = "";
      operator = "";
    }
  }
</script>

<style>
  .calculator {
    max-width: 240px;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
    font-family: sans-serif;
  }
</style>

<div class="calculator">
  <Display value={current || previous || "0"} />
  <Keyboard
    onInput={handleInput}
    onClear={handleClear}
    onEqual={handleEqual}
  />
</div>
