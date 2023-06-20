export interface ProductResponse {
  Categories: Category[];
  Topics: any[];
  BlogEnabled: boolean;
  NewProductsEnabled: boolean;
  ForumEnabled: boolean;
  DisplayHomepageMenuItem: boolean;
  DisplayNewProductsMenuItem: boolean;
  DisplayProductSearchMenuItem: boolean;
  DisplayCustomerInfoMenuItem: boolean;
  DisplayBlogMenuItem: boolean;
  DisplayForumsMenuItem: boolean;
  DisplayContactUsMenuItem: boolean;
  UseAjaxMenu: boolean;
  HasOnlyCategories: boolean;
  CustomProperties: CustomProperties3;
}

export interface Category {
  Name: string;
  SeName: string;
  NumberOfProducts: any;
  IncludeInTopMenu: boolean;
  SubCategories: SubCategory[];
  HaveSubCategories: boolean;
  Route: any;
  Id: number;
  CustomProperties: CustomProperties2;
}

export interface SubCategory {
  Name: string;
  SeName: string;
  NumberOfProducts: any;
  IncludeInTopMenu: boolean;
  SubCategories: any[];
  HaveSubCategories: boolean;
  Route: any;
  Id: number;
  CustomProperties: CustomProperties;
}

export interface CustomProperties {}

export interface CustomProperties2 {}

export interface CustomProperties3 {}
