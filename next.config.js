/** @type {import('next').NextConfig} */
const nextConfig = {
	headers() {
		return [
			{
				source: '/:all*(svg|jpg|png|webp)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=172800, must-revalidate',
					},
				],
			},
		];
	},
  reactStrictMode: true,
}

module.exports = nextConfig
const isProduction = process.env.NODE_ENV === 'production';
