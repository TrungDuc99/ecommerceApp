import { showErrorMessage } from '@/ui';

import axiosClient from '../common/axios-client';
import type { AuthenticateReq, AuthenticateResponse } from './types';

const accountApi = {
  login: ({ email, password }: AuthenticateReq): Promise<any> => {
    return axiosClient.post('/token/authen', {
      Username: email,
      Password: password,
    });
  },
};

const authenticateService = {
  authenticate: async (
    data: AuthenticateReq
  ): Promise<AuthenticateResponse | undefined> => {
    try {
      const res = await accountApi.login(data);

      if (res) {
        return res;
      }
    } catch (error: any) {
      showErrorMessage(
        `Đã xảy ra lỗi,  không thể đăng nhập ${
          error?.error
            ? error?.error
            : error?.message
            ? error?.message
            : 'vui lòng thử lại sau'
        }`
      );

      throw error;
    }
  },
};

export default authenticateService;
