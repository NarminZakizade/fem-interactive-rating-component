const form = document.getElementById('query');
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    document.getElementsByClassName("card__initial")[0].classList.add("hidden");
    document.getElementsByClassName("card__submission")[0].classList.remove("hidden");
    const submission=document.querySelector(`input[name="rating"]:checked`).value;
    document.getElementById("answer").innerHTML=submission;
  });