import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/josh.png"
          alt="An image showing Joshua"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I&apos;m Joshua</h1>
      <p>I blog about web development - especially frameworks like React</p>
    </section>
  );
};

export default Hero;
