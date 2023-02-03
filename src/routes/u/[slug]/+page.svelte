<script lang="ts">
    import { page } from "$app/stores";
    import Blanket from "../../Blanket.svelte";
    import EditProfile from "../../EditProfile.svelte";
    import Post from "../../Post.svelte";

    import { doc, getDoc } from "firebase/firestore";
    import { db } from "../../../app";
    import Placeholder from "../../Placeholder.svelte";
    let following: boolean = false;
    let isMe: boolean = true;
    let showProfileSettingsPanel: boolean = false;

    interface User {
        about: string;
        email: string;
        handle: string;
        name: string;
        posts: string[];
    }

    const getUser = async (): Promise<User> => {
        const docRef = doc(db, "users", $page.params.slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // @ts-ignore
            return docSnap.data();
        }
        else 
            return Promise.reject(new Error("Bing chilling"))
    };
</script>

<main>
    {#await getUser()}
    <div class="container">
        <Placeholder style="width: 48px; height: 48px; border-radius: 24px;"></Placeholder>

        <div class="group">
            <Placeholder style="width: 150px; height: 20px;"></Placeholder>
            <Placeholder style="width: 100%; height: 17px;"></Placeholder>
            <Placeholder style="width: 80px; height: 17px;"></Placeholder>
        </div>
        <div class="group horizontal">
            <Placeholder style="width: 60px; height: 38px; border-radius: 30px;"></Placeholder>
            <Placeholder style="width: 100px; height: 38px; border-radius: 30px;"></Placeholder>
        </div>
        <div class="divider"></div>
        <div class="group">
            <Placeholder style="width: 100%; height: 114px; border-radius: 6px;"></Placeholder>
        </div>
    </div>
    {:then user}
    <div class="container">
        <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
        <div class="group">
            <h1>{user.name}</h1>
            <p>{user.about}</p>
            <a href="/">moyai.aarv.me</a>
        </div>
        <div class="group horizontal">
            {#if isMe}
            <button on:click={() => showProfileSettingsPanel = true}>Edit</button>
            {:else}
            <button class:following={following} on:click={() => following = !following}>
                {following ? "Following" : "Follow"}
            </button>
            <button>Message</button>
            {/if}
        </div>
        <div class="divider"></div>
        <div class="group">
            <Post></Post>
        </div>
    </div>
    {:catch} 
    <div class="container">
        <h1>User not found.</h1>
        <a href="/">Become {$page.params.slug}</a>
    </div>
    {/await}
</main>

{#if showProfileSettingsPanel}
<Blanket bind:toggle={showProfileSettingsPanel}>
    <EditProfile />
</Blanket>
{/if}

<style>
    main {
        width: 100vw;
        height: calc(100vh - 50px);

        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
        gap: 16px;

        background-color: var(--gray1);

        overflow: auto;
    }

    div.container {
        width: 500px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    div.divider {
        height: 1px;
        width: 100%;

        background: var(--gray2);
        margin-top: 8px;
        margin-bottom: 16px;
    }

    div.group {
        display: flex;
        flex-direction: column;
        gap: 8px;

        width: 100%;
        height: fit-content;
    }

    div.horizontal {
        flex-direction: row;
    }

    img.profile {
        width: 48px;
        height: 48px;

        border-radius: 24px;
        user-select: none;
    }

    h1 {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray12);
    }

    p {
        font-size: 14px;
        font-weight: normal;
        color: var(--gray11);
    }

    a {
        text-decoration: none;
        font-size: 14px;
        font-weight: normal;
        color: var(--gray10);
    }

    button {
        padding: 10px 16px;
        border-radius: 100px;

        width: fit-content;
        height: fit-content;

        border: 1px solid var(--gray4);
        background: var(--gray3);

        cursor: pointer;
        color: var(--gray12);

        transition: transform 0.1s var(--ease);
    }

    button:active {
        transform: scale(0.93);
    }

    button.following {
        border: 1px solid var(--gray6);
        background: transparent;
    }

    @media only screen and (max-width: 540px) {
        div.container {
            width: 90vw;
        }
    }
</style>