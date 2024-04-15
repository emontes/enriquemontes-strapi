module.exports = [
	"strapi::errors",
	// "strapi::security",
	{
		name: "strapi::security",
		config: {
			contentSecurityPolicy: {
				directives: {
					"img-src": [
						"'self'",
						"data:",
						"blob:",
						"https://res.cloudinary.com",
						"https://market-assets.strapi.io",
						// Aquí puedes poner cualquier otra fuente que necesites
					],
					// Puedes necesitar agregar otras directivas aquí
				},
			},
		},
	},
	"strapi::cors",
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
