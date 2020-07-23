
var customername = "Jason";
var products = [
    "Pizza",
    "Naan",
    "Sourdough",
    "Foccacia",
    "Iphone IIIX"
];
var quantity = 3;
var totalPrice = 0;
var hours=0;
var price = [40, 10, 20, 80, 1000];
var productsText = "";
var productsElement = document.getElementById("product-list");
hours = new Date().getHours();
if (hours<=11){
	document.getElementById("time").innerHTML="Good Morning";
}else if(hours<=16){
	document.getElementById("time").innerHTML="Good Afternoon";
}else{
	document.getElementById("time").innerHTML="Good Evening";
}
for (i=0;i<products.length;i++){
productsText = productsText + "<li class='list-group-item'>" + products[i] + 
	"<span class='badge badge-pill badge-secondary float-right'>$" + price[i] + "</span></li>";
productsElement.innerHTML = productsText;
	totalPrice += price[i];
};

totalPrice = totalPrice * .75;
document.getElementById("customer-name").innerHTML= customername;
document.getElementById("price").innerHTML = "$" + totalPrice;
