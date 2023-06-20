import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { showMessage } from 'react-native-flash-message';

import authenticateService from '@/api/auth';
import type { AuthenticateResponse } from '@/api/auth/types';
import { useAuth } from '@/core';

import type { LoginFormProps } from './login-form';
import { LoginForm } from './login-form';

export const Login = () => {
  const signIn = useAuth.use.signIn();
  const mutationLogin = useMutation(authenticateService.authenticate, {
    onSuccess: (data: AuthenticateResponse | undefined) => {
      if (data) {
        showMessage({
          message: 'Đăng nhập thành công',
          type: 'success',
        });
        signIn({ access: data.Token.AccessToken, refresh: 'refresh-token' });
      }
    },
    onError: (error: any, variables: any) => {
      console.log({ error }, { variables });
    },
  });
  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    mutationLogin.mutate({
      email: data.email,
      password: data.password,
    });
  };
  return <LoginForm onSubmit={onSubmit} />;
};
