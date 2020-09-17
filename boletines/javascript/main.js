
//DOM
// querySelector  / querySelectorAll
/*let links = document.querySelectorAll("a");

links.forEach(function(link) {
  console.log(link);
});
*/
let links = document.querySelectorAll(".close");

links.forEach(function (link) {
  link.addEventListener("click",function(ev) {
    ev.preventDefault();
    let conteiner = document.querySelector('.conteiner')
    content.classList.remove("animate__bounce");
    content.classList.remove.("animate__animated");

    content.classList.add("animate__backOutUp");
    content.classList.add("animate__animated");

    setTimeout(function() {
      location.href = "/boletines";
    },600);


    return false;

  })

})
