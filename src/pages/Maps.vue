<template>
    <div class="bg-gray-800 rounded-lg shadow-md text-white p-4">
        <h2 class="text-3xl font-bold text-yellow-300 mb-4 text-center">{{ mapTextData.title }}</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img
                    :src="mapImage"
                    :alt="mapTextData.title"
                    class="col-span-1 w-full h-auto rounded-lg shadow-lg"
            />

            <div class="col-span-3 flex flex-col gap-4">
                <div>
                    <h2 class="font-bold">📘 Description:</h2>
                    <p class="text-base">{{ mapTextData.description }}</p>
                </div>

                <div>
                    <h2 class="font-bold">✅ Main Objective:</h2>
                    <p class="text-base">{{ mapTextData.objective }}</p>
                </div>

                <div>
                    <h2 class="font-bold">❌ Defeat Conditions:</h2>
                    <p class="text-base">{{ mapTextData.defeatCondition }}</p>
                </div>

                <div>
                    <h2 class="font-bold">👑 Special Units:</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div
                                v-for="unit in alteracUnits"
                                :key="unit.name"
                                class="bg-black border-2 border-gray-500 p-2 rounded-lg text-center"
                        >
                            <img
                                    :src="unit.img"
                                    :alt="unit.name"
                                    class="max-w-[200px] h-[200px] object-cover rounded mx-auto"
                            />
                            <h3 class="text-lg font-bold text-yellow-200 mb-2">{{ unit.name }}</h3>
                            <ul class="text-sm text-left">
                                <li v-for="ability in unit.abilities" :key="ability.name" class="mb-2">
                                    <strong>{{ ability.name }}:</strong> {{ ability.description }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MapsPage",
    data() {
        return {
            alteracUnits: [
                {
                    img: "/images/maps/alterac/alterac_unit_1.webp",
                    name: "Syndicate Assassin",
                    abilities: [
                        { name: "Critical Strike", description: "20% chance to deal double damage" },
                        { name: "Envenomed Weapons", description: "Deals periodic poison damage." },
                    ],
                },
                {
                    img: "/images/maps/alterac/alterac_unit_2.webp",
                    name: "Syndicate Ambal",
                    abilities: [
                        { name: "Devotion Aura", description: "Grants nearby allied units increased defense." },
                        { name: "Bash", description: "Has a chance to deal bonus damage and stun the target with a powerful strike." },
                    ],
                },
                {
                    img: "/images/maps/alterac/alterac_unit_3.webp",
                    name: "Syndicate Wizard",
                    abilities: [
                        { name: "Purge", description: "Dispels negative and positive effects on the target." },
                        { name: "Lightning Shield", description: "Creates a shield around the target, periodically dealing damage to nearby enemies." },
                    ],
                },
            ],
            mapTextData: {
                title: "Alterac's Justice",
                description: `
          We find ourselves in Alterac, where the Syndicate is running smuggling operations along their routes.
          Our mission is to put an end to their illegal activities.
        `,
                objective: `
          Assist the dwarf sniper Stonebeard, who has a high-damage ability with a long reload time.
          Your goal is to destroy 5 waves of Syndicate smuggling operations.
        `,
                defeatCondition: `
          Failure will occur if you allow 5 Syndicate horses to escape.
        `,
            },
            mapImage: "/images/maps/alterac/alteracjustice.webp",
        };
    },
};
</script>

<style scoped>
</style>
