

function Minus(ID){
    console.log(ID);
    var ID_quantity = "#" +ID+" .quantity";
    var ID_Total_price = "#" + ID +" .price";
    var ID_price  = "#" + ID +" .unit-price";
    var elemQuantity = document.querySelector(ID_quantity);
    var elemTotalPrice = document.querySelector(ID_Total_price);
    var elemUnitPrice = document.querySelector(ID_price);

    var ValueTotalPrice = parseInt(elemTotalPrice.innerHTML.slice(0,-1))
    var ValueUnitPrice = parseInt(elemUnitPrice.innerHTML.slice(0,-1))


    if (parseInt(elemQuantity.innerHTML) != 0){
    elemQuantity.innerHTML =   parseInt(elemQuantity.innerHTML)-1;
    elemTotalPrice.innerHTML = ValueTotalPrice-ValueUnitPrice;
    }
    }   

function Plus(ID){
    console.log(ID);
    var ID_quantity = "#" +ID+" .quantity";
    var ID_Total_price = "#" + ID +" .price";
    var ID_price  = "#" + ID +" .unit-price";
    var elemQuantity = document.querySelector(ID_quantity);

    var elemTotalPrice = document.querySelector(ID_Total_price);
    console.log(elemTotalPrice);
    var elemUnitPrice = document.querySelector(ID_price);
    console.log(elemUnitPrice);

    var ValueTotalPrice = parseFloat(elemTotalPrice.innerHTML.slice(0,-1))
    console.log(ValueTotalPrice);
    var ValueUnitPrice = parseFloat(elemUnitPrice.innerHTML.slice(0,-1))
    console.log(ValueUnitPrice);

    elemQuantity.innerHTML =  parseFloat(elemQuantity.innerHTML)+1;
    elemTotalPrice.innerHTML = ValueTotalPrice+ValueUnitPrice;
    
    }   