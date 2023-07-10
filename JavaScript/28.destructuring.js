//Object Destructuring
const batman = {
  superHeroName: "Batman",
  realName: "Bruce Wayne",
  age: 50,
  city: "Gotham",
  friends: ["Barbara", "Alfred", "Selina", "Tim"],
  gadgets: {
    graplingHook: "El gancho para subir cornisas",
    batmobile: "El mejor coche",
    batplane: "Este avión fue destruido",
    radio: "Así se puede comunicar con sus amigos",
  },
};

/* const name = batman.name;
const realName = batman.realName; */

const { superHeroName, realName, city, friends } = batman;
console.log(realName);
const { graplingHook, batmobile } = batman.gadgets;
console.log(graplingHook);
