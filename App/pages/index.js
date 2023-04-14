import { useState, useCallback } from "react";
import { Button, Icon } from "@mui/material";
import PopupSubirDocs from "../components/popup-subir-docs";
import PortalPopup from "../components/portal-popup";
import styles from "./index.module.css";

const SubirDocumento = () => {
  const [isPopupSubirDocsOpen, setPopupSubirDocsOpen] = useState(false);

  const openPopupSubirDocs = useCallback(() => {
    setPopupSubirDocsOpen(true);
  }, []);

  const closePopupSubirDocs = useCallback(() => {
    setPopupSubirDocsOpen(false);
  }, []);

  return (
    <>
      <div className={styles.subirDocumento}>
        <div className={styles.misDocumentos}>
        
          <div className={styles.misDocumentosChild} />
          <div className={styles.nombreApellidos}>{`Nombre - Apellidos `}</div>
          <b className={styles.bienvenidx}>Bienvenidx</b>
          <div className={styles.infoDocumentos}>
            <div className={styles.documento1}>
              <Button
                className={styles.borrarCuenta}
                sx={{ width: 127 }}
                variant="contained"
                color="primary"
              >
                Editar
              </Button>
              <Button
                className={styles.borrarEditar}
                sx={{ width: 127 }}
                variant="contained"
                color="primary"
              >
                Borrar
              </Button>
              <div className={styles.pendiente}>Pendiente</div>
              <div className={styles.ine}>INE</div>
              <img
                className={styles.bifileEarmarkPdfIcon}
                alt=""
                src="/bifileearmarkpdf.svg"
              />
              <div className={styles.documento1Child} />
            </div>
            <Button
              className={styles.subir}
              sx={{ width: 173 }}
              variant="contained"
              color="primary"
              onClick={openPopupSubirDocs}
            >
              Subir nuevo
            </Button>
            <div className={styles.documento2}>
              <Button
                className={styles.borrarCuenta}
                sx={{ width: 127 }}
                variant="contained"
                color="primary"
              >
                Editar
              </Button>
              <Button
                className={styles.borrarEditar}
                sx={{ width: 127 }}
                variant="contained"
                color="primary"
              >
                Borrar
              </Button>
              <label className={styles.pendiente}>Rechazado</label>
              <div className={styles.comprobanteDeDomicilio}>
                Comprobante de domicilio
              </div>
              <img
                className={styles.bifileEarmarkPdfIcon}
                alt=""
                src="/bifileearmarkpdf.svg"
              />
              <div className={styles.documento1Child} />
            </div>
            <div className={styles.documento21}>
              <Button
                className={styles.borrarCuenta}
                sx={{ width: 127 }}
                variant="contained"
                color="primary"
              >
                Editar
              </Button>
              <Button
                className={styles.borrarEditar}
                sx={{ width: 127 }}
                variant="contained"
                name="Borrar"
                color="primary"
              >
                Borrar
              </Button>
              <div className={styles.pendiente}>Aceptado</div>
              <label className={styles.comprobanteDeDomicilio}>
                Licencia de conducir
              </label>
              <img
                className={styles.bifileEarmarkPdfIcon}
                alt=""
                src="/bifileearmarkpdf.svg"
              />
              <div className={styles.documento1Child} />
            </div>
            <b className={styles.misDocumentos1}>Mis Documentos</b>
          </div>
        </div>
        <div className={styles.browser}>
          <div className={styles.shapeWithText} />
          <div className={styles.shapeWithText1} />
          <div className={styles.shapeWithText2} />
          <div className={styles.shapeWithText2} />
        </div>
        <div className={styles.sideMenu}>
          <div className={styles.top}>
            <div className={styles.swivel}>
              <div className={styles.swVelParent}>
                <b className={styles.swVel}>SW VEL</b>
              </div>
            </div>
            <div className={styles.profile}>
              <img className={styles.icon} alt="" src="/icon.svg" />
              <div className={styles.text}>
                <b className={styles.gerente}>Nombre</b>
                <div className={styles.mail}>nombre@demo.com</div>
              </div>
            </div>
            <div className={styles.listitem}>
              <div className={styles.listManu}>
                <div className={styles.content}>
                  <img className={styles.icon1} alt="" src="/icon1.svg" />
                  <div className={styles.text1}>Mi Cuenta</div>
                </div>
              </div>
              <div className={styles.listManu}>
                <div className={styles.content}>
                  <img className={styles.folderIcon} alt="" src="/folder.svg" />
                  <div className={styles.text2}>Mis Documentos</div>
                </div>
              </div>
              <div className={styles.listManu}>
                <div className={styles.content}>
                  <img className={styles.icons} alt="" src="/icons.svg" />
                  <div className={styles.text1}>Mis Solicitudes</div>
                </div>
              </div>
              <div className={styles.listManu}>
                <div className={styles.content}>
                  <img className={styles.icons1} alt="" src="/icons1.svg" />
                  <div className={styles.text1}>Favoritos</div>
                </div>
              </div>
              <div className={styles.listManu}>
                <div className={styles.content}>
                  <img className={styles.icons1} alt="" src="/icons2.svg" />
                  <div className={styles.text1}>Catalogo</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.listManu}>
              <div className={styles.content}>
                <img className={styles.icons1} alt="" src="/icons3.svg" />
                <div className={styles.text1}>Cerrar Sesión</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupSubirDocsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupSubirDocs}
        >
          <PopupSubirDocs onClose={closePopupSubirDocs} />
        </PortalPopup>
      )}
    </>
  );
};

export default SubirDocumento;
