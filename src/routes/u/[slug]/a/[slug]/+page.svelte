<script lang="ts">
    let showProfileSettingsPanel: boolean = false;
</script>

<main>
    <div class="container">
        <div class="profile">
            <img class="profile" src="https://cdn.discordapp.com/attachments/1023648332750520341/1070714671650312252/image.png" alt="" draggable="false">
            <p>Aarav Sareen</p>
        </div>
        <div class="container-container">
            <h1>Neque porro quisquam est qui dolorem ipsum</h1>
            <p class="date">27/04/22</p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit erat, convallis ut feugiat at, feugiat a purus. Curabitur interdum quam non nisi varius aliquam. Aliquam non sodales nisl. Vivamus efficitur semper velit non efficitur. Maecenas a orci sed dolor euismod rutrum id in enim. Nunc porttitor rutrum enim pellentesque maximus. Morbi ultrices rutrum lorem, eget faucibus nulla accumsan et. Nulla tempus ultrices metus eget lobortis. Praesent dignissim, nulla a pharetra pulvinar, eros urna vestibulum felis, sollicitudin sollicitudin nisi tortor nec tortor. Nullam rutrum malesuada tortor in iaculis. Nunc nunc ante, pellentesque at dapibus vitae, congue eu nibh. Sed eu felis sit amet massa auctor ultrices. Nunc luctus at libero vitae porta. Vivamus dui felis, imperdiet non ipsum sit amet, porta mattis ex. Pellentesque et orci vel leo fermentum facilisis. Fusce nisi ipsum, lacinia ornare enim vel, fringilla accumsan urna.</p>
        <h2>This is a heading</h2>
        <p>Nam posuere, purus eget iaculis dictum, sapien nunc tempor nulla, vel sagittis eros diam sit amet lorem. Sed nec malesuada nunc. Curabitur non ex eu risus sagittis viverra. Duis a dictum velit. Fusce lobortis porta metus et tristique. Morbi posuere purus vel nisi mattis ultricies. Integer fermentum, neque ut blandit semper, lorem lorem varius metus, in vestibulum magna ex non risus.</p>
        <h3>This is a sub heading</h3>
        <p>Sed vel mauris facilisis, commodo ex in, gravida quam. Aenean urna quam, venenatis sed nibh sit amet, convallis volutpat mauris. Duis molestie augue orci, a congue purus sodales a. Cras tristique auctor laoreet. Aenean sed odio quis ligula blandit pellentesque. Quisque dignissim sagittis nisl ut vehicula. Fusce vel vulputate justo, ac varius eros. Nunc euismod, ligula sit amet eleifend vulputate, augue lectus ornare ipsum, eu tincidunt sapien purus quis neque. Donec molestie, erat ut efficitur gravida, nulla erat fermentum orci, eu porttitor ipsum nisl sit amet metus.</p>
        <p>Suspendisse cursus, nisl a ultrices cursus, lacus tellus dictum nibh, sed ullamcorper lectus elit nec dui. Aliquam augue ex, rutrum at pulvinar ac, imperdiet ut leo. Etiam gravida tellus sem, eu tempor tellus aliquam in. Sed ut porttitor urna. Donec eget pellentesque massa. In semper nisi mauris, ac ultrices quam fringilla vel. Etiam consectetur sem in molestie suscipit. Nulla ac diam enim. Etiam accumsan ligula libero, vitae pulvinar odio pulvinar non. Donec vitae urna rhoncus lectus aliquam convallis. Pellentesque rutrum posuere metus, et volutpat est placerat ut. Cras vitae sem tincidunt, dapibus ex at, rutrum lorem. Morbi aliquet nec purus non rhoncus. Morbi elementum eu urna a finibus. Vivamus tempus quis nunc id posuere.</p>
        <p>Nullam finibus, leo pharetra aliquet ultricies, turpis purus viverra neque, ut varius sapien turpis in urna. Suspendisse egestas molestie urna. Aenean pellentesque ultrices sapien non pellentesque. Mauris leo ligula, porta non eros eget, imperdiet porta libero. Morbi nibh nisl, fringilla eget mauris sed, fringilla vestibulum dui. Aliquam ligula sapien, varius quis lacinia ut, ultrices eu arcu. Praesent condimentum est vel nisl sagittis, at faucibus nulla egestas. Vestibulum vitae semper lacus. Morbi viverra pellentesque nunc non efficitur. Etiam in ex eu quam viverra eleifend. Integer iaculis suscipit risus id facilisis. Suspendisse posuere justo a nibh mollis egestas. Phasellus tincidunt imperdiet nisl, non fringilla sem pretium sit amet. In non diam ut quam faucibus tincidunt.</p>
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
        padding-bottom: 150px;
        gap: 16px;

        background-color: var(--gray1);

        overflow: auto;
    }

    div.container {
        width: 600px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    h1 {
        font-size: 20px;
        font-weight: normal;
        color: var(--gray12);
        letter-spacing: 0.005em;
    }

    h2, h3 {
        color: var(--gray12);
        margin-top: 16px;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
    }

    h3 {
        font-size: 16px;
        font-weight: 500;
    }

    p {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        color: var(--gray12);
    }

    div.profile {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    div.profile > p {
        font-size: 13px;
        font-weight: normal;
        color: var(--gray10);
    }

    img.profile {
        width: 24px;
        height: 24px;

        border-radius: 12px;
        user-select: none;
        cursor: pointer;
    }

    p.date {
        color: var(--gray11);
        margin-bottom: 16px;
    }

    div.container-container {
        width: 100%;
        height: fit-content;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    @media only screen and (max-width: 640px) {
        div.container {
            width: 90vw;
        }
    }
</style>