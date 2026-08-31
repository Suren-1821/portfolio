import * as portfolioService from "../services/portfolioService.js";
import { sendContactEmail } from "../services/emailService.js";

export function getProfile(req, res) { res.json(portfolioService.getProfile()); }
export function getStats(req, res) { res.json(portfolioService.getStats()); }
export function getSkills(req, res) { res.json(portfolioService.getSkills()); }
export function getExperience(req, res) { res.json(portfolioService.getExperience()); }
export function getProjects(req, res) { res.json(portfolioService.getProjects()); }
export function getEducation(req, res) { res.json(portfolioService.getEducation()); }
export function getBlog(req, res) { res.json(portfolioService.getBlog()); }
export function getTestimonials(req, res) { res.json(portfolioService.getTestimonials()); }

export function getPortfolio(req, res) {
  res.json(portfolioService.getAllPortfolioData());
}

export async function submitContact(req, res) {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "name, email, and message are all required." });
  }
  
  try {
    await sendContactEmail(name, email, message);
    console.log("New contact message sent:", { name, email });
    res.status(201).json({ status: "received" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
}

export function getHealth(req, res) {
  res.json({ status: "ok" });
}
