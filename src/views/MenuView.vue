<template>
    <div>
        <!--<h1>Menu {{ $route.params.id }}</h1>-->
        <h2>{{ menu.name }}</h2>
        <div>
            <img :src="`/images/${menu.image}`" :alt="menu.name">
            <p>{{ menu.description }}</p>
        </div>
        <div class="ingredients">
            <ingredientList
                v-for="ingredient in menu.ingredients"
                :key="ingredient.slug"
                :ingredient="ingredient"
            />
        </div>
    </div>
</template>

<script>
import menuData from '@/data.json'
import IngredientList from '@/components/IngredientList.vue';

export default{
   props:{
    id: {type: Number, required: true},
   },
   
    computed: {
        /*menuId(){
            return parseInt(this.$route.params.id)
        },*/

        menu(){
            return menuData.menus.find(menu => menu.id === this.id)
        }
    },
    components:{IngredientList},
}
</script>

<style>
.ingredients{
    display: inline-flex;
}
</style>

