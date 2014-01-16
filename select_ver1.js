 var dataList = {
        'select-goods': {
            '3':"Двери",
            '5':"Окна",
            '8':"Столы"
        },

            '3': {
                '1':"Простая",
                '2':"Сложная"
            },
            '5': {
                '3': "Одинарное",
                '4': "Двойное"
            },
            '8': {
                '5': "Дерево",
                '6': "Металлический"
            },
            '1': {
                '7': "Без узора",
                '8': "Без ручки"
            },
            '2': {
                '9': "Без утеплителя",
                '10': "C утеплителем"
            },
            '4': {
                '11': "Без форточки",
                '12': "С форточкой"
            },
            '6': {
                '13': "Без стеклопакета",
                '14': "Со стеклопакетом"
            },
            '7': {
                '15': "Без крышки",
                '16': "С крышкой"
            },
            '9': {
                '17': "Без ящика",
                '18': "C ящиком"
            }

    }
var m_out = ['Тип : ','Сложность: ','Вид: '];
var t = [];
function fg(d) {
    document.getElementById("out").innerHTML = "";
    var a = document.getElementById("List" + d),
        c = dataList[a.options[a.selectedIndex].value];
    t[d] = a.options[a.selectedIndex].text;
    for (var b = 0; b < m_out.length; b++) {
        a = document.getElementById("List" + b);
        if (b > d) {
            a.options.length = 0;
            t[b] = "---";
            if (c) for (var e in c) a.options[a.options.length] = new Option(c[e], e);
            c = false;
            if (a.options.length) {
                c = dataList[a.options[0].value];
                t[b] = a.options[0].text
            }
        }
        document.getElementById("out").innerHTML += m_out[b] + t[b] + "<br />"
    }
};
  window.onload = function ()
{
    InitCalculate();
var s = ["List0","List1","List2"];
for (var i=0; i < s.length; i++) document.getElementById(s[i]).onchange =  function(a){return function(){fg(a)}}(i);
fg(0);
}