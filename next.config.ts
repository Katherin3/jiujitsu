import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';



const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  }
};
// If you want to use the `next-intl` plugin, you can use the following code
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
