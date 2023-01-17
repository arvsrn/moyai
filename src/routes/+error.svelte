<script lang="ts">
    import { page } from '$app/stores';
</script>
 
<main>    
    <h1>{$page.status}</h1>
    <p>{$page.error?.message}.</p>
</main>

<style>
    main {
        width: 100vw;
        height: calc(100vh - 50px);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding-bottom: 30vh;

        background-color: var(--gray1);

        overflow: auto;
    }

    h1 {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray12);
    }

    p {
        font-size: 14px;
        color: var(--gray11);
    }
</style>