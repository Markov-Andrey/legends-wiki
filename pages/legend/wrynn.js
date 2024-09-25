async function wrynnPage() {
    const characterData = {
        name: "Varian Wrynn",
        subtitle: "Stormwind Kingdom",
        image: "public/images/legends/wrynn.webp",
        mechanics: [
            {
                title: "Experience & Rank",
                description: "Units gain experience in battle, increasing their rank and enhancing their core stats, becoming stronger and more resilient."
            },
            {
                title: "Veteran Specialization",
                description: "Upon reaching rank 3, units can learn a valuable ability that makes them even more effective in combat."
            }
        ],
        features: [
            { text: "Easy to learn", isPositive: true },
            { text: "Balanced army", isPositive: true },
            { text: "Strong gold economy", isPositive: true },
            { text: "High price of food", isPositive: false },
            { text: "High cost of losing units", isPositive: false },
            { text: "Few healing abilities", isPositive: false }
        ],
        history: `
            <p>The mighty King of Stormwind, a warrior of strength and determination.</p>
            <p>Born into royalty, Varian’s life was shaped by trials that tested his courage—from the fall of Stormwind to his betrayal and capture.</p>
            <p>Despite these challenges, Varian emerged as a fierce and just leader, earning the name "Lo'Gosh" or "Ghost Wolf" for his battle prowess.</p>
            <p>His reign was characterized by profound love for his people and unwavering commitment to the Alliance. Varian’s legacy of resilience, bravery, and leadership is forever etched in history.</p>
        `
    };

    return characterComponent(characterData);
}