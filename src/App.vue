<template>
    <div id="app">
        <GeneralHeader/>
        <main>
            <router-view/>
        </main>
        <GeneralFooter/>
    </div>
</template>

<style>
</style>

<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import GeneralFooter from "@/components/GeneralFooter.vue";

export default {
    name: "App",
    components: {
        GeneralHeader,
        GeneralFooter
    }
}
</script>