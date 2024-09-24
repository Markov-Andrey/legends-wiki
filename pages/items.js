async function itemsPage() {
    return `
        <div class="bg-gray-800 rounded-lg shadow-md text-white p-4">
            <h2 class="text-3xl font-bold text-yellow-300 mb-4 text-center">Items</h2>

            <p class="text-base mb-4 text-center">
                Camps are categorized by strength, impacting the loot you receive:
            </p>

            <p class="text-base mb-4">
                <span class="circle weak"></span> <strong>Weak:</strong> Random item from the weak pool.
            </p>
            <p class="text-base mb-4">
                <span class="circle medium"></span> <strong>Medium:</strong> Items from the medium pool.
            </p>
            <p class="text-base mb-4">
                <span class="circle strong"></span> <strong>Strong:</strong> Best items from the strong pool.
            </p>

            <p class="text-base text-center">
                A detailed item table will be available soon!
            </p>
        </div>
    `;
}
