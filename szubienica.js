var hasla = ["Bez pracy nie ma kołaczy", "Kto pyta nie błądzi", "Jedna jaskółka wiosny nie czyni", "Lepsze dwie godziny opierdolu niż pięć minut roboty", "Darowanemu koniowi w zęby się nie zagląda",
    "Fortuna kołem się toczy", "Nie chwal dnia przed zachodem słońca", "Lepszy wróbel w garści niż gołąb na dachu", "Apetyt rośnie w miarę jedzenia", "Co ma wisieć, nie utonie"
];
var haslo = hasla[Math.floor(Math.random() * hasla.length)];

haslo = haslo.toUpperCase();
var ileSkuch = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var dlugosc = haslo.length;

var haslo1 = "";

for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = haslo1;
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

function start() {
    var trescDiva = "";

    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva = trescDiva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) trescDiva = trescDiva + '<div style="clear: both;"></div>';
    }

    document.getElementById("alfabet").innerHTML = trescDiva;

    wypiszHaslo();
}

String.prototype.ustawZnak = function(miejsce, znak) {
    if (miejsce > this.length - 1) return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

function sprawdz(nr) {
    var trafiona = false;
    var element = "lit" + nr;

    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }
    }
    if (trafiona) {
        document.getElementById(element).style.background = "#003300";
        yes.play();

    } else {
        document.getElementById(element).style.background = "#330000";
        no.play();
        ileSkuch++;
        var obraz = "img/s" + ileSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="">';
    }
    document.getElementById(element).setAttribute("onclick", ";");
    document.getElementById(element).style.cursor = "default";
    wypiszHaslo();

    //wygrana
    if (haslo == haslo1) {
        document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
    }

    //przegrana

    if (ileSkuch >= 9) {
        document.getElementById("alfabet").innerHTML = "Przegrana: " + haslo + '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'

    }
}