export default function ({ app, redirect }) {
  if (!app.$cookies.get("auto_user_token")) {
    // console.log(store.state.auth.loggedIn)
    return redirect("/auth/login");
  }
}
