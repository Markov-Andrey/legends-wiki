// Объект роутера
const webRoutes = {
    'home': {
        'method': homePage,
        'title': 'Home',
    },
    'items': {
        'method': itemsPage,
        'title': 'Items',
        'css': 'items'
    },
    'legends': {
        'method': legendsPage,
        'title': 'Legends',
    },
    'arthas': {
        'method': arthasPage,
        'title': 'Arthas',
    },
    'uther': {
        'method': utherPage,
        'title': 'Uther',
    },
    'wrynn': {
        'method': wrynnPage,
        'title': 'Wrynn',
    },
    'tyrande': {
        'method': tyrandePage,
        'title': 'Tyrande',
    },
    'thrall': {
        'method': thrallPage,
        'title': 'Thrall',
    },
    'maps': {
        'method': mapsPage,
        'title': 'Maps',
    },
    'mythic': {
        'method': mythicPage,
        'title': 'Mythic+',
        'css': 'hobby',
    },
    '404': {
        'method': errorPage,
        'title': '404',
    }
};

// Первая загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    const page = hash ? hash.substring(1) : 'home';

    webRoutes.hasOwnProperty(page) ? loadPage(page) : loadPage('404');
});

// Выполнение роутинга
async function loadPage(page) {
    const contentDiv = document.getElementById('content');
    const title = document.getElementById('title');

    const { method, title: pageTitle, css } = webRoutes[page] || webRoutes['404'];

    // Убираем активную ссылку у всех элементов
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
    });

    // Находим текущую ссылку и добавляем класс active-link
    const currentLink = [...document.querySelectorAll('.group')].find(link => link.getAttribute('href') === `#${page}`);
    if (currentLink) {
        currentLink.classList.add('active-link');
    }

    // Загрузка CSS, если есть
    if (css) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = `css/${css}.css`;
        document.head.appendChild(linkElement);
    }

    contentDiv.innerHTML = '<div class="loading-spinner"></div>';

    try {
        contentDiv.innerHTML = await method();
        initModal();
    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = 'Failed to load the page.';
    }

    window.location.hash = `#${page}`;

    title.innerHTML = pageTitle;
}
