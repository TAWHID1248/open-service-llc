import client from "./client";

export const getServices = () => client.get("/services/").then((r) => r.data);
export const getService = (slug) => client.get(`/services/${slug}/`).then((r) => r.data);

export const getTestimonials = (featuredOnly = false) =>
  client.get("/testimonials/", { params: featuredOnly ? { featured: "true" } : {} }).then((r) => r.data);

export const getFAQs = () => client.get("/faqs/").then((r) => r.data);

export const getCategories = () => client.get("/categories/").then((r) => r.data);

export const getBlogPosts = (categorySlug) =>
  client.get("/blog/", { params: categorySlug ? { category: categorySlug } : {} }).then((r) => r.data);

export const getBlogPost = (slug) => client.get(`/blog/${slug}/`).then((r) => r.data);

export const submitContact = (data) => client.post("/contact/", data).then((r) => r.data);
