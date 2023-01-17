<script lang="ts">
    import Navigation from "./Navigation.svelte";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let hovering: boolean = false;
    let mousePosition: number[] = [0, 0];
    let text: string = "";
    
    onMount(() => {
        document.querySelectorAll('[data-info]').forEach(element => {
            element.addEventListener('mouseenter', () => {
                hovering = true;
                text = element.getAttribute('data-info') || '';
            });

            element.addEventListener('mouseleave', () => hovering = false);
        });
    });
</script>

<svelte:window on:mousemove={e => mousePosition = [e.clientX, e.clientY]}/>

{#if hovering}
    <main transition:slide={{ duration: 150 }} style="top: {mousePosition[1]}px; left: {mousePosition[0]}px;">{text}</main>
{/if}

<Navigation></Navigation>

<slot></slot>

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