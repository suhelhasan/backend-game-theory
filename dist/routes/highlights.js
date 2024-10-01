"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mockData_1 = require("../data/mockData");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    // Extract query parameters
    const { sport, match_type, user } = req.query;
    // Filter the mock data based on query parameters
    let filteredHighlights = mockData_1.mockHighlights;
    if (sport) {
        filteredHighlights = filteredHighlights.filter((highlight) => highlight.sport === sport);
    }
    if (match_type) {
        filteredHighlights = filteredHighlights.filter((highlight) => highlight.match_type === match_type);
    }
    if (user) {
        filteredHighlights = filteredHighlights.filter((highlight) => highlight.user === user);
    }
    res.json(filteredHighlights);
});
exports.default = router;
