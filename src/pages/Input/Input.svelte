<script lang="ts">
    import {onDestroy} from "svelte";
    import { fade } from "svelte/transition";

    let value: string;

    $: document.title = value || 'Demo';

    onDestroy(() => {
        console.log('Saindo do componente')
    })
</script>

<div>
    <div class="display">{ value || 'Nada digitado'}</div>
    <!--  Cada vez que o componente é atualizado, é destruido e reconstruido  -->
    {#key value}
        <input type="text" bind:value transition:fade />
    {/key}
</div>

<style>
    .display {
        margin: 10px;
        border: 1px solid black;
        min-height: 15px;
    }

    input {
        width: 100%;
    }
</style>
