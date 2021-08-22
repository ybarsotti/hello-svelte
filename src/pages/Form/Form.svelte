<script lang="ts">
    import {beforeUpdate, getContext} from "svelte";

    const formValues = {
        usuario: '',
        senha: '',
    }

    // Recebe o valor de contexto oriunda do componente pai
    console.log(getContext('usuario'))

    beforeUpdate(() => {
        console.log('atualizando')
    })

    function handleSubmit() {
        alert(JSON.stringify(formValues));
    }
</script>

<main class="container">
    <p>
        "Login"
    </p>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-controller">
            <input type="text" bind:value={formValues.usuario}/>
        </div>
        <div class="form-controller">
            <input type="password" bind:value={formValues.senha}/>
        </div>
        <div class="form-controller">
            <button type="submit">Enviar</button>
        </div>
    </form>
</main>

<style>
    p {
        margin-bottom: 15px;
    }
    .container {
        max-width: 970px;
    }

    .form-controller {
        margin: 5px;
    }
</style>
