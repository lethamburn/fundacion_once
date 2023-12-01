import Image from "next/image";

const About = () => {
  return (
    <main>
      <h2>About</h2>
      <Image
        src="/lagarto.avif"
        alt="Lagarto"
        width={400} height={200}
      />
    </main>
  );
};

export default About;
