const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 1,
  });

  const submitEmail = document.querySelector("#input_submit")
  const email = document.querySelector(".email")
  const email_submit = document.querySelector(".email_submit")

  submitEmail.addEventListener("click", () => {
    console.log(1)
    email.style.display='none'
    email_submit.style.display='flex'
  })