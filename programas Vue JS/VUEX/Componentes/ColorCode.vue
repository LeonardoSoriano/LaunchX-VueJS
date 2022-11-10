<template>
    <div>
        <input
        type="text"
        placeholder="pon un codigo de color"
        v-model="colorChange"
        >
    
    </div>
</template>

<script>

export default {
    name: 'ColorCode',
    computed: {
        colorChange: {
            get(){
                return this.$store.state.color;
            },
            set(color){
                this.$store.dispatch("colorChange",color);
            }
        }
    }
}

</script>