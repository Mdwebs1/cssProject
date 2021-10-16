
let cards = document.querySelectorAll("button");
let product = [{
            name:'adele',
            tag:'img/adele.jpg'  ,
            price:2000,
            inCart:0    },

            //2
            { 
            name:'Whitney Houston',
            tag:'img/Whitney Houston.jpg'  ,
            price:1000,
            inCart:0    },
            //3
            { 
            name:'Celine Dion',
            tag:'img/Celine Dion.jpg'  ,
            price:1500,
            inCart:0    },
            //4
            { 
        
            name:'cia',
            tag:'img/cia.jpg'  ,
            price:3000,
            inCart:0    },
            //5
            { 
            name:'Ariana Grande',
            tag:'img/Ariana Grande.jpg'  ,
            price:2500,
            inCart:0    },
            //6
            { 
            name:'Taylor Swift',
            tag:'img/Taylor Swift.jpg'  ,
            price:2000,
            inCart:0    },
            //7
            { 
            name:'Justin Beiber',
            tag:'img/Justin Beiber.jpg'  ,
            price:2000,
            inCart:0    },
            //8
            { 
            name:'Maria carey',
            tag:'img/Mariah Carey.jpg'  ,
            price:2200,
            inCart:0    },


]
for (
    let i = 0;i<cards.length;i++) {
        cards[i].addEventListener("click",()=>{
            cardsNumbered(product[i])
            totalCost(product[i])
           
        })
    }

//add numbered in shopping card

function onLoadCartNumbers(){
    let productNumber = localStorage.getItem("cardsNumbered")
    if(productNumber){
        document.querySelector('.cart span').textContent= productNumber;
    }
}


function cardsNumbered(product) {
   
  let productNumber = localStorage.getItem("cardsNumbered")
   
    productNumber =parseInt(productNumber)

    if(productNumber){
        localStorage.setItem('cardsNumbered',productNumber+1)
        document.querySelector('.cart span').textContent= productNumber+1;
    }else{
        localStorage.setItem('cardsNumbered',1);
        document.querySelector('.cart span').textContent=1;
    }
    
       setItems(product);
 
}

function setItems(product){
   let cartItems =localStorage.getItem("productInCart")
   cartItems =JSON.parse(cartItems)
   
   if(cartItems != null){
        if(cartItems[product.tag] == undefined){
        cartItems={
            ...cartItems,
            [product.tag]:product
        }  
       }
    cartItems[product.tag].inCart+=1
   }else{
    product.inCart =1
    cartItems ={
       [product.tag]:product
     }
   }

    localStorage.setItem('productInCart',JSON.stringify(cartItems));

}

function totalCost(product){
let cartCost = localStorage.getItem("totalCost")



if(cartCost != null){
    cartCost=parseInt(cartCost)
    localStorage.setItem('totalCost', cartCost+product.price)
}else{
    localStorage.setItem('totalCost',product.price)
}
}


function displayCart(){

 let cartItems = localStorage.getItem('productInCart');
 cartItems=JSON.parse(cartItems);
 let productContainer = document.querySelector('.product');
 let cartCost = localStorage.getItem("totalCost")
 if( cartItems && productContainer){
    productContainer.innerHTML ='';
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML +=` 
      <div> 
      <img src="${item.tag}"> ${item.name}
      </div>
     
      <div>${item.price}</div>

      <div>
      ${item.inCart}
      </div>


      <div>
       ${item.inCart * item.price},00
      </div>`
      
 });
 productContainer.innerHTML +=`
 <div class="basketTotalContainer">
   <h4 class="basketTotalTitle">
       Basket Total
       </h4>
    <h4 class ="basketTotal">
    ${cartCost},00
   
    </h4>
</div>

    <div class="basketTotalContainer">
   <h4 class="basketTotalTitle">
       tax Total
       </h4>
    <h4 class ="basketTax">
    ${cartCost *(15/100)},00
   
    </h4>
 </div>

 <div class="basketTotalContainer">
 <h4 class="basketTotalTitle">
     final Total
     </h4>
  <h4 id ="basketTax">
  ${parseFloat(cartCost) +  parseFloat(cartCost *(15/100)) },00
 
  </h4>
</div>
<div>
    <input id="btn"></input>
    
</div>
<div>
<button type="button" id ="buttons">submmit</button>
</div>
    `
   }
  


    document.getElementById("btn").onkeyup=function(){
   applayCopon()
      
    }
  function applayCopon(){

    if(document.getElementById("btn").value=="string"){
        alert("coupon applied")
     document.getElementById("basketTax").innerHTML =` ${parseFloat(cartCost) +  parseFloat(cartCost *(15/100)) -10 },00 `

   }

}
document.getElementById("buttons").onclick = function(){
    makeid(5)   
}
}

function makeid(length) {

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   localStorage.setItem('productInCart',[])
   localStorage.setItem('cardsNumbered',0);
   localStorage.setItem('totalCost',0);
   
   alert (result);

}
 




  
    
// cardsNumbered()
onLoadCartNumbers()
 displayCart()