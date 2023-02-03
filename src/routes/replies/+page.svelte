<script lang="ts">
    import { appdata } from "../../store";
    import { clickOutside } from "svelte-use-click-outside";
    import Authenticate from "../Authenticate.svelte";
    import Blanket from "../Blanket.svelte";

    let selected: number = 0;
    let clicked: boolean = false;
</script>

{#if $appdata.loggedIn}
<main>
    <div class="chat-list" class:sticky={clicked} use:clickOutside={() => {
        if (clicked) clicked = false;
    }}>
        <div class="chat" class:selected={selected == 1} on:click={() => selected = 1} on:keydown={() => {/* to get a11y to shut up */}}>
            <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
            <div class="information">
                <h1>Aarav Sareen</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>

        <div class="chat" class:selected={selected == 2} on:click={() => selected = 2} on:keydown={() => {/* to get a11y to shut up */}}>
            <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
            <div class="information">
                <h1>Aarav Sareen</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>

        <div class="chat" class:selected={selected == 3} on:click={() => selected = 3} on:keydown={() => {/* to get a11y to shut up */}}>
            <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
            <div class="information">
                <h1>Aarav Sareen</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>

        <div class="chat" class:selected={selected == 4} on:click={() => selected = 4} on:keydown={() => {/* to get a11y to shut up */}}>
            <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
            <div class="information">
                <h1>Aarav Sareen</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </div>
    <div class="chats-open" on:click={() => clicked = true} on:keydown={() => {/* to get a11y to shut up */}}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    </div>
    <div class="main-messages">
        <div class="chat-info">
            <img src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" class="profile" style="width: 32px; height: 32px;">
            <h1 style="font-size: 14px; font-weight: 500;">Aarav Sareen</h1>
        </div>
        <div class="messages">
            <div class="message">
                <img class="message-profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
                <div class="message-inner">
                    <p>Hello, world!</p>
                    <p>Egestas sed tempus urna et pharetra. Sit amet massa vitae tortor condimentum lacinia quis vel.</p>
                </div>
            </div>
            <div class="message">
                <img class="message-profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
                <div class="message-inner">
                    <p>Hello, world!</p>
                    <p>Egestas sed tempus urna et pharetra. Sit amet massa vitae tortor condimentum lacinia quis vel.</p>
                </div>
            </div>
        </div>
        <input type="text" placeholder="Send a message..." />
    </div>
</main>
{:else}
<main></main>
<Blanket toggle={true}>
    <Authenticate></Authenticate>
</Blanket>
{/if}

<style>
    main {
        width: 100vw;
        height: calc(100vh - 50px);

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: var(--gray1);

        overflow: auto;
    }

    div.chat {
        width: 100%;
        height: 64px;
        padding: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        gap: 12px;
        border-radius: 6px;
        transition: background 0.2s var(--ease);
    }

    div.chat:hover {
        background: var(--gray2);
    }

    img.profile {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        user-select: none;
    }

    div.message {
        width: 100%;
        height: fit-content;

        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    img.message-profile {
        height: 24px;
        width: 24px;
        border-radius: 12px;
        user-select: none;
        cursor: pointer;
    }

    div.message-inner {
        display: flex;
        flex-direction: column;
    }

    div.message-inner > p {
        line-height: 24px;
        font-size: 13px;
        color: var(--gray12);
        user-select: auto;
    }

    h1 {
        font-size: 13px;
        font-weight: 500;
        color: var(--gray12);
        user-select: none;
    }

    p {
        font-size: 13px;
        font-weight: normal;
        color: var(--gray11);
        user-select: none;
    }

    div.information {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    
    div.chat-list {
        height: calc(100vh - 50px);
        width: 332px;
        border-left: 1px solid var(--gray3);
        background: var(--gray1);

        display: flex;
        flex-direction: column;
        
        padding: 24px 16px;
        gap: 2px;
    }

    div.chats-open {
        height: calc(100vh - 50px);
        width: 48px;
        border-left: 1px solid var(--gray3);
        color: var(--gray11);

        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding-top: 24px;
    }

    div.chats-open:hover {
        background: var(--gray2);
    }

    div.main-messages {
        height: calc(100vh - 50px);
        width: 700px;
        border-left: 1px solid var(--gray3);
        border-right: 1px solid var(--gray3);
        padding: 24px;

        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    div.messages {
        flex: 1;

        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-content: flex-end;
    }

    div.selected {
        background: var(--gray2);
    }

    div.chats-open {
        display: none;
    }

    div.sticky {
        display: flex;
        
        position: absolute;
        bottom: 0px;
        left: 0px;

        border-left: none;
        border-right: 1px solid var(--gray3);

        box-shadow: 0px 4px 4px 1230px rgba(0, 0, 0, 0.2);
    }

    input {
        background: var(--gray2);
        border-radius: 6px;
        border: 1px solid var(--gray4);

        outline: none;
        font-size: 13px;

        width: 100%;
        height: 40px;

        color: var(--gray12);
        padding-left: 12px;
    }

    input::placeholder {
        color: var(--gray11);
    }

    div.chat-info {
        width: 100%;
        height: 48px;
        padding-bottom: 16px; 
        border-bottom: 1px solid var(--gray3);

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }

    @media only screen and (max-width: 1000px) {
        div.chats-open {
            display: flex;
        }

        div.chat-list:not(.sticky) {
            display: none;  
        }
    }

    @media only screen and (max-width: 748px) {
        div.main-messages {
            width: 80vw;
        }
    }   
</style>