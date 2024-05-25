import Joi from "joi";

export const schemaRegisteer = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),

  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  repeat_password: Joi.ref("password"),

  address: Joi.string().alphanum().required(),

  role: Joi.string().optional(),

  handphone: Joi.string().alphanum().required(),
});

export const schemaLogin = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
});
