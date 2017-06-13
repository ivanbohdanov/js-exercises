function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}

var d = new Date(); 
alert( formatDate(d) ); // 2017-06-13