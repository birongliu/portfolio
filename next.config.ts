import type { NextConfig } from "next";
import { URL } from "url";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "/u/62890027",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
