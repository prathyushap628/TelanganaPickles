<template>
    <div class="header">
        <!-- <div class="navbar">
            <p>
                Home
            </p>
            <p>
                Products
            </p>
            <p>
                About Us
            </p>
            <p>
                Contact Us
            </p>
        </div> -->
        <div>
            <h1>Telangana Pickles</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    padding: 20px;

    font-size: 20px;
    font-weight: 700;
    height: 80vh;
    width: 100%;
    background-image: url(assets/images/bg-2.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    & p:hover {
        color: red;
    }
}

.navbar {
    display: flex;
    justify-content: center;
    gap: 30px;
    color: white;
}

h1 {
    color: red;
    padding-top: 30px;
    text-align: center;
}
</style>
