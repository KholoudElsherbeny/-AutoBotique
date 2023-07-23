import { defineEventHandler, readBody } from 'h3';

const register = defineEventHandler(async (event) => {
  await readBody(event);
  const { data } = await $fetch("register");
  return data;
});

export { register as default };
//# sourceMappingURL=register.mjs.map
