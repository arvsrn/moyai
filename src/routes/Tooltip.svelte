<script lang="ts">
    import Navigation from "./Navigation.svelte";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let hovering: boolean = false;
    let mousePosition: number[] = [0, 0];
    export let text: string = "";
</script>

<svelte:window on:mousemove={e => mousePosition = [e.clientX, e.clientY]}/>

<div on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false}>
    <slot></slot>
</div>

{#if hovering}
    <main transition:slide={{ duration: 150 }} style="top: {mousePosition[1]}px; left: {mousePosition[0]}px;">{text}</main>
{/if}

<style>
    main {
        opacity: 100%;
        
        background-color: var(--gray1);
        border: 1px solid var(--gray3);
        
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px 12px;
        border-radius: 6px;
        margin-top: 12px;
        margin-left: 12px;
        max-width: 439.31px;
        width: fit-content;
        height: fit-content;
        position: absolute;
        font-size: 13px;
        font-weight: normal;
        color: var(--gray11);
        z-index: 100;
        line-height: 21px;
    }
</style>