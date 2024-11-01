// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["randomuser.me", "127.0.0.1", "ik.imagekit.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.kit.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
