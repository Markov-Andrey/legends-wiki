function homePage() {
    return `
        <div class="flex flex-col justify-center items-center">
            <div class="text-center max-w-4xl">
                <!-- Логотип в центре -->
                <div class="flex justify-center mb-4">
                    <img src="public/images/home/whatweknow121.png" alt="WarCraft Legends Logo" class="max-w-full h-56 shadow-lg"> <!-- Уменьшение высоты до 56 -->
                </div>
                <!-- Описание проекта -->
                <h1 class="sr-only">WarCraft Legends</h1>
                <p class="text-md sm:text-lg lg:text-xl mb-6 leading-relaxed"> <!-- Уменьшение шрифтов -->
                    Welcome to <span class="font-bold text-yellow-300">WarCraft Legends</span> — a unique adaptation of StarCraft's co-op mode for 
                    <span class="font-bold text-yellow-300">WarCraft Reforged</span>.
                    Here you'll find familiar mechanics, legendary heroes, and dynamic battles, woven into the epic world of Azeroth.
                    Join forces with your friends and dive into epic battles against overwhelming enemy forces!
                </p>
                <!-- Дополнительный текст -->
                <p class="text-sm sm:text-md lg:text-lg leading-loose"> <!-- Уменьшение шрифтов -->
                    This project is inspired by classic Blizzard strategies and is designed for those who want to experience
                    a beloved gaming experience in a new way. Prepare yourself to battle for survival in co-op missions,
                    playing as heroes from the WarCraft universe.
                </p>
                <p class="mt-3 text-sm sm:text-md lg:text-lg font-semibold"> <!-- Уменьшение шрифтов -->
                    Gather your allies, build your bases, and set out into legendary battles!
                </p>
            </div>
            <!-- Приписка о правах -->
            <footer class="mt-8 text-xs sm:text-sm lg:text-md text-gray-500 text-center max-w-2xl"> <!-- Уменьшение шрифтов -->
                <p>
                    All rights to trademarks and characters belong to Blizzard Entertainment. 
                    This project is a fan-made creation by map makers and is not affiliated with or endorsed by Blizzard.
                </p>
            </footer>
        </div>
    `;
}
