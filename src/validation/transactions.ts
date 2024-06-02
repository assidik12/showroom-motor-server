import Joi from "joi";

export const transactionSchema = Joi.object({
  user_email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  total_price: Joi.number().required(),
  date: Joi.date().required(),
  order_number: Joi.string().required(),
});
