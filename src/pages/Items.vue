<template>
    <div class="flex flex-col items-center pt-4 pb-12">
        <div class="text-center mb-4">
            <h2 class="text-2xl font-bold text-yellow-300">Items</h2>
            <p class="text-base">
                Explore the unique items that grant you extraordinary powers and boost your stats for the challenges
                ahead!
            </p>
            <p class="text-base">
                All items are divided into three groups based on the strength of the creep camps:
            </p>
            <p class="text-base">
                Weak, Medium, and Strong camps drop different tiers of items, so the tougher the camp, the better the
                rewards!
            </p>
        </div>
        <ItemsSection
            v-for="(section, index) in itemSections"
            :key="index"
            :title="section.title"
            :items="section.items"
            :circle-class="section.circleClass"
        />

        <p class="text-base text-center mt-4 text-gray-300">
            Work in progress!
        </p>
    </div>
</template>

<script>
import ItemsSection from "@/components/ItemsSection.vue";

export default {
    name: "ItemsPage",
    components: {ItemsSection},
    data() {
        return {
            // Сначала объединяем все предметы в одну структуру
            itemSections: [
                {
                    title: "Weak Creep Camp",
                    items: [
                        { icon: "/images/items/green/BTNGauntletsOfOgrePower.webp", name: "Gauntlets of Ogre Strength +3", description: "Increases the Strength of the Hero by 3 when worn" },
                        { icon: "/images/items/green/BTNMantleOfIntelligence.webp", name: "Mantle of Intelligence +3", description: "Increases the Intelligence of the Hero by 3 when worn" },
                        { icon: "/images/items/green/BTNSlippersOfAgility.webp", name: "Slippers of Agility +3", description: "Increases the Agility of the Hero by 3 when worn" },
                        { icon: "/images/items/green/BTNRingGreen.webp", name: "Ring of Protection +3", description: "Increases the armor of the Hero by 3 when worn" },
                        { icon: "/images/items/green/BTNRingGreen.webp", name: "Ring of Protection +4", description: "Increases the armor of the Hero by 4 when worn" },
                        { icon: "/images/items/green/BTNRingGreen.webp", name: "Ring of Protection +5", description: "Increases the armor of the Hero by 5 when worn" },
                        { icon: "/images/items/green/BTNGoldRing.webp", name: "Ring of Superiority", description: "Increases the Strength, Agility and Intelligence of the Hero by 1 when worn" },
                        { icon: "/images/items/green/BTNGlove.webp", name: "Gloves of Haste", description: "Increases the attack speed of the Hero by 18% when worn" },
                        { icon: "/images/items/green/BTNCirclet.webp", name: "Circlet of Nobility", description: "Increases the Strength, Agility and Intelligence of the Hero by 2 when worn" },
                        { icon: "/images/items/green/BTNClawsOfAttack.webp", name: "Claws of Attack +5", description: "Increases the attack damage of the Hero by 5 when worn" },
                        { icon: "/images/items/green/BTNClawsOfAttack.webp", name: "Claws of Attack +8", description: "Increases the attack damage of the Hero by 8 when worn" },
                        { icon: "/images/items/green/BTNPendantOfEnergy.webp", name: "Pendant of Energy", description: "Increases the mana capacity of the Hero by 100 when worn" },
                        { icon: "/images/items/green/BTNPeriapt.webp", name: "Periapt of Vitality", description: "Increases the hit points of the Hero by 50 when worn" },
                        { icon: "/images/items/green/BTNRingSkull.webp", name: "Ring of Regeneration", description: "Increases the Hero's hit point regeneration by 2 hit points per second" },
                        { icon: "/images/items/green/BTNTalisman.webp", name: "Talisman of Evasion", description: "Causes attacks against the wearer to miss 15% of the time. Does not stack with Evasion or Drunken Brawler" }
                    ],
                    circleClass: 'weak',
                },
                {
                    title: "Medium Creep Camp",
                    items: [
                        { icon: "/images/items/yellow/BTNAlleriaFlute.webp", name: "Alleria's Flute of Accuracy", description: "Increases nearby ranged units damage by 7.5%. |nDoes not stack with Trueshot Aura" },
                        { icon: "/images/items/yellow/BTNBelt.webp", name: "Belt of Giant Strength +6", description: "Increases the Strength of the Hero by 6 when worn" },
                        { icon: "/images/items/yellow/BTNBoots.webp", name: "Boots of Quel'Thalas +6", description: "Increases the Agility of the Hero by 6 when worn" },
                        { icon: "/images/items/yellow/BTNDarkSummoning.webp", name: "Diamond of Summoning", description: "Teleports 12 of the player’s units within the targeted area to the location of the Hero when used" },
                        { icon: "/images/items/yellow/BTNRingJadeFalcon.webp", name: "Ring of the Archmagi", description: "A powerful artifact with most of a fragmented gem inset. Increases the Strength, Agility and Intelligence of the Hero by 3" },
                        { icon: "/images/items/yellow/BTNRobeOfTheMagi.webp", name: "Robe of the Magi +6", description: "Increases the Intelligence of the Hero by 6 when worn" },
                        { icon: "/images/items/yellow/BTNRunedBracers.webp", name: "Runed Bracers", description: "Reduces Spell damage dealt to the Hero by 33%" },
                        { icon: "/images/items/yellow/BTNBoneChimes.webp", name: "Scourge Bone Chimes", description: "Grants a melee Hero and friendly nearby melee units life stealing attacks which take 15% of the damage they deal and convert it into life. Does not stack with Vampiric Aura" },
                        { icon: "/images/items/yellow/BTNSobiMask.webp", name: "Sobi Mask", description: "Increases the Hero's rate of mana regeneration by 50% when worn" },
                        { icon: "/images/items/yellow/BTNLionHorn.webp", name: "The Lion Horn of Stormwind", description: "Grants the Hero and friendly nearby units 1 bonus armor. Does not stack with Devotion Aura" },
                        { icon: "/images/items/yellow/BTNJanggo.webp", name: "Ancient Janggo of Endurance", description: "Grants the Hero and friendly nearby units 3% increased attack speed and 5% movement speed. Does not stack with Endurance Aura" },
                        { icon: "/images/items/yellow/BTNClawsOfAttack.webp", name: "Claws of Attack +12", description: "Increases the attack damage of the Hero by 12 when worn" },
                        { icon: "/images/items/yellow/BTNCloakOfFlames.webp", name: "Cloak of Flames", description: "Engulfs the Hero in fire which deals 10 damage per second to nearby enemy land units. Does not stack with Immolation" },
                        { icon: "/images/items/yellow/BTNHelmOfValor.webp", name: "Helm of Valor", description: "Increases the Strength and Agility of the Hero by 5 when worn" },
                        { icon: "/images/items/yellow/BTNHoodOfCunning.webp", name: "Hood of Cunning", description: "Increases the Agility and Intelligence of the Hero by 5 when worn" },
                        { icon: "/images/items/yellow/BTNPipeOfInsight.webp", name: "Khadgar's Pipe of Insight", description: "Grants the Hero and friendly nearby units 0.5% bonus mana regeneration. Does not stack with Brilliance Aura" },
                        { icon: "/images/items/yellow/BTNHornOfDoom.webp", name: "Legion Doom-Horn", description: "Grants the Hero and friendly nearby units 3% life regeneration and 5% increased movement speed. Does not stack with Unholy Aura" },
                        { icon: "/images/items/yellow/BTNMedalionOfCourage.webp", name: "Medallion of Courage", description: "Increases the Strength and Intelligence of the Hero by 5 when worn" },
                        { icon: "/images/items/yellow/BTNDrum.webp", name: "Warsong Battle Drums", description: "Increases the attack damage of nearby friendly units by 7% when worn. Does not stack with War Drums" },
                        { icon: "/images/items/yellow/BTNSpellShieldAmulet.webp", name: "Amulet of Spell Shield", description: "Blocks a negative spell that an enemy casts on the Hero once every 40 seconds" },
                        { icon: "/images/items/yellow/BTNPeriapt1.webp", name: "Khadgar's Gem of Health", description: "Increases the hit points of the Hero by 300 when worn" },
                        { icon: "/images/items/yellow/BTNOrbOfDarkness.webp", name: "Orb of Darkness", description: "Adds 6 bonus damage to the attack of a Hero when carried. The Hero's attack also becomes ranged when attacking air and will create a Dark Minion when it is the killing blow on an enemy unit. The Dark Minion lasts 80 seconds" },
                        { icon: "/images/items/yellow/BTNPendantOfMana.webp", name: "Pendant of Mana", description: "Increases the mana capacity of the Hero by 250 when worn" },
                        { icon: "/images/items/yellow/BTNStaffOfSilence.webp", name: "Staff of Silence", description: "Stops all enemies in a target area from casting spells for 12 seconds" }
                    ],
                    circleClass: 'medium',
                },
                {
                    title: "Strong Creep Camp",
                    items: [
                        { icon: "/images/items/strong/BTNClawsOfAttack.webp", name: "Claws of Attack +15", description: "Increases the attack damage of the Hero by 15 when worn" },
                        { icon: "/images/items/strong/BTNDaggerOfEscape.webp", name: "Kelen's Dagger of Escape", description: "Allows the Hero to teleport a short distance" },
                        { icon: "/images/items/strong/BTNOrbOfFrost.webp", name: "Orb of Frost", description: "Adds 6 bonus cold damage to the attack of a Hero when carried. The Hero's attacks also become ranged when attacking air and slow the movement speed and attack rate of the enemy for 3 seconds" },
                        { icon: "/images/items/strong/BTNHelmutPurple.webp", name: "Crown of Kings +5", description: "Increases the Strength, Intelligence, and Agility of the Hero by 5 when worn" },
                        { icon: "/images/items/strong/BTNMaskOfDeath.webp", name: "Mask of Death", description: "While wearing this mask, a Hero will recover hit points equal to 50% of the attack damage dealt to an enemy unit" },
                        { icon: "/images/items/strong/BTNInfernalStone.webp", name: "Inferno Stone", description: "Calls an Infernal down from the sky, dealing 50 damage and stunning enemy land units for 4 seconds in an area. The Infernal lasts 180 seconds." }
                    ],
                    circleClass: 'strong',
                }
            ]
        };
    },
    methods: {}
};
</script>

<style scoped>
</style>