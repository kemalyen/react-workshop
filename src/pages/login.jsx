import React from 'react'
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadingButton as _LoadingButton } from '@mui/lab';
import { FormProvider, useForm } from 'react-hook-form';

const LoginPage = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 

/* const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    loginUser(values);
  };
 */

/*    const onSubmitHandler =  SubmitHandler(values){
    // 👇 Executing the loginUser Mutation
    //loginUser(values);
    console.log('asdas');

  };  */
 
  const onSubmit = (data) => console.log(data);


  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#2363eb',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          textAlign='center'
          component='h1'
          sx={{
            color: '#f9d13e',
            fontWeight: 600,
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Welcome Back!
        </Typography>
        <Typography
          variant='body1'
          component='h2'
          sx={{ color: '#e5e7eb', mb: 2 }}
        >
          Login to have access!
        </Typography>

        <FormProvider {...methods}>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete='off'
            maxWidth='27rem'
            width='100%'
            sx={{
              backgroundColor: '#e5e7eb',
              p: { xs: '1rem', sm: '2rem' },
              borderRadius: 2,
            }}
          >
            <FormInput name='email' label='Email Address' type='email' />
            <FormInput name='password' label='Password' type='password' />

            <Typography
              sx={{ fontSize: '0.9rem', mb: '1rem', textAlign: 'right' }}
            >
              <LinkItem to='/forgotpassword' style={{ color: '#333' }}>
                Forgot Password?
              </LinkItem>
            </Typography>

            <LoadingButton
              variant='contained'
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type='submit'
              loading={isLoading}
            >
              Login
            </LoadingButton>

            <Typography sx={{ fontSize: '0.9rem', mt: '1rem' }}>
              Need an account? <LinkItem to='/register'>Sign Up Here</LinkItem>
            </Typography>
          </Box>
        </FormProvider>

      </Box></Container>
  )
}

export default LoginPage