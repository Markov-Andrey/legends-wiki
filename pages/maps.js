function mapsPage() {
    return `
    <div class="bg-gray-800 rounded-lg shadow-md text-white p-4">
        <h2 class="text-3xl font-bold text-yellow-300 mb-4 text-center">Alterac's Justice</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img src="public/images/maps/alteracjustice.jpg" alt="Alterac's Justice Map" class="col-span-1 w-full h-auto rounded-lg shadow-lg">
            
            <div class="col-span-3 flex flex-col gap-4">
                <div>
                    <h2 class="font-bold">📘 Description:</h2>
                    <p class="text-base">
                        We find ourselves in Alterac, where the Syndicate is running smuggling operations along their routes. 
                        Our mission is to put an end to their illegal activities.
                    </p>
                </div>
                
                <div>
                    <h2 class="font-bold">✅ Main Objective:</h2>
                    <p class="text-base">
                        Assist the dwarf sniper Stonebeard, who has a high-damage ability with a long reload time. 
                        Your goal is to destroy 5 waves of Syndicate smuggling operations.
                    </p>
                </div>
                
                <div>
                    <h2 class="font-bold">❌ Defeat Conditions:</h2>
                    <p class="text-base">
                        Failure will occur if you allow 5 Syndicate horses to escape.
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
}
