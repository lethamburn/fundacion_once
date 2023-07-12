const alimentos = ["🍎", "🥓", "🥓", "🥓", "🍎"];

const isMeat = alimentos.some((alimento) => alimento === "🥓");
console.log(isMeat);
const everyMeat = alimentos.every((alimento) => alimento === "🥓");
console.log(everyMeat);
