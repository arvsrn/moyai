<script lang="ts">
    import { CaretRight } from "radix-icons-svelte";
    import { fade } from "svelte/transition";

    export let text: string, shortcut: string = "";
    export let hovering: boolean = false, hasMenu: boolean = false;
    export let style: string = "";
</script>

<main on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false} {style}>
    <slot></slot>
    {text} 
    <span>
        {shortcut}
        {#if hasMenu}
            <div style="color: var(--gray3); height: 15px; width: 15px;">
                <CaretRight/>
            </div>
        {/if}
    </span>
    
    {#if hovering && hasMenu}
        <div class="menu" transition:fade={{ duration: 100 }}>
            <slot name="menu"></slot>
        </div>
    {/if}
</main>

<style>
    div.menu {
        height: fit-content;
        width: 220px;

        display: flex;
        flex-direction: column;
        padding: 6px 4px;

        border-radius: 6px;
        
        background-color: var(--gray2);

        position: absolute;
        left: 260px;
        z-index: 6;
    }

    main {
        position: relative;
        
        width: 100%;

        background-color: transparent;
        border-radius: 4px;

        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        gap: 6px;

        user-select: none;
        font-size: 13.25px;
        color: var(--gray12);

        transition: background-color 0.05s cubic-bezier(.56,.38,0,.99);
    }

    main:hover {
        background-color: var(--gray4);
    }

    span {
        color: var(--gray5);
        margin-left: auto;
        font-size: 12px;
    }
</style>