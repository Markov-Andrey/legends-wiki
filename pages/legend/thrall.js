async function thrallPage() {
    const characterData = {
        name: "Thrall",
        subtitle: "Warchief of the Horde",
        image: "public/images/legends/thrall.webp",
        mechanics: [
            {
                title: "Totems",
                description: "Place totems on the battlefield within your line of sight to harness their ancient power."
            },
            {
                title: "Active Totem Mode",
                description: "Only one active mode at a time! Switching modes changes all totems to the selected element (Fire, Air, Water, or Earth), adapting to the battlefield."
            },
            {
                title: "Amulets",
                description: "Your forces have adaptive enhancements; each unit type can be upgraded with one specialized amulet for unique combat advantages."
            }
        ],
        features: [
            { text: "Adaptability", isPositive: true },
            { text: "Broad Support Options", isPositive: true },
            { text: "Powerful Enhancements", isPositive: true },
            { text: "Limited Unit Selection", isPositive: false },
            { text: "Reliance on Totems", isPositive: false },
            { text: "Increasing Totem Costs", isPositive: false }
        ],
        history: `
            <p>Born into slavery, Thrall rose from the chains of captivity to become a legendary leader of the orcish Horde.</p>
            <p>Guided by honor and the teachings of shamanism, he sought to unite his people and lead them to a future free from the corruption that once plagued them.</p>
            <p>Under his leadership, the Horde found new purpose, strength, and a home in the land of Durotar.</p>
            <p>A champion of peace and balance, Thrall’s journey is one of redemption, wisdom, and unbreakable resolve in the face of overwhelming odds.</p>
        `
    };

    return characterComponent(characterData);
}
