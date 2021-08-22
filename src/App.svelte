<script lang="ts">
    import {setContext} from 'svelte';
    import CryptoRequest from "./pages/CryptoRequest/CryptoRequest.svelte";
    import NavBar from "./components/NavBar/NavBar.svelte";
    import Input from "./pages/Input/Input.svelte";
    import Form from "./pages/Form/Form.svelte";
    import {options} from "./store";
    import Clock from "./pages/Clock/Clock.svelte";
    import { slide, fade, fly, scale } from "svelte/transition";

    setContext('usuario', {
        usuario: 'dev',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    });

    function callbackNotify(event) {
        alert(`Notificação disparada: Detalhes: ${event.detail}`)
    }
</script>

<main>
    <section>
        <NavBar on:notify={callbackNotify}/>
    </section>
    <section>
        {#if $options.fetch}
            <div transition:fade>
                <CryptoRequest/>
            </div>
        {:else if $options.input}
            <div transition:fly>
                <Input/>
            </div>
        {:else if $options.form}
            <div transition:slide>
                <Form/>
            </div>
        {:else if $options.relogio}
            <div transition:scale>
                <Clock/>
            </div>
        {:else}
            <p>Nenhuma opção selecionada...</p>
        {/if}
    </section>
</main>

<style>
    section {
        padding: 10px;
    }
</style>
