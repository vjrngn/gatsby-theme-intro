module.exports = {
  siteMetadata: {
		description: "Senior Software Engineer",
		locale: "en",
		title: "Vijay Rangan",
	},
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}
