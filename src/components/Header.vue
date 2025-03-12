<template>
    <header class="bg-gradient-to-b from-gray-900 to-cyan-900 text-white border-b border-gray-700 relative">
        <div class="px-4 py-1 max-w-7xl mx-auto flex items-center justify-between">
            <router-link to="/home" class="flex items-center space-x-3">
                <img :src="logo" class="h-10 w-10" alt="Warcraft Legends Logo" />
                <span class="text-2xl text-amber-400 hover:text-amber-500 transition-all font-semibold hidden sm:block">
                    Warcraft Legends
                </span>
            </router-link>
            <div class="flex space-x-6">
                <div
                    v-for="link in links"
                    :key="link.text"
                    @click="navigateTo(link.href)"
                    class="cursor-pointer flex items-center px-4 py-2 text-lg font-medium rounded-lg transition duration-200"
                    :class="{
                        'bg-gray-700 text-white': isActiveLink(link.href),
                        'text-amber-400 hover:bg-gray-600 hover:text-amber-500': !isActiveLink(link.href),
                        'active:scale-95': true,
                    }"
                >
                    <span v-html="link.icon" class="text-xl"></span>
                    <span class="hidden md:block ml-2">{{ link.text }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            logo: `${__IMAGE_PATH__}/favicon.ico`,
            links: [
                { href: "/home", text: "Home", icon: '<i class="las la-home"></i>' },
                { href: "/legends", text: "Legends", icon: '<i class="las la-universal-access"></i>' },
                { href: "/maps", text: "Maps", icon: '<i class="las la-map"></i>' },
                { href: "/mythic", text: "Mythic+", icon: '<i class="las la-crown"></i>' },
                { href: "/items", text: "Items", icon: '<i class="las la-cookie"></i>' },
            ],
        };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
    },
    methods: {
        navigateTo(href) {
            this.$router.push(href);
        },
        isActiveLink(href) {
            return this.currentPath.startsWith(href);
        },
    },
};
</script>

<style scoped>
</style>
