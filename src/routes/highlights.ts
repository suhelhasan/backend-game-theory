import { Router, Request, Response } from "express";
import { mockHighlights } from "../data/mockData";
import { Highlight } from "../models/Highlight";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Extract query parameters
  const { sport, match_type, user } = req.query;

  // Filter the mock data based on query parameters
  let filteredHighlights: Highlight[] = mockHighlights;

  if (sport) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) => highlight.sport === sport
    );
  }

  if (match_type) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) => highlight.match_type === match_type
    );
  }

  if (user) {
    filteredHighlights = filteredHighlights.filter(
      (highlight) => highlight.user === user
    );
  }

  res.json(filteredHighlights);
});

export default router;
