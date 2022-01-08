import * as React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { StaticImage } from "gatsby-plugin-image";

import { Form, Formik, Field } from "formik";
import { object, string } from "yup";
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";

const Confirmation = ({ button }) => {
  const [open, setOpen] = React.useState(false);
  const [confirmationError, setConfirmationError] = React.useState(false);
  const [confirmationSuccess, setConfirmationSuccess] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (data) => {
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbwHz3ey1KnaHegZknXWBgM0JPnmYkl0EOA5hZAjh_wMsC50WERnsA5GoyFTPrXZf4DYUg/exec",
        new FormData(data)
      );
      setConfirmationSuccess(true);
    } catch (err) {
      setConfirmationError(true);
      console.log(err);
    }
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid #ffffff",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff",
            border: "1px solid #ffffff",
          },
        }}
      >
        {button}
      </Button>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
          ".MuiDialog-paper": {
            padding: { xs: "20px 20px 70px 20px", sm: "20px 50px 140px 50px" },
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "120%",
            bottom: {
              xs: "-50px",
              sm: "-50px",
            },
            left: {
              xs: "-45px",
              sm: "-60px",
            },
          }}
        >
          <StaticImage
            src="../img/modal-bg.png"
            placeholder="none"
            alt="flowers"
          />
        </Box>
        <DialogTitle sx={{ textAlign: "center" }}>
          Confirma tu asistencia
        </DialogTitle>
        <DialogContent>
          {confirmationSuccess && (
            <Alert severity="success" sx={{ margin: "20px 0 20px 0" }}>
              <AlertTitle>Invitación confirmada</AlertTitle>
              Muchas gracias por confirmar tu asistencia.{" "}
              <strong>
                No olvides revisar la web de vez en cuando para estar al día de
                las cosas que vayamos publicando.
              </strong>
            </Alert>
          )}
          {confirmationError && (
            <Alert severity="error" sx={{ margin: "20px 0 20px 0" }}>
              <AlertTitle>Error en la confirmaciñon</AlertTitle>
              Ups, algo fué mal.{" "}
              <strong>
                Ponte en contacto con Dunya o Adrià y no te preocupes que te
                guardamos sitio sin falta. No olvides revisar la web de vez en
                cuando para estar al día de las cosas que vayamos publicando.
              </strong>
            </Alert>
          )}
          {!confirmationError && !confirmationSuccess && (
            <>
              <DialogContentText
                sx={{ textAlign: "center", marginBottom: "40px" }}
              >
                ¡Necesitamos recibir confirmaciones antes del 30 de mayo del
                2022 para poder organizar el evento y que no falte de nada!
              </DialogContentText>
              <Formik
                initialValues={{ names: "", info: "" }}
                validationSchema={object({
                  names: string().required("Este campo es obligatorio"),
                  info: string(),
                })}
                onSubmit={handleSubmitForm}
              >
                {({ errors, touched, setFieldValue }) => (
                  <Form>
                    <Stack direction="column" spacing={2}>
                      <Field
                        error={errors.names ? true : false}
                        name="names"
                        as={TextField}
                        label="Nombre(s)"
                        helperText={
                          errors.names && touched.names
                            ? errors.names
                            : "Separa los nombres por comas en caso de ser más de un invitado."
                        }
                        fullWidth
                        onChange={({ target }) =>
                          setFieldValue("names", target.value, true)
                        }
                      />
                      <Field
                        name="Info"
                        as={TextField}
                        multiline
                        rows={4}
                        label="Información adicional"
                        helperText="¿Hay algo que debamos saber de cara al menú?"
                        fullWidth
                        onChange={({ target }) =>
                          setFieldValue("info", target.value, true)
                        }
                      />
                    </Stack>
                    <Stack alignItems="center" sx={{ padding: "0" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{
                          marginTop: "20px",
                          backgroundColor: "#000000",
                          color: "#ffffff",
                          border: "1px solid #000000",
                          borderRadius: "20px",
                          "&:hover": {
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #000000",
                          },
                        }}
                      >
                        {button}
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

Confirmation.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Confirmation;
