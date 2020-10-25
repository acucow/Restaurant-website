var mybutton = document.getElementById("i-arrow");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.scrollTo({
   top: 0,
   left: 0,
   behavior: 'smooth'
 });

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   var body = $("html, body");
    body.stop().animate({scrollTop:0}, 1000, 'swing', function() { 
         console.log("Animation has finished");
    });
  }


         $("#soups").click(function(){
            $(".Collapse_mainCourses").hide()
            $(".Collapse_salads").hide()
            $(".Collapse_appetizers").hide()
            $(".Collapse_soups").show()
         });

         $("#mainCourses").click(function(){
            $(".Collapse_mainCourses").show()
            $(".Collapse_salads").hide()
            $(".Collapse_appetizers").hide()
            $(".Collapse_soups").hide()
         });

         $("#salads").click(function(){
            $(".Collapse_mainCourses").hide()
            $(".Collapse_salads").show()
            $(".Collapse_appetizers").hide()
            $(".Collapse_soups").hide()
         });

         
         $("#appetizers").click(function(){
            $(".Collapse_mainCourses").hide()
            $(".Collapse_salads").hide()
            $(".Collapse_appetizers").show()
            $(".Collapse_soups").hide()
         });
     
         $(".menu-section").click(function(){
            $(".menu-section").removeClass("mactive")
            $(this).addClass("mactive")
         });
        

         var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 875,
            modifier: 1,
            slideShadows: true,
            },
            pagination: {
            el: '.swiper-pagination',
            },
       });
        /*------------------Book-Now----------------*/
        $("#book-now").click(function(){
         $(".location-hide").hide()
         $(".booknow-hide").toggle(500)
      });

       /*------------------Location-hide----------------*/
       $("#location").click(function(){
         $(".booknow-hide").hide()
         $(".location-hide").toggle(500)
      });


       /*--------------------- Menu.html ---------------------------- */
       $("#soup").click(function(){
         $(".Collapse-soup").show(500)
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $("Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
        
      });

      $("#cold").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").show()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#salads").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").show()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      
      $("#main-cours").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").show()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#yogurtlu").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").show()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#sea").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").show()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#vegetarian").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").show()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      
      $("#oven").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").show()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#pasta").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").show()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").hide()
      });

      $("#wraps").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse-main-cours").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").show()
         $(".Collapse-turkish").hide()
      });

      $("#turkish").click(function(){
         $(".Collapse-soup").hide()
         $(".Collapse-cold").hide()
         $(".Collapse-salad").hide()
         $(".Collapse_soups").hide()
         $(".Collapse-yogurtlu").hide()
         $(".Collapse-sea").hide()
         $(".Collapse-vegetarian").hide()
         $(".Collapse-oven").hide()
         $(".Collapse-pasta").hide()
         $(".Collapse-wraps").hide()
         $(".Collapse-turkish").show()
      });

$('.hover_menu').hover(
   function () {
      $(this).find(".text_hover").show()
   }, 
   function () {
      $(this).find(".text_hover").hide()

   }
);

 $(".trigger_click").trigger("click")
