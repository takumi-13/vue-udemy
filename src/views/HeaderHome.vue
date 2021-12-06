<template>
    <div>
        <h2>Home</h2>
        <nav>
            <router-link 
            to="/" 
            class="link" 
            active-class="link--active"
            exact
            >Home</router-link>
            <router-link 
            to="/users/1" 
            class = "link" 
            active-class="link--active"
            >Users</router-link>
            <br>
        <button @click="increment(1)">+1</button>
        <button @click="incrementAsync(1)">+1(Async)</button>
        <button @click="decrement(1)">-1</button>
        </nav>
        <hr>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    methods:{
        ...mapActions("count",["increment","decrement","incrementAsync"]),
        return2: () => {
            return 2
        },
    }
}
</script>

<style scoped>
.link{
    margin-right: 10px;
}
.link--active{
    font-size: 20pt;
}
</style>