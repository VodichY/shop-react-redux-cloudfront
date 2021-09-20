import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  size: string,
  color: string,
  count: number,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string().required(),
  size: Yup.string().required(),
  color: Yup.string().required(),
  count: Yup.number().required(),
  price: Yup.number().required(),
});
