import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
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
