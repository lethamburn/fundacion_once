interface Alumno {
  firstName: string;
  city: string;
  age?: number;
  finisher: boolean;
}

const mauricio: Alumno = {
  firstName: "Mauricio",
  city: "El Castigador",
  finisher: true,
};

/////////////////
interface Image {
  src: string;
  alt: string;
}

interface Episode {
  title: string;
  link: string;
}

interface Character {
  name: string;
  age?: number;
  location?: string;
  image: Image;
  episodes: Episode[];
}

const characters: Character[] = [
  {
    name: "Rick",
    image: {
      src: "cloudinary.res/ajsdngasdg.jpg",
      alt: "Rick comiendose una hamburguesa",
    },
    episodes: [
      {
        title: "Rick se fue al Pirineo",
        link: "Netflix.com/sndgsadng",
      },
    ],
  },
];

console.log(characters);

//Con type podemos hacer enums de forma super facil
type Empleo = "Full Stack" | "Backend" | "Frontend" | "Data";

const miEmpleo: Empleo = "Frontend";

miEmpleo.length