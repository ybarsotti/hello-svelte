<script lang="ts">
    export let onClick: () => void;
    export let loading: boolean;
</script>

<div>
    <button on:click={onClick} disabled={loading} class="button" class:loading>Update Values</button>
</div>

<style>
button {
    background-color: #AAA;
    color: #FFF;
    cursor: pointer;
    transition: all 200ms;
}

button:hover {
    background-color: #BBB;
}

.button {
    display: inline-block;
    border: 0;
    outline: 0;
    padding: 12px 16px;
    line-height: 1.4;
    background: linear-gradient(#4d4d4d,#2f2f2f);
    border-radius: 5px;
    border: 1px solid black;
    font-family: "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif;
    color: white !important;
    font-size: 1.2em;
    cursor: pointer;
    /* Important part */
    position: relative;
    transition: padding-right .3s ease-out;
}
.button.loading {
    background-color: #CCC;
    padding-right: 40px;
}
.button.loading:after {
    content: "";
    position: absolute;
    border-radius: 100%;
    right: 6px;
    top: 50%;
    width: 0px;
    height: 0px;
    margin-top: -2px;
    border: 2px solid rgba(255,255,255,0.5);
    border-left-color: #FFF;
    border-top-color: #FFF;
    animation: spin .6s infinite linear, grow .3s forwards ease-out;
}
@keyframes spin {
    to {
        transform: rotate(359deg);
    }
}
@keyframes grow {
    to {
        width: 14px;
        height: 14px;
        margin-top: -8px;
        right: 13px;
    }
}
</style>
