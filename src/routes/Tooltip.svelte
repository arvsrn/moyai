<script lang="ts">
    import Navigation from "./Navigation.svelte";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let hovering: boolean = false;
    let mousePosition: number[] = [0, 0];
    let width: number = 0;
    export let text: string = "";

    onMount(() => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext("2d");

        if (!context) return console.log('ERR: Context is none.')

        context.font = 'normal 13px Inter';
        const metrics = context.measureText(text);

        width = metrics.width + 24;

        if (width > 439)
            width = 439;
    })
</script>

<svelte:window on:mousemove={e => {
    mousePosition = [e.clientX, e.clientY];

    if (mousePosition[0] + width > document.body.clientWidth) {
        mousePosition[0] -= width;
    }
}}/>

<div on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false} on:touchstart={() => {setTimeout(() => hovering = false, 2000); hovering = true;}}>
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

    @media (pointer:none), (pointer:coarse) {
        main {
            position: fixed;
            top: auto !important;
            bottom: 64px !important;
            left: 50vw !important;
            transform: translateX(-50%);

            width: fit-content;
            max-width: 80vw;
        }
    }
</style>