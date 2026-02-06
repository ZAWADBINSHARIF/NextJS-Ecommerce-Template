/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'merchant.skipbrands.test',
                port: '8000',
                pathname: '/storage/**',
            },
        ],
    },
};

module.exports = nextConfig;
