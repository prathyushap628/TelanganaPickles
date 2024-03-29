<template>
    <div class="index-pickle-card">

        <div class="pickle-card">
            <img src="assets/images/gongura.webp" alt="">
            <div>
                <p class="title"> Gongura</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/tamato.jpg" alt="">
            <div>
                <p class="title"> Tomato</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/bitter-guard.webp" alt="">
            <div>
                <p class="title"> Bitter Guard</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/chicken.webp" alt="">
            <div>
                <p class="title"> Chicken</p>
                <!-- <p class="cost"> <span> 1KG</span> 550 RS</p> -->
            </div>
        </div>


        <div class="pickle-card">
            <img src="assets/images/drumstick.webp" alt="">
            <div>
                <p class="title"> Drumstick</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/lemon.jpg" alt="">
            <div>
                <p class="title"> Lemon</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/mango.jpg" alt="">
            <div>
                <p class="title"> Mango</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/kothimera.jpg" alt="">
            <div>
                <p class="title"> Kothimera</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/pandu-mirchi.webp" alt="">
            <div>
                <p class="title"> Pandu Mirchi</p>
                <!-- <p class="cost"> <span> 1KG</span> 350 RS</p> -->
            </div>
        </div>

        <!-- <div class="pickle-card">
            <img src="assets/images/gongura.jpeg" alt="">
            <div>
                <p class="title"> Gongura</p>
                <p class="cost"> <span> 1KG</span> 350 RS</p>
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/gongura.jpeg" alt="">
            <div>
                <p class="title"> Gongura</p>
                <p class="cost"> <span> 1KG</span> 350 RS</p>
            </div>
        </div>

        <div class="pickle-card">
            <img src="assets/images/gongura.jpeg" alt="">
            <div>
                <p class="title"> Gongura</p>
                <p class="cost"> <span> 1KG</span> 350 RS</p>
            </div>
        </div> -->


    </div>
</template>

<script lang="ts" setup>

// defineProps({
//     title: {
//         type: String,
//         required: true,
//     },

//     quantity: {
//         type: String,
//         required: true,
//     },

//     money: {
//         type: String,
//         required: true,
//     },

//     // imageSrc: {
//     //     type: String,
//     //     required: true,
//     // }

// })

</script>

<style lang="scss">
.pickle-card {
    background-color: white;
    width: 350px;
    height: 346px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    img {
        width: 146px;
        height: 198px;
        border-radius: 24px;
        transition: all 0.3s ease;
        object-fit: cover;
    }

    .title {
        font-weight: 700;
        font-size: 22px;
        color: black;
        white-space: normal;
    }

    .cost {
        font-weight: 400;
        font-size: 18px;
        color: black;
        white-space: normal;
    }

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
}
</style>
