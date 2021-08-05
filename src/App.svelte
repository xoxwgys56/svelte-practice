<script lang="ts">
  export let name: string;
</script>

<main>
  <h1>Nice to meet you. {name}!</h1>
  <p>
    I build this website follow
    <a href="https://svelte.dev/tutorial"> Svelte tutorial </a>.
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
