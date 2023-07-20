import "./About.css";

const template = () => {
  return `
  <img class="portrait" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tame_Impala-3687_%2818659088669%29.jpg/1200px-Tame_Impala-3687_%2818659088669%29.jpg" alt="Kevin Parker portrait" />
  <p><em>Kevin Parker's</em> skills as a multi-instrumentalist and producer have been a key element in <em>Tame Impala's</em> success. He has been the brain behind every musical aspect of the band, composing, playing, and recording most of the instruments himself in their productions. His meticulous approach and passion for perfecting every detail have led to the creation of albums that have been widely praised by critics and adored by legions of fans.</p>
  <details>
    <summary>More info</summary>
    <p>Throughout his career, Kevin Parker has released several studio albums with Tame Impala, including "<em>Innerspeaker</em>" (2010), "<em>Lonerism</em>" (2012), "<em>Currents</em>" (2015), and "<em>The Slow Rush</em>" (2020). Each of these records has showcased his artistic evolution, solidifying him as a prominent figure in the alternative music scene.</p>
</details>
  `;
};

const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;
