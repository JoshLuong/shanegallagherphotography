const withLess = require('next-with-less')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */

// These configs are for the email components to be used from the server
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
        ]
    }
};

module.exports = withPlugins([withLess, withImages], nextConfig)
