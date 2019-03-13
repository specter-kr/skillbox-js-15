export function actualDate(){
  var d = new Date();
  var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  var monthNow = month[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();
  var hour = d.getHours();
  var minute = d.getMinutes();

  function rightTime(num, str1, str2, str3){
    let numEnd = num % 10;
    if (num>=11 && num<=19) {
      return num+' '+str2;
    } else if (num === 1 || numEnd === 1) {
      return num+' '+str1;
    } else if (num>=2 && num<=4) {
      return num+' '+str3;
    } else if (numEnd>=2 && numEnd<=4) {
      return num+' '+str3;
    } else {
      return num+' '+str2;
    }
  }

  var h = rightTime(hour, 'час', 'часов', 'часа');
  var m = rightTime(minute, 'минута', 'минут', 'минуты');

  return day + ' ' + monthNow + ' ' + year + ', ' + h + ' ' + m;
}
