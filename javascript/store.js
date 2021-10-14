//A drop-down menu.

function myFunction(){
    var x = document.getElementsByClassName("mashaInside")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    
  }

//shopping cart
// function ticket(){

// }

let countEl = document.getElementById("count-el");
let logEl = document.querySelector("btn");
let lblCartCount =document.getElementById('lblCartCount')
let count = 0;
//lblCartCount.textContent = count;

// let shoppingCart=["name","price"]
let shoppingCart=[]
let myCard= { name: " ", prico: "" };
function add() {
  count += 1;
  lblCartCount.textContent = count;
  //console.log(this);

  /*myCard["name"] = document.getElementsByClassName("btn")[0].getAttribute("data-name");
  myCard["price"] = document.getElementsByClassName("btn")[0].getAttribute("data-price");*/
      for (let i = 0; i < shoppingCart.length; i++) {
        const addToCart = document.getElementsByClassName("btn");
        addToCart[i].addEventListener("click", () => {
          myCard["name"] = document
            .getElementsByClassName("btn")
            [i].getAttribute("data-name");
          myCard["price"] = document
            .getElementsByClassName("btn")
            [i].getAttribute("data-price");
        });
      }
  
  console.log("shopping cart" + shoppingCart)
  shoppingCart.push(myCard)
  console.log(shoppingCart);
  save()
  console.log("LOADING")
}

function save(){
  localStorage.setItem("product", JSON.stringify(shoppingCart));
 


}
let theBigDiv=document.getElementById("test");
// let t = document.createTextNode("Delete");
// var del =document.createElement("BUTTON");
function loadd(){

 
   let theArrayOfProducts= JSON.parse(localStorage.getItem("product"));
   theArrayOfProducts.forEach(function (arrayItem) {
    let x = arrayItem.name ;
    let xAll = arrayItem ;
    console.log(x);
    console.log(xAll);
    let theName=document.createElement("h1")
    var del =document.createElement("BUTTON");
    let t = document.createTextNode("Delete");
    let smDiv =document.createElement("DIV")
    
    
    smDiv.appendChild(t);
    smDiv.appendChild(del); 

    theName.textContent=x
   


    smDiv.appendChild(theName)
    theBigDiv.appendChild(smDiv)
    //delete 
    del.appendChild(t);
    del.addEventListener('click', ()=>{
    // theName.remove()
    smDiv.remove()
   
 })

}); 
}




 

 




//imagPlace
// let ticetPlace = document.getElementsByClassName("ticetPlace")
// let imgBack = document.getElementsByClassName("imgBack")

// function imageCard(){
//   //  let p= document.createElement("p")
//   console.log("Hello")
//   // document.getElementsByClassName("ticetPlace")[0]
//   document.getElementsByClassName("ticetPlace")[0]

// }


// function add(id){
//   console.log(`this ticket for ${id}`)
// }



// function loadTicket(){
//   console.log("hello")
//   let section = document.getElementById("section");
//   fetch("./card.json")
//   .then(res => res.json())
//   .then(json=>{
//   for(product of json.products){

  


          
//           let mainDiv =document.createElement("div");
//           let txtDiv=document.createElement("div");
//           let name = document.createElement("p");
//           let btn = document.createElement("button");


          
//           // mainDiv class property
//           mainDiv.className="imgBack";
        
//           txtDiv.className="text";
//           //name property
//           name.innerHTML = `Adele ${i}`;
//           //btn propery
//           btn.className = "btn";
//           btn.type = "button";
//           btn.onclick = function(){add(i)};
//           btn.innerHTML = "Ticket";

          
//           //section child
//           section.appendChild(mainDiv);

//         // mainDiv child
//           mainDiv.appendChild(txtDiv);

//           // text child
//           txtDiv.appendChild(name);
//           txtDiv.appendChild(btn);
          

//         }

//       }

/*function add(id) {
  // prodects
  // myCart
  console.log(`This tickit for ${id}`)
}

function loadTicket() {
  let section = document.getElementById("section");
  
  fetch("./card.json")
  .then(res => res.json())
  .then(json => {
      // for(let i = 1; i <= 4; i++) { 
         for(product of json.prodects) {
          let mainDiv = document.createElement("div");
          let textDiv = document.createElement("div");
          let name = document.createElement("p");
          let btn = document.createElement("button");

          // main div property
          mainDiv.className = "imgBack";

          // text div property
          textDiv.className = "text";

          // name property
          name.innerHTML =  "product.name"; //`adele ${i}`

          // btn property
          btn.className = "btn";
          btn.type = "button";
          btn.onclick = function(){add(product.id)}; //function(){add(i)};  
          btn.innerHTML = "Ticket";

          // section child
          section.appendChild(mainDiv);

          // main div child
          mainDiv.appendChild(textDiv);

          // text child
          textDiv.appendChild(name);
          textDiv.appendChild(btn);
      }
  })
}*/