<script>
  import { Router, Route } from "svelte-routing";
  import './assets/styles/index.css'
  import Header from './components/Header.svelte';
  import Home from './pages/Home.svelte';
  import Cart from './pages/Cart.svelte';
  import Favorites from './pages/Favorites.svelte';
  import Auth from './pages/Auth.svelte';

  export let url = "";
</script>

<Router url="{url}">
  <Header />
  <main class="main">
    <div class="container">
      <Route path="/" component="{Home}" />
      <Route path="/cart" component="{Cart}" />
      <Route path="/favorites" component="{Favorites}" />
      <Route path="/auth" component="{Auth}" />
    </div>
  </main>
</Router>

<style>

</style>