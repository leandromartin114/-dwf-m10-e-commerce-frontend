/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = withSvgr({
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dl.airtable.com",
				pathname: "/.attachments/**",
			},
			{
				protocol: "https",
				hostname: "v5.airtableusercontent.com",
				pathname: "/v1/**",
			},
		],
	},
});

module.exports = nextConfig;
