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
        ],
        history: `
            <p>High Priestess of Elune, protector of the night elves, and a beacon of wisdom and strength. For millennia, Tyrande has led her people with grace and determination, balancing the serenity of her goddess with the ferocity of a warrior.</p>
            <p>In times of war and peace, she remains steadfast, guiding her people through the darkest of times with unyielding resolve. Her devotion to Elune and her love for Malfurion have defined her long life, as she continues to stand as a symbol of hope, wisdom, and unshakable faith.</p>
        `
    };

    return characterComponent(characterData);
}
