/* eslint-disable react-refresh/only-export-components */
import styles from "../style";
import Button from "./Button";
import Section from "./Section";

const CTA = () => (
  <Section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
    
      <h2 className={styles.heading2}>Let’s try our services now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to Automate  and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button >Request A Call Back</Button>
    </div>
  </Section>
);

export default CTA;
