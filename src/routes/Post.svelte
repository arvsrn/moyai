<script lang="ts">
    import { slide } from "svelte/transition";
    import { clickOutside } from "svelte-use-click-outside";
    import Notification from "./Notification.svelte";
    
    let active: boolean = false;
    let showInput: boolean = false;
    let input: HTMLInputElement;
    let showing: boolean = false;
    let isViewing: boolean = false;
</script>

<main on:click|self={() => showInput = true} on:keydown={() => {}} use:clickOutside={() => showInput = false}>
    <img on:click|self={() => location.assign('/u/amogus')} class="profile" src="https://pbs.twimg.com/profile_images/1605129734697807872/vHWN2RtV_400x400.png" alt="" draggable="false">
    <p on:click|self={() => showInput = true}>Seeking Junior UI/UX designer opportunities in Europe. I am passionate about web accessibility and sustainable digital design ✨</p>

    <!--
    <img class="attachment" class:view={isViewing} src="https://images.unsplash.com/photo-1611651338412-8403fa6e3599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" on:click={() => isViewing = true} use:clickOutside={() => isViewing = false}>
    -->

    {#if showInput}
    <div class="send-private-reply-container" class:active={active} transition:slide={{ duration: 70 }}>
        <input type="text" placeholder="Send a private reply..." bind:this={input} on:input={key => {
            console.log(input.value);
            active = input.value.trim() !== "";
        }} on:keydown={key => {
            if (key.code === 'Enter') 
                showing = true;
        }}>
        
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"/>
        </svg>            
    </div>
    {/if}
</main>

<Notification bind:showing={showing}>✨ Sent!</Notification>

<style>
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

        cursor: pointer;
    }

    img.profile {
        width: 24px;
        height: 24px;

        border-radius: 12px;
        user-select: none;
        cursor: pointer;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;

        color: var(--gray12);
    }

    div.send-private-reply-container {
        width: 100%;
        height: 35px;
        background: var(--gray1);
        border-radius: 6px;
        border: 1px solid var(--gray4);
        position: relative;
        color: var(--gray10);
        transition: color 0.1s var(--ease);
        margin-top: 8px;
    }

    input {
        outline: none;
        border: none;
        height: 100%;
        width: 100%;
        color: var(--gray12);
        background: transparent;
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12.45px;
        line-height: 15px;
        padding-left: 10px;
    }

    input::placeholder {
        color: var(--gray10);
    }
    
    div.active {
        color: var(--gray12);
    }

    img.attachment {
        width: 100%;
        margin-top: 8px;
        border-radius: 6px;
        cursor: default;
        transition: none !important;
    }

    svg {
        position: absolute;
        top: 10px;
        right: 10px;

        cursor: default;
    }

    img.view {
        width: 70vw;
        
        position: absolute;

        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        z-index: 100;
        box-shadow: 0px 4px 72px 1278px rgba(0, 0, 0, 0.25);
        transition: width 0.1s var(--ease);
    }

    @media only screen and (max-width: 540px) {
        main {
            width: 90vw;
            min-width: 273px;
        }
    }
</style>