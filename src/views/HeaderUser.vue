<template>
    <div>
        <h2>Users</h2>
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
        </nav>
    </div>
</template>

<style scoped>
.link{
    margin-right: 10px;
}
.link--active{
    font-size: 20pt;
}
</style>