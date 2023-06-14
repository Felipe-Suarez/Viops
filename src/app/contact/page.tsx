"use client";

import Title from "@/components/ui/title";
import styles from "@/css/contact.module.css";
import stylesBtn from "@/css/ui/button.module.css";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    alert("Enviado");
  };

  const info = [
    {
      title: "Cual es tu nombre?",
      placeholder: "Alan Turing",
    },
    {
      title: "Cómo se llama tu proyecto?",
      placeholder: "Alphabet",
    },
    {
      title: "Cómo podemos ayudarte?",
      placeholder: "Necesito un sitio Web con tienda online",
    },
    {
      title: "Cómo es tu Email?",
      placeholder: "alanturing@alphabet.com",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Title text={info[step].title} />
        {`[ ${step + 1}/4 ]`}
      </div>

      <input type="text" className={styles.input} placeholder={`Ej: ${info[step].placeholder}`} />

      <button onClick={nextStep} className={stylesBtn.button}>
        <span className={stylesBtn.left}></span>
        <span>{step === 3 ? "ENVIAR" : "SIGUIENTE"}</span>
        <span className={stylesBtn.right}></span>
      </button>
    </div>
  );
}
