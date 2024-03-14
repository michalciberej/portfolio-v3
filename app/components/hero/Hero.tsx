import S from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={S.container}>
      <h2 className={S.heading}>
        Frontend
        <br /> Developer
      </h2>
      <h2 className={S.subheading}>
        Michal <br />
        Ciberej
      </h2>
    </section>
  );
};

export default Hero;
