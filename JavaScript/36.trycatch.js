const x = 10;

try {
  console.log(x);
} catch (error) {
  console.log("X no existe: ", error.message);
}
