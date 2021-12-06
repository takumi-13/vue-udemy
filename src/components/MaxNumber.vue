<template>
    <div>
        <label for="maxNumber">最大人数</label>
        <input
            id="maxNumber"
            type="number"
            :value="value"
            @input="$emit('input',$event.target.value)"
        >
        <p>{{value}}</p>
    </div>
</template>

<script>
export default {
    props:["value"]
}
</script>