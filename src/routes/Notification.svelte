<script lang="ts">
    import { fade } from "svelte/transition";

    export let showing: boolean = false;

    $: {
        if (showing) 
            setTimeout(() => showing = false, 1000);
    }
</script>

{#if showing}
    <main out:fade={{ duration: 90 }}><slot/></main>    
{/if}

<style>
    main {
        position: absolute;
        left: 50vw;
        transform: translateX(-50%);
        bottom: 20vh;

        background-color: var(--gray12);
        color: var(--gray1);

        display: flex;
        flex-direction: row;
        padding: 6px 10px;
        border-radius: 6px;

        font-size: 13px;
        animation: enter .2s ease-in;
        transition: transform 0.2s cubic-bezier(.56,.38,0,.99);
    }

    @keyframes enter {
        0% {
            transform: translate(-50%, 25px);
            opacity: 0%;
        }

        100% {
            transform: translate(-50%, 0px);
            opacity: 100%;
        }
    }
</style>
