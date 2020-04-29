var fs = require('fs');
var readlineSync = require('readline-sync');
var phonenums=[];
var count=0;
var list = [];
//-----------------------------------------------
function loadData(){
var data = fs.readFileSync('./data.json');
phonenums = JSON.parse(data);
count = phonenums.length + 1;
}
//-----------------------------------------------
function showMenu(){  

  console.log('1. Thêm số điện thoại ');
  console.log('2. Tìm số điện thoại');
  console.log('3. Sửa contact');
  console.log('4. Xóa contact');
  console.log('5. Xem toàn bộ danh bạ ');
  var option = readlineSync.question('-->');
  switch(option){
    case '1': addPhoneNum();
    showMenu();
    break;
    case '2': searchOption();  
    showMenu(); 
    break;
    case '3': fixPhoneNum();
    showMenu();
    break;
    case '4': delPhoneNum();
    showMenu();
    break;
    case '5': showContact();
    showMenu();
    break;
  }
}
//--------------------------------------------

//----------------------------------------------
function showContact(){
  console.log(phonenums);
  
}
//-----------------------------------------------
function addPhoneNum(){
  // var data = fs.readFileSync('./data.json');
  // var phonenums = JSON.parse(data);
  var name = readlineSync.question('Name: ');
  var num = readlineSync.question('Phonenumber: ');
  var phonenum={
    index:count++,
    Name:name,
    Num:num
  };
  phonenums.push(phonenum);
  var newdata = JSON.stringify(phonenums);
  fs.writeFileSync('./data.json', newdata);
}
//-----------------------------------------------
function searchOption(){
  console.log('1. Search theo SDT.');
  console.log('2. Search theo Ten.');
  var optionSearch = readlineSync.question('>');
  switch(optionSearch){
    case '1': searchNum();
    break;
    case '2': searchName();
    break;
    default:
      console.log('Chon lai de');
      break;
  }
}
//-----------------------------------------------
function searchNum(){
  var socantim = readlineSync.question('Nhap so dien thoai can tim:');
  socantim = loc(socantim);
  
  console.log(phonenums);
  list = phonenums.filter(function(x){
    return x.Num.indexOf(socantim)!== -1;
  });
  console.log(list);
  for(var element of list){
    console.log('\n'+ element.Name +'  '+ element.Num );
  }
}
//-----------------------------------------------
function searchName(){
  var tencantim = readlineSync.question('Nhap so dien thoai can tim:');
  tencantim = loc(tencantim);
  console.log(phonenums);
  var list = phonenums.filter(function(x){
    return x.Name.indexOf(tencantim)!== -1;
  });
  var indexsearch = 1;
  for (var element of list){
    element.indexsearch = indexsearch++;
  }
  console.log(list);

}
//--------------------------------------------------------
function fixPhoneNum(){
  console.log('chon phan tu muon sua.');
  searchOption();
  var optionfix = readlineSync.question('Nhap chon so muon sua>');
  fix
  console.log('1. Sua Ten.');
  console.log('2. Sua SDT.');
  var fixed = readlineSync.question('>');
  switch(fixed) {
    case '1': {
    var newname = readlineSync.question('Nhap ten moi: ');

    }
  }
}
function delPhoneNum(){
}
//--------------------------------------------------------
function main(){
  console.log('Bat dau chay');
  loadData();
  console.log('Vua loadData');
  console.log(phonenums);
  showMenu();  
}
//--------------------------------------------------
function loc(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    str = str.replace(/\s+/g, ' ');
    str.trim();
    return str;
}
//--------------------------------------------------
main();