async function utherPage() {
    const characterData = {
        name: "Uther the Lightbringer",
        subtitle: "Paladins of the Silver Hand",
        image: "public/images/legends/uther.webp",
        mechanics: [
            {
                title: "Divine Intervention",
                description: "Protects a unit with Divine Shield when health is low, but no more than 1 time per X min."
            },
            {
                title: "Summon Champions",
                description: "Summon 1 of 3 champions from one of the Paladin paths (Light, Protection, Retribution) to support the army with powerful auras."
            }
        ],
        features: [
            { text: "Easy to learn", isPositive: true },
            { text: "High armor", isPositive: true },
            { text: "High healing potential", isPositive: true },
            { text: "Low movement speed", isPositive: false },
            { text: "Low army attack speed", isPositive: false }
        ],
        history: `
            <p>Uther the Lightbringer, a noble paladin and the first of the Silver Hand, dedicated his life to the protection of the innocent and the eradication of evil.</p>
            <p>Trained by the great prophet, Uther became a beacon of hope during the Third War, leading his fellow paladins against the growing threat of the Scourge.</p>
            <p>His unwavering faith in the Light guided him through countless battles, earning him the respect of allies and foes alike.</p>
            <p>Tragedy struck when he faced his former pupil, Arthas, now the Lich King, forcing Uther to confront the painful choices that led to Arthas' dark transformation.</p>
            <p>Despite the sorrow of loss, Uther continued to fight for justice, becoming a symbol of resilience and sacrifice for future generations.</p>
            <p>His legacy as a champion of the Light endures, inspiring those who seek to uphold honor and righteousness in the face of darkness.</p>
        `
    };

    return characterComponent(characterData);
}
