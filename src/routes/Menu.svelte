<script lang="ts">
    import { clickOutside } from 'svelte-use-click-outside';
    import { fade } from 'svelte/transition';

    export let onclose: () => void;
    export let style: string = "";
</script>

<main transition:fade={{ duration: 80 }} use:clickOutside={() => onclose()} {style}>
    <slot></slot>
</main>

<style>
    main {
        height: fit-content;
        width: 200px;

        display: flex;
        flex-direction: column;
        padding: 6px 4px;

        border-radius: 6px;
        box-shadow: rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 20%) 0px 9px 24px;
        background-color: var(--gray2);

        z-index: 5;
    }
</style>