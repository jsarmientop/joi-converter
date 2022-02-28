Generate a [Joi](https://github.com/hapijs/joi) schema from some JSON or a JS object.

Useful for creating a base to build your schema from when you have a big payload to validate.

## Example

```npm run dev
npm install -g joi-machine
echo '{"foo": {}, "bar": 45, "baz": ["foob"]}' | joi-machine
Joi.object().keys({foo: Joi.object(), bar: Joi.number().integer(), baz: Joi.array().items(Joi.string())})
```