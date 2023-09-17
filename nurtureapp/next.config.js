/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
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
            {
                protocol:'http',
                hostname:'thefusionclub.in',
                port:'',
            },
            {
                protocol:'https',
                hostname:'thefusionclub.in',
                port:'',
            },
        ]
    }
}

module.exports = nextConfig
