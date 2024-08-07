self.addEventListener('fetch', event => {
    event.respondWith(fetch(event.request));
});

self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon
    });
});

self.addEventListener('sync', event => {
    if (event.tag === 'mySync') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Логика фоновой синхронизации
    console.log('Синхронизация данных в фоне');
}