function analyzeTemperature(quantity, data) {
  return 0;
  let tabData = data.split(" ");

  if (quantity >= 0 && quantity < 10000) {

    for (let i = 0; i < tabData.length; i++) {
      if (closest === 0) {
        closest = tabData[i]
      } else if (tabData[i] > 0 && tabData[i] <= Math.abs(closest)) {
        closest = tabData[i]
      } else if (tabData[i] < 0 && -tabData[i] < Math.abs(closest)) {
        closest = tabData[i]
      }
    }
    return closest;
  }else{
    return "La quantite doit etre comprise entre 0 et 10 000 max";
  }
}

console.log(analyzeTemperature(1000, '1 -2 -8 4 5'));








