const links = [
    {
        href: '#home',
        text: 'About',
        icon: '<i class="las la-2x la-home"></i>'
    },
    {
        href: '#legends',
        text: 'Legends',
        icon: '<i class="las la-2x la-grin-stars"></i>'
    },
    {
        href: '#maps',
        text: 'Maps',
        icon: '<i class="las la-2x la-map"></i>'
    },
    {
        href: '#mythic',
        text: 'Mythic+',
        icon: '<i class="las la-2x la-crown"></i>'
    },
    {
        href: '#items',
        text: 'Items',
        icon: '<i class="las la-2x la-cookie"></i>'
    },
];

function generateHeader() {
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.innerHTML = `
        <div class="border-b border-gray-200 dark:border-gray-700 dark:bg-cyan-950">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                ${links.map(linkData => `
                    <li>
                        <a href="${linkData.href}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group hover:text-white hover:border-gray-300
                            ${window.location.hash === linkData.href ? 'active-link' : ''}">
                            ${linkData.icon ?? ''}
                            <span style="margin-left: 10px;">${linkData.text}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Добавляем обработчики событий для всех ссылок
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Отключаем стандартное поведение перехода по ссылке
            const href = link.getAttribute('href');
            handleClick(link, href);
        });
    });
}

function handleClick(clickedElement, href) {
    // Убираем классы активной ссылки у всех элементов
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
    });

    // Добавляем класс активной ссылке
    clickedElement.classList.add('active-link');

    // Загружаем соответствующую страницу
    loadPage(href.slice(1));
}

generateHeader();

// Обновляем активную ссылку при загрузке страницы
window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash || '#home';
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active-link');
        }
    });
});
