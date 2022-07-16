<script>
  import './assets/styles/index.css'
  import { Router, Route } from "svelte-routing";
  import Header from './components/Header.svelte';
  import StuffModal from "./components/stuffs/StuffModal.svelte";

  import { stuffModal } from './stores';
  import { authModal } from './stores';
  
  // pages
  import Home from './pages/Home.svelte';
  import Cart from './pages/Cart.svelte';
  import Favorites from './pages/Favorites.svelte';
  import PageNotFound from "./pages/PageNotFound.svelte";
  import Profile from './pages/Profile.svelte';

  let stuffModalStore = null;
  stuffModal.subscribe(context => {
    stuffModalStore = context;
  });

  let authModalStore = null;
  authModal.subscribe(context => {
    authModalStore = context;
  });

  export let url = "";
</script>

<Router url="{url}">
  {#if stuffModalStore.id}
    <div class="blackover" />
    <StuffModal />
  {/if}

  {#if authModalStore.component}
    <div class="blackover"></div>
    <svelte:component this={authModalStore.component} />
  {/if}

  <Header />
  <main class="main">
    <div class="container">
      <Route path="/" component="{Home}" />
      <Route path="/cart" component="{Cart}" />
      <Route path="/favorites" component="{Favorites}" />
      <Route path="/profile" component="{Profile}" />
      <Route path="*" component={PageNotFound} />
    </div>
  </main>
</Router>

<style>

</style>