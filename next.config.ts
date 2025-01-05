import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensure React Strict Mode is enabled
  output: "standalone", // Optimize for serverless environments
  webpack(config) {
    // Custom Webpack configuration for SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false, // Optional: disable SVGO optimization if needed
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
