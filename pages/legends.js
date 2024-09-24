function renderHeroGrid(heroes) {
    return `
        <div class="grid grid-cols-3 mx-auto w-1/2">
            ${heroes.map(hero => `
                <div class="flex justify-center items-center">
                    <div class="cursor-pointer" onclick="loadPage('home')">
                        <img 
                            src="${hero.icon}" 
                            alt="${hero.name}" 
                            class="object-cover w-full"
                        >
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function legendsPage() {
    const heroes = [
        {
            name: "Hero 1",
            icon: "public/images/legends/arthas1.png" // Path to icon
        },
        {
            name: "Hero 2",
            icon: "public/images/legends/uther1.png"
        },
        {
            name: "Hero 3",
            icon: "public/images/legends/wrynn1.png"
        },
        {
            name: "Hero 4",
            icon: "public/images/legends/tyrande1.png"
        },
        {
            name: "Hero 5",
            icon: "public/images/legends/thrall1.png"
        },
        // Add more heroes as needed
    ];

    return `
        <div class="p-0">
            ${renderHeroGrid(heroes)}
        </div>
    `;
}