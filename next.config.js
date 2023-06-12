const withLess = require('next-with-less')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

/** @type {import('next').NextConfig} */

module.exports = withPlugins([withLess, withImages])
