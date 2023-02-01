import { persisted } from 'svelte-local-storage-store';

export const appdata = persisted('appdata', {
    loggedIn: false,
});