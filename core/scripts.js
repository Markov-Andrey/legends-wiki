// Функция для загрузки одного скрипта
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `${src}.js`;
        script.async = false;  // Сохраняем последовательность выполнения
        script.onload = () => resolve(src);  // Скрипт загружен
        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта: ${src}`));
        document.head.appendChild(script);  // Добавляем скрипт в <head> для загрузки
    });
}

// Функция для рекурсивной загрузки скриптов
function includeScripts(obj, folder = '') {
    const promises = [];  // Храним все промисы загрузки скриптов

    for (const key in obj) {
        const filePath = folder ? `${folder}/${key}` : key;

        if (typeof obj[key] === 'object') {
            // Рекурсивно проходим по вложенным объектам
            promises.push(...includeScripts(obj[key], filePath));
        } else if (obj[key]) {
            // Если включен, то загружаем скрипт
            promises.push(loadScript(filePath));
        }
    }

    return promises;  // Возвращаем массив промисов
}

// Главная функция для загрузки скриптов
function loadAllScripts(scriptFiles) {
    const promises = includeScripts(scriptFiles);  // Получаем все промисы

    // Ожидаем загрузки всех скриптов
    return Promise.all(promises);
}

// Объект со скриптами
const scriptFiles = {
    constants: {
        'constWeakItems': true,
        'constMediumItems': true,
        'constStrongItems': true,
    },
    pages: {
        '404': true,
        'home': true,
        'legends': true,
        'maps': true,
        'mythic': true,
        'items': true,  // Обратите внимание, что items загружается после constants
        'legend': {
            'arthas': true,
            'uther': true,
            'wrynn': true,
            'tyrande': true,
            'thrall': true,
        },
    },
    core: {
        'render': true,
        'modal': true,
    },
    components: {
        'characterComponent': true,
    },
};

// Запускаем загрузку скриптов
loadAllScripts(scriptFiles).then(() => {
    console.log('Все скрипты загружены');
}).catch((error) => {
    console.error(error);
});
