<template>
    <div class="pt-10">
        <div class="flex gap-3 flex-wrap justify-center mx-auto w-full">
            <div
                v-for="hero in heroes"
                :key="hero.page"
                class="flex-shrink-0"
            >
                <router-link
                    :to="{ name: 'legend', params: { legend: hero.page } }"
                    class="group cursor-pointer flex flex-col items-center transform"
                >
                    <div class="group-hover:scale-110 transition-all duration-500 ease-in-out flex justify-center items-center">
                        <img
                            :src="hero.icon"
                            :alt="hero.name"
                            class="object-cover w-24 h-24 group-hover:contrast-125 group-hover:brightness-125 transition-all"
                        />
                    </div>
                    <span class="mt-2 text-center text-white text-xs group-hover:text-amber-400 transition-colors">
                        {{ hero.title }}
                    </span>
                </router-link>
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
                { name: "Arthas", icon: `${__IMAGE_PATH__}/legends/arthas.webp`, page: "arthas", title: "Arthas Lich King" },
                { name: "Uther", icon: `${__IMAGE_PATH__}/legends/uther.webp`, page: "uther", title: "Uther Lightbringer" },
                { name: "Wrynn", icon: `${__IMAGE_PATH__}/legends/wrynn.webp`, page: "wrynn", title: "Varian Wrynn" },
                { name: "Tyrande", icon: `${__IMAGE_PATH__}/legends/tyrande.webp`, page: "tyrande", title: "Tyrande Whisperwind" },
                { name: "Thrall", icon: `${__IMAGE_PATH__}/legends/thrall.webp`, page: "thrall", title: "Thrall Warchief" },
                { name: "Whitemane", icon: `${__IMAGE_PATH__}/legends/whitemane.webp`, page: "whitemane", title: "Sally Whitemane" },
            ]
        };
    }
};
</script>
