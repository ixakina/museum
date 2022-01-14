const closeBtn = document.querySelector(".close-form");
const openBtn = document.querySelector(".ticket-amount__btn-buy");
const form = document.querySelector(".form");

function openForm() {
  form.classList.add("open");
}

function closeForm(e) {
  form.classList.remove("open");
}

openBtn.addEventListener("click", openForm);
closeBtn.addEventListener("click", closeForm);

form.addEventListener("click", (e) => {
  if (e.target.classList.contains("form")) {
    closeForm();
  }
});
