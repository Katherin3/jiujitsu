import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';



const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};
// If you want to use the `next-intl` plugin, you can use the following code
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
