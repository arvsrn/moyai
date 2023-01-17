<script lang="ts">
    import Post from "../../Post.svelte";

    let following: boolean = false;
</script>

<main>
    <div class="container">
        <img class="profile" src="https://pbs.twimg.com/profile_images/1605129734697807872/vHWN2RtV_400x400.png" alt="" draggable="false">
        <div class="group">
            <h1>Aarav Sareen</h1>
            <p>Egestas sed tempus urna et pharetra. Sit amet massa vitae tortor condimentum lacinia quis vel.</p>
            <a href="/">aarv.me</a>
        </div>
        <div class="group horizontal">
            <button class:following={following} on:click={() => following = !following}>
                {following ? "Following" : "Follow"}
            </button>
            <button>Message</button>
        </div>
        <div class="divider"></div>
        <div class="group">
            <Post></Post>
        </div>
    </div>
</main>

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

        transition: transform 0.1s cubic-bezier(.56,.38,0,.99);
    }

    button:active {
        transform: scale(0.93);
    }

    button.following {
        border: 1px solid var(--gray6);
        background: transparent;
    }

    @media only screen and (max-width: 540px) {
        main {
            width: 90vw;
        }
    }
</style>