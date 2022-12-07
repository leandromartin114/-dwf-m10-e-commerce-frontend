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
				hostname: "i.picsum.photos",
			},
		],
	},
});

module.exports = nextConfig;
