<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザ１</router-link>
        <router-link to="/users/2">ユーザ２</router-link>
        <hr>
        <h1>User No. {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザ</router-link>
        <router-link :to="{name: 'users-id-profile', params:{id: Number(id) +1}, query:{lang: 'ja' ,page:2}}">次のユーザ</router-link>
        <router-view></router-view>

    </div>
</template>
<script>
export default {
    props:["id"],
    /*
    beforeRouteLeave(to,from,next){
        const isLeave = window.confirm("本当にこのページを離れますか？")
        isLeave ? next() : next(false)
    }
    */
    
}
</script>