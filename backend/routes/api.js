import express from "express";
import * as portfolioController from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/profile", portfolioController.getProfile);
router.get("/stats", portfolioController.getStats);
router.get("/skills", portfolioController.getSkills);
router.get("/experience", portfolioController.getExperience);
router.get("/projects", portfolioController.getProjects);
router.get("/education", portfolioController.getEducation);
router.get("/blog", portfolioController.getBlog);
router.get("/testimonials", portfolioController.getTestimonials);

router.get("/portfolio", portfolioController.getPortfolio);
router.post("/contact", portfolioController.submitContact);
router.get("/health", portfolioController.getHealth);

export default router;
