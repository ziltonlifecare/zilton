import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Developer 1 Owned Routes
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),

  // Developer 2 Owned Routes
  route("products", "routes/products.tsx"),
  route("quality", "routes/quality.tsx"),
  route("contact", "routes/contact.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("disclaimer", "routes/disclaimer.tsx"),
  route("terms", "routes/terms.tsx"),
] satisfies RouteConfig;

