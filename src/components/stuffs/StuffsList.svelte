<script>
  export let stuffs = []; 
  export let parentClass = '';

  import StuffFooter from '../stuffs/StuffFooter.svelte';

  import { stuffModal, stuffModalJSON } from '../../stores';

  const showStuffInfo = (stuff) => {
    stuffModal.update(item => {
      return {
        id: stuff.id,
        images: [],
        title: stuff.title,
        description: '',
        properties: [],
        rating: 0,
        price: ''
      }
    })
  }
</script>

<ul class="{parentClass} stuffs-list">
  {#each stuffs as stuff}
    <li class="stuffs-list-item">
      <div on:click={() => showStuffInfo(stuff)} class="stuffs-list-info">
        <div class="stuffs-list-info-image">
          <img src={stuff.image} alt="" />
        </div>
        <h3 class="stuffs-list-info-title">{stuff.title}</h3>
      </div>
      <StuffFooter
        stuff={stuff}
      />
    </li>
  {/each}
</ul>