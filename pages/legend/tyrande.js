async function tyrandePage() {
    const characterData = {
        name: "Tyrande Whisperwind",
        subtitle: "Sisterhood of Elune",
        image: "public/images/legends/tyrande.webp",
        mechanics: [
            {
                title: "Elune's Blessing",
                description: "Tyrande draws power from the Goddess, allowing her to call forth powerful spells on the battlefield."
            },
            {
                title: "Under Night's Veil",
                description: "At night, the effectiveness of certain abilities is further increased."
            }
        ],
        features: [
            { text: "Easy to learn", isPositive: true },
            { text: "High damage", isPositive: true },
            { text: "Night advantages", isPositive: true },
            { text: "Mana-dependent", isPositive: false },
            { text: "Fragile troops", isPositive: false },
            { text: "Few control and support spells", isPositive: false }
        ]
    };

    return characterComponent(characterData);
}
