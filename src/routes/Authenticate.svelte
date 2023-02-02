<script lang="ts">
    import { signIn } from "../app";
</script>

<div class="login">
    <h1>Create a new profile ✨🗿</h1>  
    <p>If you don't have an account, one will be created automatically.</p>  
    <button on:click={signIn}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.92 9.1875C16.92 8.6025 16.8675 8.04 16.77 7.5H9V10.695H13.44C13.245 11.7225 12.66 12.5925 11.7825 13.1775V15.255H14.46C16.02 13.815 16.92 11.7 16.92 9.1875Z" fill="#4285F4"/>
            <path d="M8.99977 17.2502C11.2273 17.2502 13.0948 16.5152 14.4598 15.2552L11.7823 13.1777C11.0473 13.6727 10.1098 13.9727 8.99977 13.9727C6.85477 13.9727 5.03227 12.5252 4.37977 10.5752H1.63477V12.7052C2.99227 15.3977 5.77477 17.2502 8.99977 17.2502Z" fill="#34A853"/>
            <path d="M4.38 10.5677C4.215 10.0727 4.1175 9.54773 4.1175 9.00023C4.1175 8.45273 4.215 7.92773 4.38 7.43273V5.30273H1.635C1.0725 6.41273 0.75 7.66523 0.75 9.00023C0.75 10.3352 1.0725 11.5877 1.635 12.6977L3.7725 11.0327L4.38 10.5677Z" fill="#FBBC05"/>
            <path d="M8.99977 4.035C10.2148 4.035 11.2948 4.455 12.1573 5.265L14.5198 2.9025C13.0873 1.5675 11.2273 0.75 8.99977 0.75C5.77477 0.75 2.99227 2.6025 1.63477 5.3025L4.37977 7.4325C5.03227 5.4825 6.85477 4.035 8.99977 4.035Z" fill="#EA4335"/>
            </svg>
            Continue with Google
    </button>      
    <a href="/explore">Back</a>      
</div>

<style>
    h1 {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray12);
    }

    p {
        font-size: 13px;
        font-weight: normal;
        color: var(--gray11);
    }

    button {
        background-color: var(--gray3);
        color: var(--gray12);
        border: 1px solid var(--gray5);
        border-radius: 6px;

        width: 100%;
        height: 32px;

        font-size: 13px;
        cursor: pointer;
        outline: none;

        margin-top: 8px;

        display: flex;
        flex-direction: row;
        gap: 6px;
        align-items: center;
        justify-content: center;

        transition: border 0.1s var(--ease), transform 0.1s var(--ease)
    }

    button:hover {
        transform: scale(1.05);
    }

    a {
        font-size: 13px;
        color: var(--gray9);
        padding: 8px 0px;
        font-weight: 600;
        text-decoration: none;
    }

    button:hover {
        border: 1px solid var(--gray6);
    }

    button:active {
        transform: scale(0.97);
    } 

    div.login {
        background: var(--gray2);
        border: 1px solid var(--gray3);
        border-radius: 6px;
        
        width: 350px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        padding: 24px;
        gap: 8px;

        animation: enter 0.6s var(--ease);
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
</style>