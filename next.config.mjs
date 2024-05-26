'use strict';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // Just to ensure that React is always on strict mode
  reactStrictMode: true,
};

export default nextConfig;
