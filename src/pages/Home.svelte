<script>
    import { Router } from "svelte-routing";
    import Stuffs from '../components/Stuffs.svelte';
    import StuffMenu from '../components/StuffMenu.svelte';

    export let url = "";
</script>

<Router url="{url}">
    <article class="stuffs">
        <StuffMenu />
        <Stuffs />
    </article>
</Router>