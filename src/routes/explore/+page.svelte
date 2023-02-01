<script lang="ts">
    import { appdata } from '../../store';
    import NewPost from '../NewPost.svelte';
    import Post from '../Post.svelte';
</script>

<main>
    {#if $appdata.loggedIn}
    <NewPost></NewPost>
    {/if}

    {#each [...Array(128).keys()] as _}
        <Post />
    {/each}
</main>

<!--
<Blanket toggle={false}>
    <Authenticate></Authenticate>
</Blanket>
-->

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

        padding-bottom: 150px;

        overflow: auto;
    }

    @media only screen and (max-width: 540px) {
        main {
            padding-top: 5vw;
        }
    }
</style>