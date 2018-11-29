 
// поиск по ID document.getElementById
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");

// поиск по массиву элементов через Tag - document.getElementsByTagName
var ul = document.getElementsByTagName("ul");

// поиск по классу в нашем полученном ul списке 
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
// 
var close = document.querySelector(".close");

console.log(btn1);
console.log(btn2);
console.log(main);
console.log(myList);
/* можно выводить весь список элементов или только 1й 
(начинать нумерацию с 0 и квадр скобках)*/
console.log(ul);
console.log(story);
console.log(popup);


/* пример работы стиля через переменную
main.style.background = "green";
*/

//добавление элемента через функцию
function addItem(){
	//добавляет новую строку с надписью и классом(для стилизации)
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	// добавляет новый элемент дочку к родительскому
	myList.appendChild(newLi);
//скрывает окошко при добавлении новой задачи
	popup.style.display = "none";
}

// удаление элемента через функцию
function dellItem(){
	
	// удаляет первую дочку из списка
	myList.removeChild(story[0]);

	/* Проверка все ли элементы удалены?

	// проверяет все ли блоки исчезли, если true то выводит сообщение */
	if(story.length == 0){
			popup.style.display = "block";
	}

}

// закрытие окошка на крестик

function closePopup(){
		popup.style.display = "none";

}


// действие при нажатия клика мышки !нежелательно! так как слудующим таким же запросом 
/*
btn1.onclick = function(){

}
*/

/* через addEventListener ("click (или middleClick), указываем саму функцию"
*/
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", dellItem);
close.addEventListener("click", closePopup);