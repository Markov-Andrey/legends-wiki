async function itemsPage() {
    const weak_items = constWeakItems();
    const medium_items = constMediumItems();
    const strong_items = constStrongItems();

    const createItemsSection = (items, title, circleClass) => {
        const itemsHTML = items.map(item => `
        <div class="flex flex-col items-center p-2 bg-gray-800 rounded-lg transition-shadow duration-200 hover:bg-gray-700">
            <div class="relative rounded-lg overflow-hidden flex items-center justify-center w-16 h-16 bg-transparent border border-gray-600 shadow-inner">
                <img src="${item.icon}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover scale-110">
            </div>
            <h3 class="mt-2 text-base font-bold text-center leading-tight">${item.name}</h3> <!-- Уменьшен размер текста и добавлено выравнивание по центру -->
            <p class="text-sm text-white text-center mt-1 leading-tight">${item.description}</p> <!-- Уменьшен размер текста и добавлено выравнивание по центру -->
        </div>
    `).join('');

        return `
        <h3 class="text-xl font-bold m-4 text-yellow-300"><div class="circle ${circleClass}"></div>${title}</h3>
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-screen-lg">
            ${itemsHTML}
        </div>
    `;
    };

    return `
        <div class="flex flex-col items-center">
            <div class="text-center mb-4">
                <h2 class="text-2xl font-bold text-yellow-300">Items</h2>
                <p class="text-base">
                    Explore the unique items that grant you extraordinary powers and boost your stats for the challenges ahead!
                </p>
                <p class="text-base">
                    All items are divided into three groups based on the strength of the creep camps:
                </p>
                <p class="text-base">
                    Weak, Medium, and Strong camps drop different tiers of items, so the tougher the camp, the better the rewards!
                </p>
            </div>
        
            ${createItemsSection(weak_items, 'Weak Creep Camp', 'weak')}
            ${createItemsSection(medium_items, 'Medium Creep Camp', 'medium')}
            ${createItemsSection(strong_items, 'Strong Creep Camp', 'strong')}
        
            <p class="text-base text-center mt-4 text-gray-300">
                Work in progress!
            </p>
        </div>
    `;
}
