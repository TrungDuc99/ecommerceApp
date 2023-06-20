import { showErrorMessage } from '@/ui';

import axiosClient from '../common/axios-client';
import type { CategoryResponse } from './types';

const categoryApi = {
  getAll: (): Promise<any> => {
    return axiosClient.get('/category');
  },
  getProductByCategoryId: (param: { categoryId: number }): Promise<any> => {
    const url = '/category/products';
    return axiosClient.get(url, { params: { categoryId: param.categoryId } });
  },
};

const categoryService = {
  getAll: async (): Promise<CategoryResponse | undefined> => {
    try {
      const res = await categoryApi.getAll();
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
  getProductByCategoryId: async (
    categoryId: number
  ): Promise<CategoryResponse | undefined> => {
    try {
      const res = await categoryApi.getProductByCategoryId({
        categoryId: categoryId,
      });
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

export default categoryService;
