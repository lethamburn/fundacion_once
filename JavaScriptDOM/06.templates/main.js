const firstName = "Peter";
const lastName = "Parker";
const age = 25;

/* const quote = firstName + " " + lastName + " " + "y tengo " + age + " años.";
 */

//Template string o Literal String -> ``
const quote = `Me llamo ${firstName} ${lastName} y tengo ${age} años.`;

const template = `
<ul>
  <li>
    <p>${firstName}</p>
  </li>
  <li>
    <p>${lastName}</p>
  </li>
</ul>`;
