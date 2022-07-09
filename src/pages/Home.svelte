<script>
    import { Router } from "svelte-routing";
    import Stuffs from '../components/stuffs/Stuffs.svelte';
    import StuffMenu from '../components/stuffs/StuffMenu.svelte';

    export let url = "";
</script>

<Router url="{url}">
    <article class="stuffs">
        <StuffMenu />
        <Stuffs />
    </article>
</Router>