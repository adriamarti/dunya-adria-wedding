import * as React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

import { Form, Formik, Field } from "formik";
import { object, string } from "yup";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Stack,
} from "@mui/material";

const Confirmation = ({ button }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = (data) => {
    console.log(data);
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
          <StaticImage src="../img/modal-bg.png" placeholder="none" />
        </Box>
        <DialogTitle sx={{ textAlign: "center" }}>
          Confirma tu asistencia
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: "center", marginBottom: "40px" }}>
            Necesitamos recibir confirmaciones antes del 20 de mayo del 2021
            para poder organizar el evento y que no falte de nada!
          </DialogContentText>
          <Formik
            initialValues={{ names: "", info: "" }}
            validationSchema={object({
              names: string().required("Este campo es obligatorio"),
              info: string(),
            })}
            onSubmit={handleSubmitForm}
          >
            {({ errors, isValid, touched, setFieldValue }) => (
              <Form>
                <Stack direction="column" spacing={2}>
                  <Field
                    error={
                      errors.liquidityCap && touched.liquidityCap ? true : false
                    }
                    name="names"
                    as={TextField}
                    label="Name(s)"
                    isRequired
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
                    error={
                      errors.liquidityCap && touched.liquidityCap ? true : false
                    }
                    name="info"
                    as={TextField}
                    label="Información adicional"
                    isRequired
                    helperText="¿Hay algo que debamos saber de cara al menú?"
                    fullWidth
                    onChange={({ target }) =>
                      setFieldValue("info", target.value, true)
                    }
                  />
                </Stack>
                <DialogActions>
                  <Button
                    onClick={handleClose}
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
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

Confirmation.propTypes = {
  button: PropTypes.string.isRequired,
};

export default Confirmation;
