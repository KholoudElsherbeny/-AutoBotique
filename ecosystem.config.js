module.exports = {
  apps: [
    {
      name: "auto_boutique",
      exec_mode: "cluster",
      script: ".output/server/index.mjs",
      port: "3000",
    },
  ],
};
