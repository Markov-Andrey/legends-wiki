<template>
    <div class="bg-gray-900 mx-auto max-w-4xl">
        <div v-if="characterData" class="rounded-lg shadow-lg my-10 m-10 text-white">
            <div class="flex gap-4">
                <div class="flex-shrink-0 mb-4">
                    <img :src="characterData.image" :alt="characterData.name" class="rounded-lg h-24 w-24 object-cover" />
                </div>
                <div class="flex-grow flex flex-col justify-center">
                    <h1 class="text-4xl text-yellow-400 font-bold">{{ characterData.name }}</h1>
                    <p class="text-xl italic text-gray-400">({{ characterData.subtitle }})</p>
                </div>
            </div>

            <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">History</h2>
                <div class="grid italic text-gray-300 gap-1" v-html="characterData.history"></div>
            </div>

            <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">Mechanics</h2>
                <ul class="list-disc pl-6">
                    <li v-for="(mechanic, index) in characterData.mechanics" :key="index">
                        <span class="font-semibold">{{ mechanic.title }}</span> -
                        <span>{{ mechanic.description }}</span>
                    </li>
                </ul>
            </div>

            <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">Features</h2>
                <ul class="list-disc pl-6">
                    <li v-for="(feature, index) in characterData.features" :key="index">
                        <span :class="feature.isPositive ? 'text-green-400' : 'text-red-400'">
                            {{ feature.text }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div v-else>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CharacterPage',
    data() {
        return {
            characterData: null,
        };
    },
    async created() {
        await this.loadCharacterData();
    },
    methods: {
        async loadCharacterData() {
            const characterName = this.$route.params.legend;

            try {
                const characterModule = await import(`@/assets/legend/${characterName}.js`);
                this.characterData = characterModule.characterData;
            } catch (error) {
                console.error("Ошибка при загрузке данных персонажа:", error);
            }
        },
    },
    watch: {
        '$route.params.legend': 'loadCharacterData',
    },
    beforeRouteUpdate(to, from, next) {
        this.loadCharacterData().then(() => next());
    },
};
</script>

<style scoped>
</style>
