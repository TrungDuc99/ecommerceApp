import { showErrorMessage } from '@/ui';

import axiosClient from '../common/axios-client';
import type { ProductResponse } from './types';

const productApi = {
  getAll: (): Promise<any> => {
    return axiosClient.post('/category');
  },
};

const productService = {
  authenticate: async (): Promise<ProductResponse | undefined> => {
    try {
      const res = await productApi.getAll();
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

export default productService;
