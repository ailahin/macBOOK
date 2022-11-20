// eight gb memory
var memoryEight=document.getElementById("8GB-memory-button");
memoryEight.addEventListener("click", memoryCost);
memoryEight.addEventListener("click" , totalPrice);

function memoryCost  (){

  memoryEight.onclick=  document.getElementById('memory-cost').innerText= 0;
  console.log('clicked')

};

function totalPrice(){
  memoryEight.onclick=  document.getElementById('total-price').innerText= 1290;


    
};

//16GB memory


var sixteenMemory= document.getElementById("16GB-memory-button");
sixteenMemory.addEventListener('click', memoryCostSixteen );
sixteenMemory.addEventListener('click', totalPriceSixteen);

function memoryCostSixteen  (){

  

  sixteenMemory.onclick=  document.getElementById('memory-cost').innerText= 100;

};

function totalPriceSixteen (){

sixteenMemory.onclick= document.getElementById('total-price').innerText=1290+100;

/*  if ( secTotalPrice() == 1440 ){

  sixteenMemory.onclick= document.getElementById('total-price').innerText=1540;
 }

 else if ( thirdTotalPrice() == 1490) {
  
  sixteenMemory.onclick= document.getElementById('total-price').innerText=1590;
 }
  else if (paidDeliveryTotal() == 1310) {

    sixteenMemory.onclick= document.getElementById('total-price').innerText=1410;
  }

  else{
    sixteenMemory.onclick= document.getElementById('total-price').innerText=1390;
  }
 */
  

  console.log('clicked')
};

// 265 GB Storage




var firstStorage=document.getElementById('265GB-storage');
firstStorage.addEventListener('click', firstStorageCost);
firstStorage.addEventListener('click' , firstTotalPrice);

function firstStorageCost(){

  firstStorageCost.onclick= document.getElementById('storage-cost').innerText= 0;
console.log("clicked");

}

function firstTotalPrice(){
  secondStorage.onclick= document.getElementById('total-price').innerText= 1290;
  console.log("clicked");
};


//500 SSD storage


var secondStorage=document.getElementById('500GB-storage');
secondStorage.addEventListener('click', secStorageCost);
secondStorage.addEventListener('click' , secTotalPrice);

function secStorageCost(){



  secondStorage.onclick= document.getElementById('storage-cost').innerText= 150;


}

function secTotalPrice(){

 
  secondStorage.onclick= document.getElementById('total-price').innerText = 1290+150;

};





// 1TB storage 

var thirdStorage=document.getElementById('1TB-storage');
thirdStorage.addEventListener('click', thirdStorageCost);
thirdStorage.addEventListener('click' , thirdTotalPrice);

function thirdStorageCost(){

  thirdStorage.onclick= document.getElementById('storage-cost').innerText= 200;


}

function thirdTotalPrice(){
  thirdStorage.onclick= document.getElementById('total-price').innerText= 1290+200;
};


//Delivery Charge free

var freeDelivery=document.getElementById('Free-delivery');
freeDelivery.addEventListener('click', freeDeliveryPrice);
freeDelivery.addEventListener('click' , freeDeliveryTotal);

function freeDeliveryPrice(){

  freeDelivery.onclick= document.getElementById('delivery-charge').innerText= 0;


}

function freeDeliveryTotal(){
  freeDelivery.onclick= document.getElementById('total-price').innerText= 1290;
};

//paid delivery price

var paidDelivery=document.getElementById('paid-delivery');
paidDelivery.addEventListener('click', paidDeliveryPrice);
paidDelivery.addEventListener('click' , paidDeliveryTotal);

function paidDeliveryPrice(){

  paidDelivery.onclick= document.getElementById('delivery-charge').innerText= 20;


}

function paidDeliveryTotal(){
  paidDelivery.onclick= document.getElementById('total-price').innerText= 1290+20;
};




/* const storageButton1TB= document.getElementById('1TB-storage');
 storageButton1TB.onclick= function costChange(){
    document.getElementById('storage-cost').innerText= 250;
 }


eightGbMemoryButton.onclick = function (){
  document.getElementById("memory-cost").innerHTML = 0;
};
 */


/* {<script>
var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}
</script *//* }> */