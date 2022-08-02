<template>
    <article class="favorites container">
        <header class="favorites-header">
            <img class="favorites-header-logo" src="@/assets/images/Heart.svg" alt="">
            <h2 class="favorites-header-title">Избранное {{stuffs.length}}</h2>
        </header>
        <StuffsList parentClass='stuffs-list--favorites' :stuffs="stuffs" />
    </article>
</template>

<script>
import StuffsList from '@/components/stuffs/StuffsList'

export default {
    components: {
        StuffsList
    },
    data() {
        return {
            stuffs: [
                {
                    id: 1,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '7999',
                },
                {
                    id: 2,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 3,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 4,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
                {
                    id: 5,
                    image: 'rod.png',
                    title: 'Удилище',
                    price: '13999',
                },
            ]
        }
    }
}
</script>