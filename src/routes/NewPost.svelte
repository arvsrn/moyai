<script lang="ts">
    import { slide } from "svelte/transition";
    import { clickOutside } from "svelte-use-click-outside";
    import Notification from "./Notification.svelte";
    import Tooltip from "./Tooltip.svelte";
    
    let active: boolean = false;
    let input: HTMLInputElement;
    let showing: boolean = false;
    let isViewing: boolean = false;
    let content: string = "";
    let anyoneCanReply: boolean = true;
    let publishing: boolean = false;
</script>

<main>
    <img class="profile" src="https://pbs.twimg.com/profile_images/1605129734697807872/vHWN2RtV_400x400.png" alt="" draggable="false">
    <textarea spellcheck={false} bind:value={content} placeholder="What's haunting thy mind?" maxlength="512"></textarea>
    <div style="width: 100%; display: flex; flex-direction: row; align-items: center;">
        <p class="light" style="display: flex; flex-direction: row; align-items: center; gap: 4px; cursor: pointer;" on:click={() => anyoneCanReply = !anyoneCanReply} on:keydown={() => {}}>
            {#if anyoneCanReply}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.022 10.2845C10.9502 11.9199 9.10126 13 7 13C3.68629 13 1 10.3137 1 7C1 6.4746 1.06753 5.96497 1.19439 5.47932L2.61837 6.01332C2.79051 6.07787 2.89047 6.2577 2.85441 6.43798L2.54063 8.00691C2.50517 8.18417 2.60123 8.3615 2.76907 8.42863L4.47834 9.11234C4.59601 9.15941 4.68194 9.26271 4.70679 9.38698L5.08218 11.2639C5.0967 11.3365 5.13239 11.4032 5.18474 11.4556L5.59682 11.8677C5.78196 12.0528 6.09503 11.996 6.20337 11.7577L7.98068 7.84759C8.07761 7.63434 7.95749 7.38542 7.73024 7.32861L6.51772 7.02548C6.45178 7.00899 6.39156 6.9749 6.34351 6.92684L5.21429 5.79762C5.14396 5.72729 5.04858 5.68778 4.94912 5.68778H4.02371C3.88168 5.68778 3.75183 5.60753 3.6883 5.48049L3.10324 4.31035C3.00367 4.11122 3.09851 3.8697 3.30698 3.79153L6.093 2.74676C6.27598 2.67815 6.37559 2.48052 6.32191 2.29262L5.97738 1.0868C6.30971 1.02973 6.65138 1 7 1C7.17815 1 7.35449 1.00776 7.5287 1.02297L7.47069 1.48702C7.45097 1.64478 7.53289 1.79783 7.67509 1.86894L8.15071 2.10675C8.2531 2.15794 8.37326 2.15956 8.47699 2.11115L9.46449 1.65032C9.50627 1.63082 9.54179 1.60597 9.57123 1.57731C10.4591 1.99903 11.2269 2.63236 11.8095 3.41213L10.2049 3.09122C10.1135 3.07292 10.0185 3.08938 9.93847 3.13738L8.17306 4.19662C8.00503 4.29744 7.94295 4.51062 8.03059 4.68588L9.08414 6.79299C9.14766 6.92003 9.27751 7.00028 9.41955 7.00028H10.8008C10.9682 7.00028 11.1153 7.11128 11.1613 7.27226L12.022 10.2845ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z" fill="currentColor" fill-opacity="0.8"/>
            </svg>           
            Anyone can reply
            {:else}
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85714 5.6H7.64286V3.39286C7.64286 2.07132 6.57154 1 5.25 1C3.92846 1 2.85714 2.07132 2.85714 3.39286V5.6ZM1.85714 5.6H1C0.723858 5.6 0.5 5.82386 0.5 6.1V13.5C0.5 13.7761 0.723857 14 1 14H9.5C9.77614 14 10 13.7761 10 13.5V6.1C10 5.82386 9.77614 5.6 9.5 5.6H8.64286V3.39286C8.64286 1.51903 7.12382 0 5.25 0C3.37618 0 1.85714 1.51904 1.85714 3.39286V5.6Z" fill="currentColor" fill-opacity="0.8"/>
            </svg>                
            People you follow can reply
            {/if}
        </p>
        <div style="margin-left: auto; display: flex; flex-direction: row; gap: 8px; height: fit-content; width: fit-content; align-items: center;">
            <p class:red={(512 - content.length) <= 100}>{512 - content.length}</p>
            <Tooltip text="🚫 You must be signed in to post something.">
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
            </Tooltip>
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
        border: 1px solid var(--gray4);
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

        transition: transform 0.1s cubic-bezier(.56,.38,0,.99);
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

    .light {
        font-weight: normal;
    }

    .red {
        color: #E54D2E;
    }
</style>