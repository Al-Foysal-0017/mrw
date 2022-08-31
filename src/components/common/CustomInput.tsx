import * as React from "react";
import styles from "../../styles/contact.module.css";

const CustomInput = ({ name, label, value, onChange, required }: any) => {
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <label className={styles.input_label} htmlFor="firstName">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
