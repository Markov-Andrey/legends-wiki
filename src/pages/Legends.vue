<template>
    <div class="p-0">
        <div class="flex flex-wrap justify-center mx-auto w-full">
            <div
                v-for="hero in heroes"
                :key="hero.page"
                class="hero-item flex-shrink-0 w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7"
            >
                <div
                    class="cursor-pointer filter hover:contrast-125 hover:brightness-125 transition duration-300"
                    @click="$router.push({ name: 'legend', params: { legend: hero.page } })"
                >
                    <img
                        :src="hero.icon"
                        :alt="hero.name"
                        class="object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LegendsPage",
    data() {
        return {
            heroes: [
                { name: "Arthas", icon: "public/images/legends/arthas.webp", page: "arthas" },
                { name: "Uther", icon: "public/images/legends/uther.webp", page: "uther" },
                { name: "Wrynn", icon: "public/images/legends/wrynn.webp", page: "wrynn" },
                { name: "Tyrande", icon: "public/images/legends/tyrande.webp", page: "tyrande" },
                { name: "Thrall", icon: "public/images/legends/thrall.webp", page: "thrall" },
                { name: "Whitemane", icon: "public/images/legends/whitemane.webp", page: "whitemane" }
            ]
        };
    }
};
</script>
