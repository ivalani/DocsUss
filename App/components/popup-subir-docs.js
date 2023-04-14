import { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./popup-subir-docs.module.css";

const PopupSubirDocs = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.popupSubirdocs}>
      <div className={styles.popUp}>
        <img className={styles.popUpChild} alt="" src="/rectangle-48.svg" />
        <div className={styles.campo}>
          <b className={styles.descripcinOpcional}>Descripción (opcional)</b>
          <TextField
            className={styles.campoChild}
            sx={{ width: 600 }}
            color="primary"
            variant="outlined"
            type="text"
            name="Descripcion"
            label="Label"
            placeholder="Placeholder"
            helperText="Información del documento  (opcional)"
            margin="normal"
          />
        </div>
        <div className={styles.campo1}>
          <b className={styles.nombreDelDocumento}>Nombre del documento</b>
          <img className={styles.campoItem} alt="" src="/rectangle-45.svg" />
        </div>
        <Button
          className={styles.registrar}
          sx={{ width: 162.55859375 }}
          variant="contained"
          color="primary"
        >
          Subir
        </Button>
        <input
          className={styles.campo2}
          type="file"
          required
          data-animate-on-scroll
        />
        <b className={styles.ingresaLaInformacion}>
          Ingresa la informacion necesaria para subir tu documento.
        </b>
        <img
          className={styles.cerrarIcon}
          alt=""
          src="/cerrar.svg"
          onClick={onClose}
        />
        <img
          className={styles.fileIcon}
          alt=""
          src="/file-icon.svg"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default PopupSubirDocs;
