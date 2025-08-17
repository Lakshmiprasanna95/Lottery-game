  let button=document.getElementById("btn");
        let lotteryGame=document.getElementById("lottery_sheet_game");
        let resultBtn=document.getElementById("result");
        let tick=new Audio("ball.wav");
        let tap=new Audio("complete.wav");

        let gifts = [
          "₹100 Cash", "Toy Car", "Chocolate Box", "₹500 Cash", "Smartphone Cover",
          "Book", "Headphones", "Gift Voucher", "Watch", "Puzzle Game",
          "Teddy Bear", "Bluetooth Speaker", "Movie Ticket", "₹200 Cash", "Perfume",
          "Sunglasses", "₹1000 Cash", "Board Game", "Fitness Band", "Wireless Mouse",
          "Digital Clock", "Lamp", "Shopping Voucher", "Laptop Bag", "Keychain",
          "Travel Mug", "Notebook Set", "Gaming Mousepad", "₹200 Cash", "Camera",
          "Water Bottle", "Portable Charger", "Desk Organizer", "Cooking Set", "Action Figure",
          "₹300 Cash", "Travel Pillow", "Mini Backpack", "Personalized Mug", "Gaming Controller",
          "Camera Strap", "Toy Robot", "₹750 Cash", "Sports Equipment", "Pen Set",
          "Bluetooth Earbuds", "Digital Photo Frame", "Wallet", "Backpack", "Gift Hamper"
        ];

        // Pick random gift
        button.addEventListener("click",function(){
            for(i=1;i<=50;i++){
                document.getElementById(i).classList.remove("winningbox");
            }
            resultBtn.textContent="Please wait...";
            // setTimeout(function(){
            // let randomNum = Math.floor(Math.random() * gifts.length); // 0–49
            // const gift = gifts[randomNum];
            // resultBtn.textContent = `You got number ${randomNum+1}, and you won ${gift}! 🎉`;
            // },5000);
              
            let secondsCount=0;
            const intervalId=setInterval(function(){
                tick.play();
            secondsCount=secondsCount+1;
            let randomBox= Math.floor(Math.random() * gifts.length)+1;
            // document.getElementById(randomBox).classList.add("heighlightedBox");
              
            for(let i=1;i<=50;i++){
                if(i==randomBox){
                    document.getElementById(i).classList.add("heighlightedBox");
                }
                else{
                    document.getElementById(i).classList.remove("heighlightedBox");
                }

            }
            if(secondsCount===5){
               let randomNum = Math.floor(Math.random() * gifts.length)+1; // 0–49
            const gift = gifts[randomNum-1];
        tap.play();
            resultBtn.textContent = `You got number ${randomNum}, and you won ${gift}! 🎉`; 
            document.getElementById(randomBox).classList.remove("heighlightedBox");
            
            document.getElementById(randomNum).classList.add("winningbox");
let duration = 3 * 1000; 
   let end = Date.now() + duration;

   (function frame() {
     confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 } });
     confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 } });
     if (Date.now() < end) {
       requestAnimationFrame(frame);
     }
   })();
    clearInterval(intervalId);    
        }
        
        
        },1000);

            
        });

        // Fill the grid dynamically
        gifts.forEach(function(element ,i) {
            const boxElement=`<div class="box" id=${i+1}>${i+1}. ${element}</div>`;
            lotteryGame.insertAdjacentHTML("beforeend", boxElement);
        });
    