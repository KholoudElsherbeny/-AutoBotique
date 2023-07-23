export default function ({ app, redirect }) {
  if (app.$cookies.get("auto_user_token")) {
    return redirect("/");
  }
}
