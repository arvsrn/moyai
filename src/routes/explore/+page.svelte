<script lang="ts">
    import NewPost from '../NewPost.svelte';
    import Post from '../Post.svelte';
</script>

<main>
    <NewPost></NewPost>
    {#each [...Array(128).keys()] as _}
    <Post />
    {/each}
    <div class="fade"></div>
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

        overflow: auto;
    }

    div.fade {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: calc(100vw - 8px);
        height: 150px;
        
        background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, var(--gray1) 82.14%);
        pointer-events: none;
    }

    @media only screen and (max-width: 540px) {
        main {
            padding-top: 5vw;
        }
    }
</style>