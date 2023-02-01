<script lang="ts">
    import { onMount } from "svelte";
    import Navigation from "./Navigation.svelte";

    let mounted: boolean = false;
    onMount(() => mounted = true);
</script>

{#if mounted}
<Navigation></Navigation>

<slot></slot>
{/if}

<!--
<footer>
    <p>Made with 💖 by <span>Aarav</span>.</p>
</footer>
-->

<style>
    footer {
        width: 100vw;
        height: 40px;

        bottom: 0px;
        left: 0px;
        position: absolute;
        z-index: 1000;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    p {
        font-size: 12px;
        color: var(--gray9);
        line-height: 16px;
        user-select: none;
    }

    span {
        line-height: 16px;
        font-weight: 600;
    }
</style>