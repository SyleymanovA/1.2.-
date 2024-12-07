let userName = "Vova"; 
let balance = 90;
if (userName === "admin") {
    console.log("Администратор");
} else if (userName === "") {
    console.log("Гость");
} else {
    if (balance > 5000) {
        console.log("Вип-клиент");
    } else if (balance > 1000) {
        console.log("Постоянный покупатель");
    }
}



let user = "netologist";
let orderOwner = "leo_tolstoy";
if (user === "admin" || user === orderOwner) {
    console.log("Редактирование разрешено.");
} else {
    console.log("Заказ нельзя редактировать.");
}



