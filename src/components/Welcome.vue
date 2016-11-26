<template>
    <div> 
        <div class="spinner" key="spinner">
            <div class="spinner-a"></div>
            <div class="spinner-b"></div>
            <div class="spinner-c"></div>
        </div>
        <div class="circle-container" key="circle">
            <div class="circle"></div>
        </div>
     </div>  
</template>
<script>
    export default{
        name:'welcome'
    }
</script>
<style scoped>
    .spinner {
        width:100px;
        height:90px;
        animation: rotate 3s infinite ease-in-out;
        margin:100px auto 20px;
    }

    .spinner-a {
        width: 0px;
        height: 0px;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-top: 90px solid #41b883;
    }

    .spinner-b {
        width: 0px;
        height: 0px;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-top: 60px solid #35495e;
        position: relative; 
        top:-90px;
        left:20px;
    }

    .spinner-c {
        width: 0px;
        height: 0px;
        border-left: 12.5px solid transparent;
        border-right: 12.5px solid transparent;
        border-top: 25px solid white;
        position: relative; 
        top:-150px;
        left:37.5px;
        z-index:100;
    }

    @keyframes rotate {
        50% { transform:  rotateY(180deg) }
        100% { transform: rotateY(360deg) rotateX(0deg)}
    }

    .circle-container {
        width: 100%;
        height: 26px;
        text-align: center;
    }
    .circle {
        width: 26px;
        height: 26px;
        margin: 0 auto;
        border: 2px solid rgb(65,184,131);
        border-radius: 50%;
        border-left-color: transparent;
        border-right-color: transparent;
        animation: cssload-spin 500ms infinite linear;
    }

    @keyframes cssload-spin {
        100%{ transform: rotate(360deg); transform: rotate(360deg); }
    }
</style>