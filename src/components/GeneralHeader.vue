<template>
    <div class="header">
        <header>
            <div class="left-header">
                <router-link to="/"><img src="@/assets/HeaderLogo.jpg" alt="Константа" title="Константа"/></router-link>
            </div>
            <div class="right-header">
                <div class="links">
                    <router-link to="/" class="btn">Главная</router-link>
                    <router-link to="/pallet" class="btn">Поддоны</router-link>
                    <a href="http://pallet-rnd.ru/#about-us" class="btn">О нас</a>
                </div>
                <div class="contacts">
                    <span>+7-(918)-598-99-22</span>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "GeneralHeader"
}
</script>

<style scoped>

</style>