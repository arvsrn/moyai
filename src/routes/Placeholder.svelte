<script lang="ts">
    export let style: string = "";
</script>

<main {style}></main>

<style>
    
    main {
        border-radius: 4px;
        background-image: linear-gradient(270deg, hsl(109, 0%, 12%), hsl(109, 0%, 20%), hsl(109, 0%, 20%), hsl(109, 0%, 12%));
        background-size: 400% 100%;
        animation: loading 8s ease-in-out infinite;
    }

    @keyframes loading {
        from {
            background-position: 200% 0;
        }
        to {
            background-position: -200% 0;
        }
    }

</style>