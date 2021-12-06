<template>
    <div>
        <p>いいね({{halfNumber}})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        totalNumber: {
            type:Number,
            required:true
            //default:10 
        },
        testProps:{
            type:String,
            default:"No String is here"
        }
    },
    computed: {
        halfNumber() {
            return this.totalNumber /2
        }
    },
    methods: {
        increment (){
            this.$emit("my-click",this.totalNumber + 1);
        }
    }
};
</script>

<style scoped>
div {
    border: 1px red;
}
</style>
