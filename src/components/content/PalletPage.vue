<template>
    <div>
        <section class="pallets">
            <div class="content-wrapper ">
                <h1 class="p-title ">
                    Конструкции Поддонов
                </h1>
                <div class="pallets-pictures">
                    <div class="p-wrapper">
                        <img src="@/assets/palet-euro1200x800x144mm.jpg" alt="европаллет" class="p-pic">
                        <h2 class="p-name">
                            Европаллет
                        </h2>
                    </div>
                    <div class="p-wrapper">
                        <img src="@/assets/fin.jpeg" alt="финпаллет" class="p-pic">
                        <h2 class="p-name">
                            Финпаллет
                        </h2>
                    </div>
                    <div class="p-wrapper">
                        <img src="@/assets/Amerikanskiy_pallet.jpg" alt="американский паллет" class="p-pic">
                        <h2 class="p-name">
                            Американский паллет
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <section class="p-table">
            <div class="content-wrapper">
                <table>
                    <thead>
                    <tr>
                        <th class="th1">
                            <font-awesome-icon icon="fa-solid fa-tape"/>
                            <span class="pt-name">РАЗМЕР, мм</span>
                        </th>
                        <th>
                            <font-awesome-icon class="ic" icon="fa-solid fa-trophy" />
                            <span class="pt-name">СОРТ</span>
                        </th>
                        <th>
                            <font-awesome-icon icon="fa-solid fa-clipboard-check" />
                            <span class="pt-name">СТАНДАРТ</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="p in pallets" :key="p.id">
                        <td>{{ p.height }} &times; {{ p.weight }}</td>
                        <td>{{ p.class }}</td>
                        <td>{{ p.standard }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "PalletPage",
    props: ["pallets"]
}
</script>

<style scoped>

</style>