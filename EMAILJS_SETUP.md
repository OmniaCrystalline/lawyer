# Налаштування EmailJS для відправки форми

## Крок 1: Створення акаунту EmailJS

1. Перейдіть на https://www.emailjs.com/
2. Зареєструйтеся або увійдіть в акаунт
3. Підтвердіть email адресу

## Крок 2: Налаштування Email Service

1. Перейдіть в розділ **Email Services**
2. Натисніть **Add New Service**
3. Виберіть ваш email провайдер (Gmail, Outlook, тощо)
4. Дотримуйтесь інструкцій для підключення
5. Скопіюйте **Service ID** (знадобиться пізніше)

## Крок 3: Створення Email Template

1. Перейдіть в розділ **Email Templates**
2. Натисніть **Create New Template**
3. Використайте наступний шаблон:

**Subject:**
```
Новий запит на дзвінок - {{from_name}}
```

**Content:**
```
Новий запит на дзвінок з сайту

Ім'я: {{from_name}}
Телефон: {{from_phone}}
Тема: {{message}}
Дата відправки: {{date}}

АБО якщо не працює, спробуйте:
Ім'я: {{name}} або {{user_name}}
Телефон: {{phone}} або {{user_phone}}
Тема: {{topic}} або {{message}}
Дата: {{date_short}} о {{time}}

---
Це повідомлення надіслано з форми замовлення дзвінка.
```

**Важливо:** Переконайтеся, що назви змінних у template точно співпадають з тими, що відправляються з форми. Код відправляє всі можливі варіанти:
- `from_name`, `name`, `user_name` - для імені
- `from_phone`, `phone`, `user_phone` - для телефону  
- `message`, `topic` - для теми
- `date` - повна дата з часом (наприклад: "15 січня 2024, 14:30")
- `date_short` - коротка дата (наприклад: "15.01.2024")
- `time` - тільки час (наприклад: "14:30")
- `timestamp` - ISO формат дати

4. Збережіть template та скопіюйте **Template ID**

## Крок 4: Отримання Public Key

1. Перейдіть в розділ **Account** → **General**
2. Скопіюйте **Public Key**

## Крок 5: Налаштування змінних середовища

Створіть файл `.env` в корені проєкту (якщо його немає) та додайте:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Важливо:** 
- Не комітьте файл `.env` в git (додайте його в `.gitignore`)
- Після зміни `.env` перезапустіть сервер розробки (`npm start`)

## Альтернативні рішення

### 1. Formspree (ще простіше)
- Реєстрація на https://formspree.io/
- Отримайте endpoint URL
- Замініть emailjs на fetch запит до Formspree

### 2. Backend API (Node.js + Nodemailer)
- Створіть API endpoint
- Використайте nodemailer для відправки
- Безпечніше, але потребує сервер

### 3. Firebase Functions
- Якщо використовуєте Firebase
- Створіть Cloud Function
- Використайте nodemailer або SendGrid

## Тестування

Після налаштування:
1. Заповніть форму на сайті
2. Перевірте, чи прийшов email
3. Перевірте консоль браузера на наявність помилок

