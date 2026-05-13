export const client = {
  name: "Client Name",
  tagline: "Client tagline here",
  description: "Client description here",
  domain: "clientdomain.com",
  location: "City, Country",
  contact: {
    email: "hello@client.com",
    phone: "+1 000 000 0000",
    address: "123 Main St",
    hours: "Mon-Fri 9am-5pm",
  },
  social: {
    instagram: "",
    facebook: "",
  },
  brand: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#f5f5f5",
      background: "#ffffff",
      text: "#111111",
      muted: "#6b7280",
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    borderRadius: "8px",
  },
  pages: ["home", "about", "services", "contact"],
  features: {
    contactForm: true,
    gallery: false,
    blog: false,
    booking: false,
    testimonials: true,
    seo: true,
  },
} as const
