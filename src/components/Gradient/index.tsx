// Styles
import Image from "next/image";
import styles from "./gradient.module.scss";

type GradientTypes = {
  children: React.ReactNode | JSX.Element;
  color: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundedImg: boolean;
};

const Gradient = ({
  children,
  color,
  image,
  subtitle,
  title,
  description,
  roundedImg,
}: GradientTypes) => {
  // Dynamic styles
  const gradient = `linear-gradient(to bottom, hsl(${color}, 100%, 40%) 0%, hsl(${color}, 100%, 30%) 15%,  hsl(${color}, 100%, 20%) 40%, var(--clr-dark) 75%)`;
  const rounded = roundedImg ? `50%` : "5px";

  return (
    <div className={styles.container} style={{ background: gradient }}>
      <div
        className={styles.info}
        style={{ background: `hsl(${color}, 100%, 40%)` }}
      >
        <div className={styles.info_image} style={{ borderRadius: rounded }}>
          <Image src={image} layout="fill" />
        </div>
        <div className={styles.info_text}>
          <span>{subtitle}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Gradient;
