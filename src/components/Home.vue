<template>
    <div>
    <p v-border:solid.shadow="{width: '1px', color:'red'}">Home</p>
    <h2> {{title | upperCase}}</h2>
    <h2> {{subTitle | upperCase | lowerCase}}</h2>
    <countNumber></countNumber>
    </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import {tokyoNumber} from "@/tokyoNumber"
export default {
    mixins:[tokyoNumber],
    components:{
        CountNumber
    },
    computed:{
        uppeCaseTitle(){
            return this.title.toUpperCase();
        }
    },
    directives:{
        border(el,binding){
            el.style.borderWidth = binding.value.width;
            el.style.borderColor = binding.value.color;
            el.style.borderStyle = binding.arg;
            if (binding.modifiers.round) {
                el.style.borderRadius = "0.5rem";
            }
            if (binding.modifiers.shadow) {
                el.style.boxShadow = "0 1px 5px rgba(255,255,0,100)";
            }
        }
    }
}
</script>