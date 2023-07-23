export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { data } = await $fetch("register");
  return data;
});
