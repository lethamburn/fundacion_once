const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  const uniques = [];
  for (const element of param) {
    //Si el array uniques no incluye el elemento...
    if (!uniques.includes(element)) {
      //Lo empujamos dentro
      uniques.push(element);
    }
  }
  console.log(uniques);
}

removeDuplicates(duplicates);
