import {readable, writable} from "svelte/store";

export const options = writable({
    fetch: false,
    input: false,
    form: false,
    relogio: false,
});

export const clock = readable(null, (set) => {
    set(new Date());

    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
})
