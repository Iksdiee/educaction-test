function getDayInfo(date_string) { 
const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']; 
const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']; 
 

 
var parts = date_string.split(".");
var date = new Date(parseInt(parts[2], 10), 
                  parseInt(parts[1], 10) - 1, 
                  parseInt(parts[0], 10)); 
 

var day_num = date.getDay(); 
var month_num = date.getMonth(); 
var year_num = date.getFullYear(); 


var week_num = (parts[0]/7+1).toFixed(0); 


 
return(`${days[day_num]}, ${week_num} неделя ${months[month_num]} ${year_num} года`); 
} 
 
 
 
console.log(getDayInfo('15.12.2021'));