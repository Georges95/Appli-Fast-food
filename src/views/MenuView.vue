<template>
    <div>
        <!--<h1>Menu {{ $route.params.id }}</h1>-->
        <h2>{{ menu.name }}</h2>
        <Back/>
        <div>
            <img @click="getQueryParams"
            :src="`/images/${menu.image}`" :alt="menu.name">
            <p>{{ menu.description }}</p>
        </div>
        <div class="ingredients">
        <router-link 
            v-for="ingredient in menu.ingredients"
                :key="ingredient.slug"
                :to="{name: 'ingredient.show', params: {id: menu.id, slug: ingredient.slug}}"
            >
            <ingredientList
                :ingredient="ingredient"
            />
        </router-link>

        </div>
    </div>
</template>

<script>
import menuData from '@/data.json'
import IngredientList from '@/components/IngredientList.vue';
import Back from '@/components/Back.vue'

export default{
   props:{
    id: {type: Number, required: true},
   },
   
    computed: {
        
        menu(){
            return menuData.menus.find(menu => menu.id === this.id)
        }
    },
    components:{IngredientList, Back},
    methods: {
        getQueryParams(){
            console.log(this.$route.query ['size']);
        }
    }
}
</script>

<style>
.ingredients{
    display: inline-flex;
}
</style>

