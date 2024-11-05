
function content() {
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const icon = accordion.querySelector(".icon");
            const accordionContent = accordion.querySelector(".accordion__content");

            accordionContent.classList.toggle("active");
            icon.classList.toggle("active");
        });
    });
}

// Вызов функции
content();

// Получаем все элементы модальных окон
const modals = document.querySelectorAll(".modal");
const openModalBtns = document.querySelectorAll(".openModalBtn");
const closeBtns = document.querySelectorAll(".close-btn");

// Функция для открытия модального окна
openModalBtns.forEach(button => {
  button.onclick = function () {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  };
});

// Функция для закрытия модального окна
closeBtns.forEach(button => {
  button.onclick = function () {
    const modal = button.closest(".modal");
    modal.style.display = "none";
  };
});

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
