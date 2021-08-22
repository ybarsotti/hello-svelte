<script lang="ts">
    import Button from "../../components/Button/Button.svelte";
    import ListItem from "../../components/ListItem/ListItem.svelte";

    let isLoading = false;
    const BASE_URL = `https://api.coincap.io`;
    let result;

    async function fetchTokens() {
        result = null;
        isLoading = true;
        try {
            const fetchResult = await fetch(BASE_URL + '/v2/assets');
            result = fetchResult.json();
        } catch (e) {
            console.error(e.message);
        } finally {
            isLoading = false
        }
    }
</script>

<main>
    <Button onClick={fetchTokens} loading={isLoading}/>
    {#if result }
        {#await result}
            <p>Carregando valores...</p>
        {:then value}
            <ul>
                {#each value.data as data, index}
                    <ListItem value={`Token: ${data.name} - USD: ${parseFloat(data?.priceUsd).toFixed(2)}`} />
                {/each}
            </ul>
        {:catch error}
            <p>Falha ao buscar dados :(</p>
        {/await}
    {:else }
        <p>Sem valores.</p>
    {/if}
</main>

