function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (2000 < feet && feet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  return cityName === 'NYC'? 'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(tipType){
  if (tipType ==='generous'){
    return 'Thank you so much.';
  }else if (tipType ==='not as generous'){
    return 'Thank you.'
  }return 'Bye.'
  
}