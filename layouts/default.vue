<template>
    <div class="layout layout--default">

        <Header />

        <main>
            <slot />

        </main>

    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

.layout {
    background-color: lightgray;
    overflow: hidden;


}
</style>
