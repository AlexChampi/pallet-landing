<template>
    <div>
        <section class="main">
            <div class="background-container">
                <div class="image-wrapper">
                </div>
            </div>
            <div class="content-wrapper">
                <div class="headline-content">
                    <div class="headline-copy">
                        <h1 class="headline-title">Поддоны и паллеты в Ростове-на-Дону.</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="company-description" id="about-us">
            <div class="content-wrapper">
                <article class="description">
                    <h2 class="description-title">О нас</h2>
                    <p class="description-text">Компания ООО "Константа" принимаем и продает новые и бывшие в
                        употреблении поддоны. Мы
                        гарантируем своевременную поставку необходимого вам количества качественных поддонов. </p>
                </article>
            </div>
        </section>
        <section class="benefits">
            <div class="content-wrapper">
                <div class="description">
                    <div class="benefits-copy">
                        <h2 class="benefit-title">Наши преимущества</h2>
                    </div>
                    <ul class="benefit-list">
                        <li class="benefit">
                            <h3 class="b-title">ГОСТЫ</h3>
                            <p class="benefit-text">Поддоны по госту</p>
                        </li>
                        <li class="benefit">
                            <h3 class="b-title">Сервис</h3>
                            <p class="benefit-text">Гибкий подход к каждому клиенту</p>
                        </li>
                        <li class="benefit">
                            <h3 class="b-title">Оперативная доставка</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "IndexPage"
}
</script>

<style scoped>
.main {
    padding: 20px 8px 20px;
    min-height: 0;
    max-height: 672px;
    height: 100%;
    position: relative;

}

.main .background-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translate3d(0px, 0px, 0px);
    background: black;
    opacity: 1;
}

.main .background-container .image-wrapper {
    background-image: url("@/assets/Pallets1_2048x1200.jpg");
    background-position: 50% 50%;
    max-width: 100%;
    scale: 1;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .75;
    height: 100%;
}

.main .content-wrapper {
    margin: 0 auto;
    max-width: 1120px;
}

.main .content-wrapper {
    display: flex;
    position: relative;
    margin: 0 auto;
    max-width: 1120px;
}

.main .content-wrapper .headline-content .headline-copy {
    max-width: calc(100% - 48px);
    padding-right: 32px;
    padding-bottom: 80px;
    text-align: center;
}

.main .headline-title {
    font-family: akzidenz-grotesk-pro, arial, sans-serif;
    font-weight: 900;
    font-size: 6.2rem;
    color: white;
    padding: 100px 0 48px;
    margin: 0;
}

</style>