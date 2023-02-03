<script lang="ts">
    import { slide } from "svelte/transition";
    import { clickOutside } from "svelte-use-click-outside";
    import Notification from "./Notification.svelte";
    import Carousel from "./Carousel.svelte";

    let posts: Array<{
        by: string,
        content: string,
        attachments: string[],
    }> = [
        {
            by: 'amogus',
            content: "Maybe the benefit of a real-world metaphor in interface design is not that it gives someone a familiar reference, but that it encourages the designer to structure the interface logically. Maybe any logical structure will help someone become familiar?",
            attachments: ['https://cdn.discordapp.com/attachments/1023648332750520341/1070723261614276608/ssstwitter.com_1675350700175.mp4', 'https://pbs.twimg.com/media/Fn3-4aTWIAA1Eok?format=jpg&name=small', 'https://cdn.discordapp.com/attachments/1023648332750520341/1071007296353747015/ssstwitter.com_1675418403867.mp4'],
        },
        {
            by: 'amogus',
            content: "The temperature at which water boils depends on pressure. You can demonstrate this by dramatically lowering the pressure on a water-filled plastic syringe at room temperature.",
            attachments: [],
        },
        {
            by: 'amogus',
            content: "I've been working on a project for the last few weeks. <br><br> It's still young and has rough edges, but this is the first output of a GraphQL linter, fully implemented in Rust and fully extensible with scripts. <br><br> Might be the first tool with potential I ever open-source. 💛",
            attachments: [],
        },
        {
            by: 'amogus',
            content: "Most time management problems resolve themselves when you find something you believe is important.",
            attachments: [],
        }
    ];

    let profilePicture = [
        'https://cdn.discordapp.com/attachments/1023648332750520341/1070717439022727258/image.png',
        'https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png',
        'https://cdn.discordapp.com/attachments/1023648332750520341/1070717458962456706/image.png'
    ][Math.floor(Math.random() * 3)];

    let post: {
        by: string,
        content: string,
        attachments: string[],
    } = posts[Math.floor(Math.random() * posts.length)];
    
    let active: boolean = false;
    let showInput: boolean = false;
    let input: HTMLInputElement;
    let showing: boolean = false;
    let isViewing: boolean = false;
</script>

<main on:click|self={() => showInput = true} on:keydown={() => {}} use:clickOutside={() => showInput = false}>
    <img on:click|self={() => location.assign('/u/' + post.by)} class="profile" src="{profilePicture}" alt="" draggable="false">
    <p on:click|self={() => showInput = true}>{@html post.content}</p>

    {#if post.attachments.length > 0} 
        <Carousel attachments={post.attachments}></Carousel>
    {/if}

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