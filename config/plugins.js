module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_2DpWdGGVxDaOUQ068O7zTgsOhh3C/zgw5FaaiRz",
        apiToken: "T84GXg1U4mmxPfjnOOY71DPn",
        appFilter: "enriquemontes-strapi",
        teamFilter: "emontes",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });