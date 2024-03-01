/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
            },
            {
                protocol:'http',
                hostname:'localhost',
                port:'3000'
            },
        ]
    }
};

export default nextConfig;
