
function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which!=0 && event.charCode!=0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)   // остальные
    }

    return null; // специальная клавиша
}
var sum;
var middle;
function InitCalculate(){
var form = document.forms['calculator'];
      console.log(form)

    var heightElem = form.elements.height;
    heightElem.onkeypress = function(e) {
        e = e || event;
        var chr  = getChar(e);

        if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
        if (chr < '0' || chr > '9') return false;
    }

    // клавиатура, вставить/вырезать клавиатурой
    heightElem.onkeyup = calculate;

    // любые действия, кроме IE. В IE9 также работает, кроме удаления
    heightElem.oninput = calculate;

    var widthElem = form.elements.width;
    widthElem.onkeypress = function(e) {
        e = e || event;
        var chr  = getChar(e);

        if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
        if (chr < '0' || chr > '9') return false;
    }

    // клавиатура, вставить/вырезать клавиатурой
    widthElem.onkeyup = calculate;

    // любые действия, кроме IE. В IE9 также работает, кроме удаления
    widthElem.oninput = calculate;

    var optionElem = form.elements.option;
    optionElem.onclick = calculate;

    var option1Elem = form.elements.option;
    option1Elem.onclick = calculate;

   calculate();

    function selectBox(){
        var selectsArray = document.getElementsByClassName('selected1');
        console.log(selectsArray);
        console.log(selectsArray.length)
        for (var k=0; k < selectsArray.length; k++){
//            console.log(selectsArray[k])
            selectsArray[k].addEventListener('change', function(e){

                if(e.target.checked) {
                    sum = parseInt(e.target.value, 10 );
//                    console.log(sum);
                }
                else {
                    sum = parseInt(e.target.value, 10);
//                    console.log(sum);
                }
//
                sum = Math.round(sum);

                middle = sum;
                console.log(middle)
            })
        }
    }

    function calculate() {

        sum = +heightElem.value + +widthElem.value;
        if (!sum) return;

        sum = Math.round(sum);

        var heught = sum + middle;
        document.getElementById('sum1').innerHTML= heught;

        var heught = ['Итоговая сумма:  '] + sum + middle;
    }

    selectBox();

    function chekBox(){
        var optionsArray = document.getElementsByClassName('check');
        console.log(optionsArray);
        for (var z=0; z<optionsArray.length; z++){
            optionsArray[z].onclick = function(e){
                if(e.target.checked) {
                    sum += parseInt(e.target.value, 10);
                    console.log(sum);
                }  else {
                    sum -= parseInt(e.target.value, 10) ;
                }

                sum = Math.round(sum);
                var checksum1 = sum + middle ;

                var divResult = document.getElementById('checksum').innerHTML = checksum1;
                // newCheckbox ('check');
            }


        }
    }
    chekBox();

}








