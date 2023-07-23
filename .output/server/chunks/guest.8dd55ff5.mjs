function guest({ app, redirect }) {
  if (app.$cookies.get("auto_user_token")) {
    return redirect("/");
  }
}

export { guest as default };
//# sourceMappingURL=guest.8dd55ff5.mjs.map
