const btn_1 = document.getElementsByClassName('2020')
const btn_2 = document.getElementsByClassName('2021')
const btn_3 = document.getElementsByClassName('2022')
const btn_4= document.getElementsByClassName('2023')


const one = document.getElementById('2020')
const two = document.getElementById('2021')
const third = document.getElementById('2022')
const fourth = document.getElementById('2023')


window.addEventListener("DOMContentLoaded", (event) => {

   if (btn_1) {
      btn_1[0].addEventListener('click', function(){
         one.classList.add('visible')
         one.classList.remove('hidden')
         two.classList.add('hidden')
         third.classList.add('hidden')
         fourth.classList.add('hidden')
      })
   } if (btn_2) {
      btn_2[0].addEventListener('click', function(){
         two.classList.add('visible')
         two.classList.remove('hidden')
         one.classList.add('hidden')
         third.classList.add('hidden')
         fourth.classList.add('hidden')
      })
   } 
   if (btn_3) {
      btn_3[0].addEventListener('click', function(){
         third.classList.add('visible')
         third.classList.remove('hidden')
         one.classList.add('hidden')
         two.classList.add('hidden')
         fourth.classList.add('hidden')
      })
   } 
   if (btn_4) {
      btn_4[0].addEventListener('click', function(){
         fourth.classList.add('visible')
         fourth.classList.remove('hidden')
         one.classList.add('hidden')
         two.classList.add('hidden')
         third.classList.add('hidden')
      })
   } 
   

});


// НАВБар

$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });


//Круговая диаграмма
let captionsList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
     unitsList[index].classList.add('hovered');
  });
  
  item.addEventListener('mouseout', function () {
     unitsList[index].classList.remove('hovered');
  });
});
