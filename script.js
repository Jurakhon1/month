let box = document.querySelector(".image-container");  
let input = document.querySelector(".input");  
let btn = document.querySelector(".btn");  
let img = document.createElement("img");  
let monthName = document.createElement("p"); // Создаем элемент <p> для названия месяца  
let winter = `https://c.tadst.com/gfx/1200x630/winter-lake.jpg?1`;  
let autumn = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3N0Md5ggosDLYozzyvnlhJyMUDVpCk3LWV72OoJMA3uLDVdGktkQcAtBPDk8mVTGLofQ&usqp=CAU`;  
let spring = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0g8KvofUk5HsOKn7wM4viiK1C_I5ugfALZ60LnzAbTTJIZQ2iUWHE01MFUgrpHk-7aUo&usqp=CAU`;  
let summer = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdftfbBLgCQlrKypTgs4nQK842oYEoDz2fmwd8I8d6D0MTjB36gOJlFrZIlnePwzRUIY&usqp=CAU`;  
let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  
const monthTitles = [  
  "January",  
  "February",  
  "March",  
  "April",  
  "May",  
  "June",  
  "July",  
  "August",  
  "September",  
  "October",  
  "November",  
  "December",  
];  
btn.onclick = () => {  
  let inputValue = +input.value;  

  let season = ""; 
  if (inputValue >= 12 || inputValue <= 2) {  
    img.src = `${winter}`;  
    season = "Winter";  
  } else if (inputValue >= 3 && inputValue <= 5) {  
    img.src = `${spring}`;  
    season = "Spring";  
  } else if (inputValue >= 6 && inputValue <= 8) {  
    img.src = `${summer}`;  
    season = "Summer";  
  } else if (inputValue >= 9 && inputValue <= 11) {  
    img.src = `${autumn}`;  
    season = "Autumn";  
  } else {  
    img.src = ""; 
    monthName.textContent = "Некорректный номер месяца"; 
    box.innerHTML = "";  
    box.appendChild(monthName);  
    return; 
  }  

  img.className = "image";  
  monthName.className = "month-name"; 

  let monthIndex = inputValue - 1; 
  if (monthIndex >= 0 && monthIndex < monthTitles.length) {  
    monthName.textContent = monthTitles[monthIndex]; 
  } else {  
    monthName.textContent = "Некорректный номер месяца";  
  }  

  box.innerHTML = ""; 
  box.appendChild(img); 
  box.appendChild(monthName); 
};  