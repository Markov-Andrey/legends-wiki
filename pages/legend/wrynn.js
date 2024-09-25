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
        ]
    };

    return characterComponent(characterData);
}