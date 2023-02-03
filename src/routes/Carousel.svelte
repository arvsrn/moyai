<!-- Meant to be used exclusively in the Post element. -->

<script lang="ts">
    import { fade } from "svelte/transition";

    export let attachments: Array<string>;
    let hovering: boolean = false;
    let currentIndex: number = 0;

    const onCurrentIndexUpdate = () => {
        if (currentIndex < 0) 
            currentIndex = 0;
        else if (currentIndex > (attachments.length - 1)) 
            currentIndex = attachments.length - 1;
    };

    $: currentIndex, onCurrentIndexUpdate();
</script>

<main on:mouseenter={() => hovering = true} on:mouseleave={() => hovering = false}>
    {#if attachments[currentIndex].endsWith('.mp4')}
        <video controls>
            <source src="{attachments[currentIndex]}" type="video/mp4">
        </video>
    {:else}
        <img src="{attachments[currentIndex]}" alt="">
    {/if}
    
    {#if hovering && attachments.length > 1}
    <div class="container" transition:fade={{ duration: 80 }}>
        <button class="right" on:click={() => currentIndex += 1}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
        <button class="left" on:click={() => currentIndex -= 1}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    {/if}
</main>

<style>
    main {
        width: 100%;
        height: fit-content;
        
        position: relative;
        cursor: default;

        margin-top: 12px;
        border-radius: 6px;
        overflow: hidden;
    }

    img, video {
        width: 100%;
    }

    button {
        width: 36px;
        height: 36px;
        border-radius: 36px;

        background: rgba(0, 0, 0, 0.1);
        border: 1px solid var(--gray11);

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        outline: none;
        cursor: pointer;
        transition: transform 0.15s var(--ease);

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--gray10);
    }

    button:active {
        transform: scale(0.95) translateY(-50%);
    }

    button.left {
        left: 12px;
    }

    button.right {
        right: 12px;
    }

    div.fade {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.05) 82.14%);

        position: absolute;
        bottom: 0px;
        left: 0px;

        width: 100%;
        height: 30%;
        pointer-events: none;
    }
</style>
