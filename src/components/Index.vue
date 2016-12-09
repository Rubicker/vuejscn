<template>
    <welcome></welcome>
</template>

<script>
    import welcome from './Welcome'
    import $ from 'webpack-zepto';

    export default{
        name: 'index',
        components: {
            welcome
        },
        mounted(){
            setTimeout(() => {
                this.$router.push('/list')
            },2500)
        }
    }
</script>
<style>
</style>
