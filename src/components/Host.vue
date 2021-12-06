<template>
    <div>
        <label for="host">主催者</label>
        <input
            id="host"
            type="text"
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