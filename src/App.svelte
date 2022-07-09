<script>
  import './assets/styles/index.css'
  import { Router, Route } from "svelte-routing";
  import Header from './components/Header.svelte';
  import Auth from './pages/Auth.svelte';
  import StuffModal from "./components/stuffs/StuffModal.svelte";
  import RegModal from './components/auth/Register.svelte'
  import AuthModal from './components/auth/Auth.svelte'
  import ResetPassModal from './components/auth/ResetPassword.svelte'
  
  // pages
  import Home from './pages/Home.svelte';
  import Cart from './pages/Cart.svelte';
  import Favorites from './pages/Favorites.svelte';
  import PageNotFound from "./pages/PageNotFound.svelte";


  import { stuffModal } from './stores';
  import { regModal } from './stores';
  import { authModal } from './stores';
  import { resetPassModal } from './stores';


  let stuffModalStore = null;
  stuffModal.subscribe(context => {
    stuffModalStore = context;
  });

  let regModalStore = null;
  regModal.subscribe(context => {
    regModalStore = context;
  });

  let authModalStore = null;
  authModal.subscribe(context => {
    authModalStore = context;
  });

  let resetPassModaStore = null;
  resetPassModal.subscribe(context => {
    resetPassModaStore = context;
  });


  export let url = "";
</script>

<Router url="{url}">
  {#if stuffModalStore.id}
    <StuffModal />
  {/if}

  {#if regModalStore.isVisible}
    <RegModal />
  {/if}

  {#if authModalStore.isVisible}
    <AuthModal />
  {/if}

  {#if resetPassModaStore.isVisible}
    <ResetPassModal />
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