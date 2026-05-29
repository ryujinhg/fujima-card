// サービスワーカーのインストール
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  // 待機状態に入らず、すぐにアクティベートさせる
  self.skipWaiting();
});

// サービスワーカーのアクティベート
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  // 制御を開始する
  return self.clients.claim();
});

// 【最重要】Chromeのアプリ化条件を満たすためのフェッチ処理
self.addEventListener('fetch', (event) => {
  // ここは空でもイベントが存在していることが重要です
});
