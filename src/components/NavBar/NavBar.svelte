<script lang="ts">
    import {options} from "../../store";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    function handleClick(option: string) {
        Object.keys($options).forEach((key) => {
            $options[key] = false;
        })
        $options[option] = true;
    }
</script>

<nav>
    <button on:click={() => handleClick('fetch')}>
        Fetch
    </button>
    <button on:click={() => handleClick('input')}>
        Input
    </button>
    <button on:click={() => handleClick('form')}>
        Form
    </button>
    <button on:click={() => handleClick('relogio')}>
        Relógio
    </button>
    <button on:click={() => dispatch('notify', 'Teste de disparo de evento')}>
        Notificador de evento
    </button>
</nav>

<style>
    nav {
        display: flex;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }

    button {
        margin: 0 3px;
    }
</style>
