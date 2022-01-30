import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Form, Formik, Field } from 'formik';
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Alert,
  AlertTitle,
  Tabs,
  Tab,
  MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const Confirmation = ({ button }) => {
  const [open, setOpen] = React.useState(false);
  const [confirmationError, setConfirmationError] = React.useState(false);
  const [confirmationSuccess, setConfirmationSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const inputs = [
    { name: '', label: 'Nombre y apellidos' },
    {
      name: ' - Entrante',
      label: 'Entrante de la cena',
      options: [
        'Chile güero relleno de marlyn ahumado',
        'Tacos estilo gobernador',
        'Veggie',
      ],
    },
    {
      name: ' - Principal',
      label: 'Plato principal de la cena',
      options: [
        'Filete de res en salsa de mostaza antigua',
        'Atún con costra de ajonjolí negro en salsa ponzu',
        'Veggie',
      ],
    },
  ];

  const invitados = [
    {
      key: 'Invitado 1',
      tab: 'Invitad@ 1',
      inputs,
    },
    {
      key: 'Invitado 2',
      tab: 'Invitad@ 2',
      inputs,
    },
    {
      key: 'Invitado 3',
      tab: 'Invitad@ 3',
      inputs,
    },
    {
      key: 'Invitado 4',
      tab: 'Invitad@ 4',
      inputs,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (data) => {
    setLoading(true);
    try {
      await axios.post('https://sheetdb.io/api/v1/7a2rjog0wf3da', data);
      setConfirmationSuccess(true);
    } catch (err) {
      setConfirmationError(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant='contained'
        size='large'
        sx={{
          width: '230px',
          backgroundColor: '#e27c6e',
          color: '#ffffff',
          border: '1px solid #e27c6e',
          borderRadius: '20px',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#000000',
            color: '#e27c6e',
            border: '1px solid #e27c6e',
            boxShadow: 'none',
          },
        }}
      >
        {button}
      </Button>
      <Dialog
        fullWidth
        maxWidth='sm'
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', padding: '40px' }}>
          Confirma tu asistencia
        </DialogTitle>
        <DialogContent sx={{ padding: '40px' }}>
          {confirmationSuccess && (
            <Alert severity='success' sx={{ margin: '0 0 0 0' }}>
              <AlertTitle>Invitación confirmada</AlertTitle>
              Muchas gracias por confirmar tu asistencia.{' '}
              <strong>
                No olvides revisar la web de vez en cuando para estar al día de
                las cosas que vayamos publicando.
              </strong>
            </Alert>
          )}
          {confirmationError && (
            <Alert severity='error' sx={{ margin: '20px 0 20px 0' }}>
              <AlertTitle>Error en la confirmación</AlertTitle>
              Ups, algo fué mal.{' '}
              <strong>
                Ponte en contacto con Dunyazath o Adrià y no te preocupes que te
                guardamos sitio sin falta. No olvides revisar la web de vez en
                cuando para estar al día de las cosas que vayamos publicando.
              </strong>
            </Alert>
          )}
          {!confirmationError && !confirmationSuccess && (
            <>
              <DialogContentText
                sx={{ textAlign: 'center', marginBottom: '40px' }}
              >
                La confirmación de asistencia es su pase de entrada a la
                recepción. El último día para registrarse es el 30 de mayo.
                ¡Muchas gracias!
              </DialogContentText>
              <Formik
                initialValues={{
                  Transporte: 'Sí',
                  'Invitado 1': '',
                  'Invitado 1 - Entrante': '',
                  'Invitado 1 - Principal': '',
                  'Invitado 2': '',
                  'Invitado 2 - Entrante': '',
                  'Invitado 2 - Principal': '',
                  'Invitado 3': '',
                  'Invitado 3 - Entrante': '',
                  'Invitado 3 - Principal': '',
                  'Invitado 4': '',
                  'Invitado 4 - Entrante': '',
                  'Invitado 4 - Principal': '',
                }}
                onSubmit={handleSubmitForm}
              >
                {({ setFieldValue }) => (
                  <Form>
                    <Box
                      sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        marginBottom: '30px',
                      }}
                    >
                      <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        variant='scrollable'
                        scrollButtons
                        allowScrollButtonsMobile
                      >
                        {invitados.map(({ tab }) => (
                          <Tab key={tab} label={tab} />
                        ))}
                      </Tabs>
                    </Box>
                    {invitados.map(({ tab, inputs, key }, index) => (
                      <Stack
                        key={tab}
                        direction='column'
                        spacing={4}
                        sx={{
                          display: selectedTab !== index ? 'none' : 'block',
                        }}
                      >
                        {inputs.map(({ name, label, options }) => (
                          <Field
                            key={`${tab}${name}`}
                            name={`${key}${name}`}
                            as={TextField}
                            label={label}
                            select={options ? true : false}
                            fullWidth
                            className='MuiTextField-root--thin'
                            onChange={({ target }) => {
                              setFieldValue(
                                `${key}${name}`,
                                target.value,
                                true
                              );
                            }}
                          >
                            {options &&
                              options?.map((option) => (
                                <MenuItem key={option} value={option}>
                                  <Box sx={{ whiteSpace: 'normal' }}>
                                    {option}
                                  </Box>
                                </MenuItem>
                              ))}
                          </Field>
                        ))}
                      </Stack>
                    ))}
                    <FormControlLabel
                      sx={{ marginTop: '20px' }}
                      name='Transporte'
                      control={<Checkbox defaultChecked />}
                      label='Marca la casilla si necesitas transporte de la iglesia a la recepción'
                      onChange={({ target }) => {
                        setFieldValue(
                          `Transporte`,
                          target.checked ? 'Sí' : 'No',
                          true
                        );
                      }}
                    />

                    <Stack alignItems='center' sx={{ padding: '0' }}>
                      <LoadingButton
                        type='submit'
                        variant='contained'
                        size='large'
                        loading={loading}
                        sx={{
                          marginTop: '20px',
                          backgroundColor: '#000000',
                          color: '#ffffff',
                          border: '1px solid #000000',
                          borderRadius: '20px',
                          '&:hover': {
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            border: '1px solid #000000',
                          },
                        }}
                      >
                        {button}
                      </LoadingButton>
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
