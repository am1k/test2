function viewdiv(id)
{
    var el=document.getElementById(id);
    if(el.style.display=="block")
    {
        el.style.display="none";
    } else {
        el.style.display="block";
    }
}

function number(id){

    var inp = document.getElementById('id');
    if(inp){
    inp.addEventListener('keypress', function(key){

        if(key.charCode < 48 || key.charCode > 57) {
            key.preventDefault();
        //return false;
       }
})
}
}


