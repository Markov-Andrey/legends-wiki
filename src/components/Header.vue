<template>
    <div class="border-b border-gray-200 dark:border-gray-700 dark:bg-cyan-950">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li v-for="link in links" :key="link.href">
                <router-link
                    :to="link.href"
                    class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group hover:text-white hover:border-gray-300"
                    :class="{ 'active-link': isActiveLink(link.href) }"
                >
                    <span v-html="link.icon"></span>
                    <span class="hidden md:block" style="margin-left: 10px;">{{ link.text }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            links: [
                { href: '/home', text: 'Home', icon: '<i class="las la-2x la-home"></i>' },
                { href: '/legends', text: 'Legends', icon: '<i class="las la-2x la-universal-access"></i>' },
                { href: '/maps', text: 'Maps', icon: '<i class="las la-2x la-map"></i>' },
                { href: '/mythic', text: 'Mythic+', icon: '<i class="las la-2x la-crown"></i>' },
                { href: '/items', text: 'Items', icon: '<i class="las la-2x la-cookie"></i>' },
            ],
        };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        }
    },
    methods: {
        isActiveLink(href) {
            return (href === '/' && this.currentPath === '/') || (this.currentPath !== '/' && this.currentPath.startsWith(href));
        }
    }
};
</script>

<style scoped>
.active-link {
    color: white;
    border-color: gray;
}
</style>
