/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'thefusionclub.blr1.cdn.digitaloceanspaces.com',
                port: '',
            },
            {
                protocol:'http',
                hostname:'localhost',
                port:'3000'
            },
            {
                protocol:'http',
                hostname:'teamnurture.vercel.app',
                port:'',
            },
            {
                protocol:'https',
                hostname:'teamnurture.vercel.app',
                port:'',
            },
        ]
    }
}

module.exports = nextConfig;
