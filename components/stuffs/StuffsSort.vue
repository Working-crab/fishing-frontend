<template>
    <div class="stuffs-sort">
        <div class="stuffs-sort-control">
            <label for="price" class="stuffs-sort-label">Цена (₽)</label>
            <div class="stuffs-sort-group">
            <input type="number" name="price" class="stuffs-sort-input input" id="price-from" placeholder="От 3 999">
            <span> — </span>
            <input type="number" name="price" class="stuffs-sort-input input" id="price-to" placeholder="До 14 999">
            </div>
        </div>
        <div class="stuffs-sort-control">
            <label for="length" class="stuffs-sort-label">Длина</label>
            <div class="stuffs-sort-group">
            <input type="number" name="length" class="stuffs-sort-input input" id="length-from" placeholder="От 50">
            <span> — </span>
            <input type="number" name="length" class="stuffs-sort-input input" id="length-to" placeholder="До 150">
            </div>
        </div>
        <div class="stuffs-sort-control">
            <label for="quantity" class="stuffs-sort-label">Количество</label>
            <InputCounter
            name="quantity"
            className="stuffs-sort-input"
            :minValue="0"
            :maxValue="3"
            />
        </div>
        <div class="stuffs-sort-control">
            <label for="type" class="stuffs-sort-label">Тип</label>
            <TypeContainer
            name="quantity"
            dropdownClass="stuffs-sort-input"
            options={types}
            />
        </div>
    </div>
</template>

<script>
import InputCounter from '@/components/InputCounter'
import InputSelect from '@/components/InputSelect'
export default {
    components: {
        InputCounter,
        InputSelect
    }
}
</script>

