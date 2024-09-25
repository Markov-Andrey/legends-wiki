function renderHeroGrid(heroes) {
    return `
        <div class="grid grid-cols-3 mx-auto w-1/2">
            ${heroes.map(hero => `
                <div class="flex justify-center items-center">
                    <div class="cursor-pointer filter hover:contrast-150 hover:brightness-125 transition duration-300" onclick="loadPage('arthas')">
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
            icon: "public/images/legends/arthas1.png",
            page: "arthas",
        },
        {
            name: "Hero 2",
            icon: "public/images/legends/uther1.png",
            page: "arthas",
        },
        {
            name: "Hero 3",
            icon: "public/images/legends/wrynn1.png",
            page: "arthas",
        },
        {
            name: "Hero 4",
            icon: "public/images/legends/tyrande1.png",
            page: "arthas",
        },
        {
            name: "Hero 5",
            icon: "public/images/legends/thrall1.png",
            page: "arthas",
        },
    ];

    return `
        <div class="p-0">
            ${renderHeroGrid(heroes)}
        </div>
    `;
}