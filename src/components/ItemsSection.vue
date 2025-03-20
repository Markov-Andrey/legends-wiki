<template>
    <div>
        <h3 class="text-xl font-bold m-4 text-yellow-300">
            <div class="circle" :class="circleClass"></div>{{ title }}
        </h3>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-screen-lg">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="flex flex-col items-center p-2 bg-gray-800 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:scale-105 hover:saturate-150 transform"
            >
                <div class="relative rounded-lg overflow-hidden flex items-center justify-center w-16 h-16 bg-transparent border border-gray-600 shadow-inner">
                    <img
                        :src="item.icon"
                        :alt="item.name"
                        class="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-300"
                    />
                </div>
                <h3 class="mt-2 text-base font-bold text-center leading-tight">{{ item.name }}</h3>
                <p class="text-sm text-white text-center mt-1 leading-tight">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemsSection',
    props: {
        title: String,
        items: Array,
        circleClass: String
    }
};
</script>

<style scoped>
</style>
