## FFD opdracht 1

![](apppreview.png)

Voor de eerste opdracht heb ik gekozen voor de 4e use case:

- Als ik een lijst films heb gevonden, wil ik leuke films kunnen opslaan om ze thuis te ....

- In een lijst gevonden studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is.

- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een vette playlist te maken.

- **Als ik foto's zoek wil ik kunnen selecteren op kleur om verassende zoekresultaten te krijgen.**

Voor de opdracht maak ik gebruik van html, css en javascript om een prototype te maken voor de gekozen use case

## How it works

In het gemaakte prototype staan momenteel 7 foto's (1 voor iedere kleur). meer foto's kunnen uiteraard toe worden gevoegd en gekoppeld worden aan een kleur.

De gebruiker kan door de pagina heen scrollen en alle foto's bekijken. Mocht de gebruiker bijvoorbeeld alleen rode afbeeldingen willen zien kan er op het rode bolletje worden geklikt. Dit filtert alle afbeeldingen die niet in de groep rood zitten weg. Zo kan de gebruiker op kleur afbeeldingen vinden

## code

Een aantal stukjes interresante code:

onderstaande code maakt in de html de belangrijke elementen aan, in dit geval de klikbare buttons en de foto's.

De <spans> zijn de ronde kleurknoppen, deze krijgen ieder een class mee zodat de knop later kan worden aangesproken in css en js. Een onclick functie in filter.js wordt aangeroepen, deze functie handelt het filteren zodra er wordt geklikt.

``` html
<div class="colors">

    <span class="redbutton" onclick="displayRed ()"></span>

    <span class="orangebutton" onclick="displayOrange ()"></span>

    <span class="yellowbutton" onclick="displayYellow ()"></span>

    <span class="greenbutton" onclick="displayGreen ()"></span>

    <span class="bluebutton" onclick="displayBlue ()"></span>

    <span class="purplebutton" onclick="displayPurple ()"></span>

    <span class="pinkbutton" onclick="displayPink ()"></span>

</div>

      <a href="#">
        <img href="#" class="colorreturn" src="pics/colorreturn.png">
      </a>

      <img id="green" class="photos" src="pics/forest.png">

      <img id="blue" class="photos" src="pics/sunglasses.png">

      <img id="red" class="photos" src="pics/cherry.png">

      <img id="pink" class="photos" src="pics/flower.png">

      <img id="purple" class="photos" src="pics/jellyfish.png">

      <img id="orange" class="photos" src="pics/autumn.png">

      <img id="yellow" class="photos" src="pics/pepper.png">
```

Alle foto's krijgen een id en een class mee. Id wordt gebruikt om in filter.js de juiste foto te kunnen filteren, de class is voor positionering in css.

Om ervoor te zorgen dat de kleurknoppen naast elkaar te komen staan en je door de kleuren kan scrollen is de volgende code gebruikt:

``` css
.colors {
  overflow: auto;
  white-space: nowrap;
}
```

en

``` css
::-webkit-scrollbar {
display: none;
}
```

Dit laatste zorgt ervoor dat de scrollbar die onstaat bij objecten die buiten het veld vallen verdwijnt.


### javascript

In filter.js staat de code die ervoor zorgt dat de kleuren worden gefilterd

Eerst worden de afbeeldingen in variabelen opgeslagen:

``` javascript
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var red = document.getElementById('red');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
```

Daarna worden de kleurknoppen in variabelen opgeslagen:

``` javascript
var greenButton = document.querySelector('.greenbutton');
var blueButton = document.querySelector('.bluebutton');
var redButton = document.querySelector('.redbutton');
var pinkButton = document.querySelector('.pinkbutton');
var purpleButton = document.querySelector('.purplebutton');
var orangeButton = document.querySelector('.orangebutton');
var yellowButton = document.querySelector('.yellowbutton');
```

Dan het belangrijkste stuk, het filteren van de juiste afbeeldingen.

Zodra er wordt gedrukt op de groene knop wordt "displayGreen" aangeroepen. Dit zet de afbeelding met groen erin op display: block; en alle andere afbeeldingen op display: none;

``` javascript
function displayGreen () {
  green.style.display = "block";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}
```

Voorbeeld van een andere kleur:

```javascript
function displayPink () {
  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "block";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}
```

## Feedback & verbeteringen

- als je naar beneden scrollt verdwijnen de kleurknoppen, het is handig om snel weer toegang te hebben tot filteren.

### Oplossing 1
![](oplossing1.png)

Om dit op te lossen heb ik een fixed knop toegevoegd die de gebruiker terug naar de bovenkant van de pagina stuurt. Hier zijn de kleurknoppen weer zichtbaar.

De code:

html
``` html
<a href="#">
  <img href="#" class="colorreturn" src="pics/colorreturn.png">
</a>
```

css
``` css
.colorreturn {
  position: fixed;
  left: 27.8em;
  top: 40em;
}
```


- nadat je klikt op een kleur zie je niet welke kleur je hebt geselecteerd (behalve aan de gefilterde foto's.)
(stom, over het hoofd gezien. Dit had natuurlijk vanaf het begin een feature moeten zijn, het script maken nam iets teveel tijd in beslag).

### Oplossing 2
![](oplossing2.png)

Om dit op te lossen heb ik een stuk toegevoegd aan de javscript code die filtert na een klik. De code voegt een border toe op de kleurknop waarop wordt geklikt en zet alle andere kleurknoppen op border: none;

``` javascript
function displayGreen () {
  greenButton.style.border = "solid #dfe6e9";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "block";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}
```


- Na het selecteren van een kleur kan je niet meer terug naar een view met alle kleuren (de pagina refreshen werkt)

### Oplossing 3

Work in progress

## Bronnen
[Pexels.com](https://www.pexels.com/)voor de foto's
[stackoverflow](https://stackoverflow.com/)voor een aantal handige debug tips

## Overige informatie
Naam: Jimmy de Kroon
studnr.: 500716228
Klas: FFD herkansingsklas 1
Docent: Koop Reynders
