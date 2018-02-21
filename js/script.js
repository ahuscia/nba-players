// dane gracza

console.log(headers);

// przyklad na wyciagniecie imion graczy

function getPlayerName(player) {
  return player.PLAYER;
}

console.log(data.map(getPlayerName));


// ZADANIA

// zadanie 1
// posortuj zawodnikow wg ilosci zbiorek ("REB"). Marcin Gortat powinien byc na 12 miejscu (index 11)!


// zadanie 2
// pokaz tylko tych graczy ktorzy rozegrali wszystkie mecze w sezonie ("GP"). Wszystkich meczy bylo 82.

data.filter(function(user) {
  return user.GP >= 82
});

// zadanie 3
// wyciagnij tylko najwazniejsze dane o kazdym koszykarzu. Wyjsciowa tablica powinna zwierac obiekty z imieniem i nazwiskiem gracza (jako "name") i jego druzyne (jako "team):
/*
  {
    "name": "Andrew Wiggins",
    "team": "MIN"
  },
  {
    "name": "Karl-Anthony Towns",
    "team": "MIN"
  },
...
]
*/

function getImportant(player) {
  return [player.PLAYER, player.TEAM];
}

console.log(data.map(getImportant));

// zadanie 4
// Posortuj graczy wg sumarycznej liczby minut ktore grali w calym sezonie. 
// Uzyj do tego liczby meczy ktore grali ("GP") i sredniej ilosci minut w kazdym meczu ("MIN")
// pokaz ich imiona i nazwiska i sumaryczna ilosci minut: ["Andrew Wiggins, 3050.4", "Karl-Anthony Towns, 3034"...]





// zadanie 5
// Pokaz imiona i nazwiska wszystkich koszykarzy z druzyn ("TEAM") ktore zaczynaja sie na "C". 


function onlyTeam(player){
  return player.TEAM;
} 
console.log(data.map(onlyTeam));

function startedFromC(name) {
  return name == "c";
}
console.log(data.map(startedFromC));

// zadanie 6
// pokaz graczy wszystkich graczy z druzyny ("TEAM") Chicago BUlls (skrot "CHI"). Posortuj ich po ilosci asyst ("AST") ktore zdobyli.

