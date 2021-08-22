<script lang="ts">
    import { clock } from "../../store";

    let readableClock;
    clock.subscribe((value) => {
        readableClock = value;
    })
</script>

<main>
    <p>Relógio utilizando o método readable, podendo fazer um subscribe.</p>
    <strong>Hora atual:</strong> { readableClock }
</main>

<style>
    p {
        margin: 5px 0;
    }
    strong {
        font-weight: bold;
    }
</style>
