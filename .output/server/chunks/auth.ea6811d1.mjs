function auth({ app, redirect }) {
  if (!app.$cookies.get("auto_user_token")) {
    return redirect("/auth/login");
  }
}

export { auth as default };
//# sourceMappingURL=auth.ea6811d1.mjs.map
