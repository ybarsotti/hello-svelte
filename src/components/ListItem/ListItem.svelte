<script lang="ts">
    import { fade } from "svelte/transition";


    export let value: string;
</script>

<li transition:fade>
    { value }
</li>

<style>
    li {
        list-style: none;
        color: black;
    }
</style>
