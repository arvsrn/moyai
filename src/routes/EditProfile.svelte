<script lang="ts">
    import { clickOutside } from "svelte-use-click-outside";
    import { slide } from "svelte/transition";
    import Menu from "./Menu.svelte";
    import MenuOption from "./MenuOption.svelte";

    let showMenu: boolean = false;
    let mousePosition: number[] = [0, 0];
</script>

<main>
    {#if showMenu}
    <Menu onclose={() => showMenu = false} style="position: absolute; left: {mousePosition[0]}px; top: {mousePosition[1]}px;">
        <MenuOption text="Remove" handler={() => {}}></MenuOption>
        <MenuOption text="Change" handler={() => {}}></MenuOption>
    </Menu>
    {/if}
    
    <img src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false" on:keydown={() => {/* to get a11y to shut up */}} on:click={e => {
        showMenu = true;
        mousePosition = [e.clientX, e.clientY];
    }} on:contextmenu|preventDefault={e => {
        showMenu = true;
        mousePosition = [e.clientX, e.clientY];
    }}>

    <div class="input-group">
        <h1>Handle</h1>
        <p>Egestas sed tempus urna et pharetra.</p>
    </div>
    <div class="input-group">
        <input type="text" disabled={true} placeholder="@bing-chilling">
        <p class="tooltip">💡 Your handle cannot be changed.</p>
    </div>
    
    <div class="input-group">
        <h1>Display name*</h1>
        <p>Egestas sed tempus urna et pharetra.</p>
    </div>
    <input type="text" placeholder="Bing Chilling">
    
    <div class="input-group">
        <h1>About me</h1>
        <p>Egestas sed tempus urna et pharetra.</p>
    </div>
    <input type="text" placeholder="The moai emoji depicts a head...">
    
    <div class="input-group">
        <h1>Website</h1>
        <p>Egestas sed tempus urna et pharetra.</p>
    </div>
    <input type="text" placeholder="https://www.aarv.me/">
</main>

<style>
    main {
        width: 400px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 24px;

        background: var(--gray1);
        border-radius: 6px;
        overflow: hidden;

        animation: enter .6s var(--ease);
    }

    @media only screen and (max-width: 400px) {
        main {
            width: 100vw !important;
            height: calc(100vh - 50px) !important;
            position: absolute;
            bottom: 0px;
        }
    }

    img {
        width: 64px;
        height: 64px;

        border-radius: 32px;
        margin-bottom: 8px;
        
        cursor: pointer;
    }

    div.input-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    h1 {
        font-size: 13px;
        font-weight: 600;
        color: var(--gray12);
        letter-spacing: 0.015em;
    }

    p {
        font-size: 13px;
        font-weight: normal;
        color: var(--gray11);
    }

    p.tooltip {
        font-size: 11px;
        color: var(--gray10);
    }

    input {
        background: var(--gray2);
        border-radius: 6px;
        border: 1px solid var(--gray4);

        outline: none;
        font-size: 13px;

        width: 100%;
        height: 32px;

        color: var(--gray12);
        padding-left: 10px;
    }

    input::placeholder {
        color: var(--gray11);
    }

    @keyframes enter {
        from {
            opacity: 0%;
            transform: translateY(50px);
        }

        to {
            opacity: 100%;
            transform: translateY(0px);
        }
    }

    @keyframes exit {
        from {
            opacity: 100%;
            transform: translateY(0px);
        }

        to {
            opacity: 0%;
            transform: translateY(-50px);
        }
    }

    @media only screen and (max-width: 420px) {
        main {
            width: 100vw;
            height: fit-content;

            border-radius: 0px;
        }
    }
</style>