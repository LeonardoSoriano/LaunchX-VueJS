<template>
    <div class="home">
        <img src="../Imagenes/vue.png" alt="Vue logo">
        <Counter/>
        <ContadorCuadrado/>
        <Botones/>
        <ColorCode/>
    </div>
</template>

<script>
import Counter from "../Componentes/Counter.vue";
import ContadorCuadrado from "../Componentes/ContadorCuadrado.vue";
import Botones from "../Componentes/Botones.vue";
import ColorCode from "../Componentes/ColorCode.vue";

export default {

    name: 'HomeView',

    components:{
        Counter,
        ContadorCuadrado,
        Botones,
        ColorCode
    }
}
</script>

<style>
div{
    margin-bottom: 10px;
}

.counter{
    font-size: 80px;
}

.buttons button{
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
}
</style>