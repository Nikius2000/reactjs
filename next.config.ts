import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['avatars.mds.yandex.net'], // Allow images from this domain
  },
}

export default nextConfig;
