import { publicAsset } from "../utils/public-asset";

export const projects = [
  {
    id: "restaurant",
    title: "Restaurant Website",
    description:
      "A modern restaurant website designed to showcase restaurant offerings with an attractive interface and responsive layout.",
    url: "https://restaurant-landing-flax.vercel.app/",
    github: "https://github.com/Gautham-k-v/Restaurant-landing-page",
    image: publicAsset("projects/restaurant.jpg"),
    imageAlt: "Screenshot of the restaurant website homepage",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    id: "gym",
    title: "Gym Website",
    description:
      "A fitness website showcasing gym services, training programs and membership information through a modern user interface.",
    url: "https://gym-landingpge.vercel.app/",
    github: "https://github.com/Gautham-k-v/gym-landingpge",
    image: publicAsset("projects/gym.jpg"),
    imageAlt: "Screenshot of the gym website homepage",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "real-estate",
    title: "Real Estate Website",
    description:
      "A modern real estate website designed to showcase properties and provide an engaging browsing experience.",
    url: "https://real-estate-rust-nu.vercel.app/",
    github: "https://github.com/Gautham-k-v/real-estate",
    image: publicAsset("projects/real-estate.jpg"),
    imageAlt: "Screenshot of the real estate website homepage",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "saaj",
    title: "SAAJ Finance",
    label: "Frontend Prototype",
    description:
      "A Loan and Daily Collection Management System concept designed to simplify financial operations.",
    url: "https://gautham-k-v.github.io/SAAJ-Financial-/",
    github: "https://github.com/Gautham-k-v/SAAJ-Financial-",
    image: publicAsset("projects/saaj.jpg"),
    imageAlt: "Screenshot of the SAAJ Finance frontend prototype",
    technologies: ["React", "Tailwind CSS", "React Router", "Recharts"],
    features: [
      "Customer Management",
      "Loan Management",
      "Daily Collection Tracking",
      "Payment Management",
      "Receipt Management",
      "Customer Ledger",
      "Collection Agent Management",
      "Reports and Analytics",
    ],
  },
];
