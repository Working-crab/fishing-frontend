<script>
  import './assets/styles/index.css'
  import { Router, Route } from "svelte-routing";
  import Header from './components/Header.svelte';
  import Auth from './pages/Auth.svelte';
  import StuffModal from "./components/StuffModal.svelte";
  
  // pages
  import Home from './pages/Home.svelte';
  import Cart from './pages/Cart.svelte';
  import Favorites from './pages/Favorites.svelte';
  import PageNotFound from "./pages/PageNotFound.svelte";


  import { stuffModal } from './stores';

  let stuffModalStore = null;
  stuffModal.subscribe(context => {
    stuffModalStore = context;
  });

  export let url = "";
</script>

<Router url="{url}">
  {#if stuffModalStore.id}
    <StuffModal />
  {/if}

  <Header />
  <main class="main">
    <div class="container">
      <Route path="/" component="{Home}" />
      <Route path="/cart" component="{Cart}" />
      <Route path="/favorites" component="{Favorites}" />
      <Route path="/auth" component="{Auth}" />
      <Route path="*" component={PageNotFound} />
    </div>
  </main>
</Router>

<style>

</style>