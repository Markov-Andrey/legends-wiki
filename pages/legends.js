function renderHeroGrid(heroes) {
    return `
        <div class="grid grid-cols-3 mx-auto w-1/2">
            ${heroes.map(hero => `
                <div class="flex justify-center items-center">
                    <div class="cursor-pointer filter hover:contrast-125 hover:brightness-125 transition duration-300" onclick="loadPage('${hero.page}')">
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
            name: "Arthas",
            icon: "public/images/legends/arthas.webp",
            page: "arthas",
        },
        {
            name: "Uther",
            icon: "public/images/legends/uther.webp",
            page: "uther",
        },
        {
            name: "Wrynn",
            icon: "public/images/legends/wrynn.webp",
            page: "wrynn",
        },
        {
            name: "Tyrande",
            icon: "public/images/legends/tyrande.webp",
            page: "tyrande",
        },
        {
            name: "Thrall",
            icon: "public/images/legends/thrall.webp",
            page: "thrall",
        },
    ];

    return `
        <div class="p-0">
            ${renderHeroGrid(heroes)}
        </div>
    `;
}