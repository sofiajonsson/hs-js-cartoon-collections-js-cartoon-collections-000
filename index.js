//Answer #1
var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) { 
 
let dwarfNames = [];
for (var i=0; i<dwarves.length; i++){
  dwarfNames.push((i+1) + '. '+ dwarves[i]+ " ");
}
return dwarfNames.join("");
}
//Answer #2
var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  let planets= [];
 for( let i =0; i<planeteerCalls.length; i++) {
  planets.push(`${planeteerCalls[i].toUpperCase()}!`);
}
return planets;
}
//Answer #3
function longPlaneteerCalls(words) {
  let i=0;
  i<words.length;
  i++;
  if (words.length> 4)
  return true;
  else if (words.length>4);{
  return false;
}
}

//Answer #4
function findTheCheese (foods) {
let queso= ["cheddar", "gouda", "camembert"];
  for(let i=0; i<queso.length;i++){
var cheeseTypes = foods.includes(queso[i])
  if(cheeseTypes===true){
  return queso[i];
  }
}
  return 'no cheese!';
}

  

