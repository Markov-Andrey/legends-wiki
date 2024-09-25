const links = [
    {
        href: '#home',
        text: 'About',
        icon: '<i class="las la-2x la-home"></i>'
    },
    {
        href: '#legends',
        text: 'Legends',
        icon: '<i class="las la-2x la-universal-access"></i>'
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
                            <span class="hidden md:block" style="margin-left: 10px;">${linkData.text}</span> <!-- Tailwind classes for visibility -->
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    // Adding event listeners for all links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Disable default anchor behavior
            const href = link.getAttribute('href');
            handleClick(link, href);
        });
    });
}

function handleClick(clickedElement, href) {
    // Remove active link classes from all elements
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
    });

    // Add active link class to the clicked element
    clickedElement.classList.add('active-link');

    // Load the corresponding page
    loadPage(href.slice(1));
}

generateHeader();

// Update the active link on page load
window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash || '#home';
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active-link');
        }
    });
});
