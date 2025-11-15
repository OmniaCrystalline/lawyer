# Інструкція по деплою на Firebase

## Перший раз (якщо ще не налаштовано)

1. **Встановіть Firebase CLI** (якщо ще не встановлено):
   ```bash
   npm install -g firebase-tools
   ```

2. **Увійдіть в Firebase**:
   ```bash
   firebase login
   ```

3. **Ініціалізуйте проєкт** (якщо ще не зроблено):
   ```bash
   firebase init hosting
   ```

## Оновлення деплою (після змін в коді)

### Варіант 1: Використання npm скрипту (рекомендовано)
```bash
npm run deploy
```
Або тільки hosting:
```bash
npm run deploy:hosting
```

### Варіант 2: Вручну

1. **Збілдіть проєкт**:
   ```bash
   npm run build
   ```

2. **Задеплойте на Firebase**:
   ```bash
   firebase deploy
   ```
   
   Або тільки hosting:
   ```bash
   firebase deploy --only hosting
   ```

## Що відбувається:

1. `npm run build` - створює оптимізовану production версію в папці `build/`
2. `firebase deploy` - завантажує збілджені файли на Firebase Hosting

## Перевірка деплою:

Після успішного деплою ви побачите URL вашого сайту, наприклад:
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/your-project/overview
Hosting URL: https://lawyer-help5.firebaseapp.com
```

## Важливо:

- Переконайтеся, що файл `.env` з EmailJS налаштуваннями не потрапить в build (він вже в `.gitignore`)
- Після деплою перевірте, чи працюють всі функції на production URL
- Якщо є помилки, перевірте консоль браузера та Firebase Console

## Швидкий деплой (одна команда):

```bash
npm run deploy
```

Це автоматично збілдить проєкт та задеплоїть його на Firebase.

