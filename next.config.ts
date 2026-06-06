import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // firebase-admin pulls in gRPC / optional native deps that Turbopack must not bundle
  serverExternalPackages: ["firebase-admin"],
  experimental: {
    // Admin image uploads pass through a Server Action; default limit is 1MB, forms allow 5MB
    serverActions: { bodySizeLimit: "8mb" },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Firebase Storage public download URLs
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
};

export default nextConfig;
