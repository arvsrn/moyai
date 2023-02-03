<script lang="ts">
    import { slide } from "svelte/transition";
    import { clickOutside } from "svelte-use-click-outside";
    import Notification from "./Notification.svelte";
    
    let active: boolean = false;
    let input: HTMLInputElement;
    let showing: boolean = false;
    let isViewing: boolean = false;
    let content: string = "";
    let anyoneCanReply: boolean = true;
    let publishing: boolean = false;
</script>

<main>
    <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
    <textarea spellcheck={false} bind:value={content} placeholder="What's haunting thy mind?" maxlength="512"></textarea>
    <div style="width: 100%; display: flex; flex-direction: row; align-items: center;">
        <div style="margin-left: auto; display: flex; flex-direction: row; gap: 8px; height: fit-content; width: fit-content; align-items: center;">
            <p class:red={(512 - content.length) <= 100}>{512 - content.length}</p>
            <button style="width: 62.45px; justify-content: center;" on:click={() => {
                publishing = true;
                setTimeout(() => publishing = false, 3000);
            }}>
                {#if publishing}
                <div class="loader"></div>                
                {:else}
                Publish
                {/if}
            </button>
        </div>
    </div>
</main>

<Notification bind:showing={showing}>✨ Sent!</Notification>

<style>
        
    @keyframes donut-spin {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

    div.loader {
        display: inline-block;
        border: 3px solid rgba(255, 255, 255, 0.5);
        border-left-color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        animation: donut-spin 1.2s linear infinite;
    }

    main {
        width: 500px;
        height: fit-content;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 8px;
        
        background: var(--gray2);
        border: 1px solid var(--gray3);
        border-radius: 8px;
    }

    img.profile {
        width: 24px;
        height: 24px;

        border-radius: 12px;
        user-select: none;
        cursor: pointer;
    }

    textarea {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;

        color: var(--gray12);
        background: transparent;
        border: 0px;
        outline: none;
        resize: none;

        width: 100%;
        height: 50px;
    }

    textarea::placeholder {
        color: var(--gray11);
    }

    @media only screen and (max-width: 540px) {
        main {
            width: 90vw;
            min-width: 273px;
        }
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 7px 12px;
        gap: 8px;

        width: fit-content;
        height: 30px;

        background: #0091FF;
        border-radius: 6px;

        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;

        color: var(--gray12);
        cursor: pointer;
        outline: none;
        border: none;

        transition: transform 0.1s var(--ease);
    }

    button:active {
        transform: scale(0.95);
    }

    p {
        font-size: 12px;
        font-weight: 600;
        color: var(--gray11);
        user-select: none;
    }

    .red {
        color: #E54D2E;
    }
</style>