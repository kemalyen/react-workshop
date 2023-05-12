import React from 'react'
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadingButton as _LoadingButton } from '@mui/lab';
import { FormProvider, useForm } from 'react-hook-form';
import { useLoginUserMutation } from  '../api/authApi';
import { useEffect } from 'react';

const LoginPage = () => {
 

  const LoadingButton = styled(_LoadingButton)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
    transform: translateY(-2px);
  }
`; 

  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log('login')
      const response = loginUser(data).unwrap();


    }
    if (isError) {
     console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

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

        <FormProvider>
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
            <input name='email' label='Email Address' type='email' {...register('email', { required: true, maxLength: 30 })} value={'kemal@gazatem.com'}/>
            <input name='password' label='Password' type='password'{...register('password', { required: true, maxLength: 30 })} value={'101010'}/>

       

            <LoadingButton
              variant='contained'
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type='submit'
               
            >
              Login
            </LoadingButton>
 
          </Box>
        </FormProvider>

      </Box></Container>
  )
}

export default LoginPage