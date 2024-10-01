"use strict";
// import { Highlight } from "../models/Highlight";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockHighlights = void 0;
exports.mockHighlights = [
    {
        match_id: 1,
        sport: "badminton",
        match_type: "1v1", // New field added
        user: "Sudeep", // New field added
        video_url: "https://example.com/highlight1.mp4",
        key_moments: [
            {
                time: 30,
                description: "Sudeep scores a great point",
                start_time: 0,
                end_time: 25,
            },
            {
                time: 60,
                description: "Saket makes an amazing comeback",
                start_time: 70,
                end_time: 90,
            },
        ],
        statistics: { calories_burned: 100, shot_accuracy: 90 },
    },
    {
        match_id: 2,
        sport: "badminton",
        match_type: "2v2", // New field added
        user: "PlayerA", // New field added
        video_url: "https://example.com/highlight2.mp4",
        key_moments: [
            {
                time: 30,
                description: "Player A scores a point",
                start_time: 0,
                end_time: 25,
            },
            {
                time: 60,
                description: "Player B makes a great save",
                start_time: 70,
                end_time: 90,
            },
        ],
        statistics: { calories_burned: 80, shot_accuracy: 85 },
    },
];
