<template>
    <div class="index-page">
        <div class="index-pickle-card">
            <PickleCard />
        </div>

        <div class="contact-us">
            <h2>Contact Us:</h2>
            <p>
                Call us on 9666920871

            </p>
            <p>
                Call us on 8466899206

            </p>
            <p>
                Monday to Saturday - 10 AM to 7 PM
            </p>
            <p>
                for queries email us on kamalakar123@gmail.com
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

const pickleData = [
    { title: 'Gongura Pickle', quantity: '1kg', money: '150RS', imageSrc: 'assets/images/gongura.jpeg' },
    { title: 'Tamato Pickle', quantity: '1kg', money: '300RS', imageSrc: 'assets/images/tamato.jpeg' },
    { title: 'Lemon Pickle', quantity: '1kg', money: '300RS', imageSrc: 'assets/images/tamato.jpeg' },
    { title: 'Amla Pickle', quantity: '1kg', money: '300RS', imageSrc: 'assets/images/tamato.jpeg' },
    { title: 'Chicken Pickle', quantity: '1kg', money: '500RS', imageSrc: 'assets/images/tamato.jpeg' }
];
</script>

<style lang="scss">
.index-page {
    display: flex;
    flex-direction: column;
}

.index-pickle-card {
    // padding: 12px;
    margin: 12px 0px;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

}

.contact-us {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 10px;
    background-color: #030303;
    color: white;
    text-align: center;

    p {
        font-weight: 500;
        font-size: 18px;
    }
}
</style>
