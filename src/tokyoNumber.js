export const tokyoNumber = {
    data(){
        return{
            title: "Welcome to Tokyo",
            subTitle: "Tokyo is a great city"
        }
    },
    filters:{
        lowerCase(value){
            return value.toLowerCase();
        }
    },
}