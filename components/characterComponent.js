async function characterComponent(characterData) {
    const { name, subtitle, image, mechanics, features } = characterData;

    return `
        <div class="bg-gray-900 rounded-lg shadow-lg p-6 text-white max-w-4xl mx-auto">
            <!-- Hero Title -->
            <div class="mb-6 flex gap-4">
                <div class="flex-shrink-0 mb-4">
                    <img 
                        src="${image}" 
                        alt="${name}" 
                        class="rounded-lg h-24 w-24 object-cover" 
                    />
                </div>
                <div class="flex-grow flex flex-col justify-center">
                    <h1 class="text-4xl text-yellow-400 font-bold">${name}</h1>
                    <p class="text-xl italic text-gray-400">(${subtitle})</p>
                </div>
            </div>
            
            <!-- Mechanics Section -->
            <div class="mb-6">
                <h2 class="text-2xl font-semibold mb-2">Mechanics</h2>
                <ul class="list-disc pl-6">
                    ${mechanics.map(mechanic => `
                        <li>
                            <span class="font-semibold">${mechanic.title}</span> - 
                            <span>${mechanic.description}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <!-- Features Section -->
            <div>
                <h2 class="text-2xl font-semibold mb-2">Features</h2>
                <ul class="list-disc pl-6">
                    ${features.map(feature => `
                        <li>
                            <span class="${feature.isPositive ? 'text-green-400' : 'text-red-400'}">
                                ${feature.text}
                            </span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}