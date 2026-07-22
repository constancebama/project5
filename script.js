   let count = 0;
   const counter = 
   document.getElementById("count");
   const increaseBtn =
   document.getElementById("increase");
   const decreaseBtn =
   document.getElementById("decrease");
   const resetBtn =
   document.getElementById("reset");

   function updateCounter(){
    counter.textContent = count;


    if (count > 0){
        counter.style.color ="green";
    }
    else if(count < 0){
        counter.style.color = "red";
    }
    else {
        counter.style.color = "blue";
   }
   
   }

   increaseBtn.addEventListener("click",

    function(){
        count = count + 1;
        updateCounter();
    });


    decreaseBtn.addEventListener("click",

        function(){
            count--;
            updateCounter();

        });

        resetBtn.addEventListener("click",

            function(){
                count = 0;
                updateCounter();
            });
        
        

