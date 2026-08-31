import { profile, stats, skills, experience, projects, education, blog, testimonials } from "../data/portfolio.js";

export function getProfile() { return profile; }
export function getStats() { return stats; }
export function getSkills() { return skills; }
export function getExperience() { return experience; }
export function getProjects() { return projects; }
export function getEducation() { return education; }
export function getBlog() { return blog; }
export function getTestimonials() { return testimonials; }

export function getAllPortfolioData() {
  return { profile, stats, skills, experience, projects, education, blog, testimonials };
}
