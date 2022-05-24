import { useRouter } from "next/router";
import NextImage from "next/image";
import { ChangeEvent, FC, useState } from "react";
import { useSWRConfig } from "swr";
import { auth } from "../../lib/mutations";
// Styles
import styles from "./auth.module.scss";

const Auth: FC<{ mode: "signup" | "signin" }> = ({ mode }) => {
  // Router
  const router = useRouter();
  // States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    // Set the form data
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = await auth(mode, formData);
    setLoading(false);
    router.push("/");
  };

  // Labels
  const title = mode === "signin" ? "Signin" : "Signup";
  const btnLabel = mode === "signin" ? "Sign In" : "Sign Up";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <NextImage src="/logo-green.png" width={195} height={60} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <div className={styles.control}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeHandler}
            />
          </div>
          <div className={styles.control}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
          </div>
          <button type="submit">{btnLabel}</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
