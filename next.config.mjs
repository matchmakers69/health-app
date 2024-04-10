/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: process.env.NEXT_PUBLIC_BASE_PATH,
	assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
	images: {
		domains: ["images.unsplash.com", "res.cloudinary.com"],
		// Make ENV
		unoptimized: true,
	},
};

export default nextConfig;
