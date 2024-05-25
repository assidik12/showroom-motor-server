import Joi from "joi";

export const productSchema = Joi.object({
  merek: Joi.string().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  stok: Joi.number().required(),
  spesifikasi: Joi.string().required(),
  price: Joi.number().required(),
  tipe: Joi.string().required(),
  tahun: Joi.string().required(),
  image: Joi.string().required(),
});
