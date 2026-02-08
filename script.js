function showCategory(category, button) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.tab-btn');

    // Активна кнопка
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Фільтрація меню
    items.forEach(item => {
        if (item.classList.contains(category)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Категорія за замовчуванням
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-btn').click();
});
