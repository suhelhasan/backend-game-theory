import { Highlight } from "../models/Highlight";

export const mockHighlights: Highlight[] = [
  {
    match_id: 1,
    sport: "badminton",
    match_type: "1v1",
    user: "Sudeep Naru",
    video_url:
      "https://videos.pexels.com/video-files/2932301/2932301-uhd_2732_1440_24fps.mp4",
    key_moments: [
      {
        time: 3,
        description: "scores a point",
        start_time: 3,
        end_time: 6,
      },
      {
        time: 4,
        description: "Makes a great save",
        start_time: 5,
        end_time: 9,
      },
    ],
    statistics: { calories_burned: 100, shot_accuracy: 90 },
  },
  {
    match_id: 2,
    sport: "badminton",
    match_type: "2v2",
    user: "Rahul Guota",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    key_moments: [
      {
        time: 3,
        description: "Scores a point",
        start_time: 3,
        end_time: 6,
      },
      {
        time: 4,
        description: "Makes a great save",
        start_time: 5,
        end_time: 9,
      },
    ],
    statistics: { calories_burned: 17, shot_accuracy: 40 },
  },
  {
    match_id: 3,
    sport: "football",
    match_type: "1v1",
    user: "Gungun Negi",
    video_url: "https://www.w3schools.com/html/mov_bbb.mp4",
    key_moments: [
      {
        time: 3,
        description: "Scores a point",
        start_time: 3,
        end_time: 6,
      },
      {
        time: 4,
        description: "Makes a great save",
        start_time: 5,
        end_time: 9,
      },
    ],
    statistics: { calories_burned: 60, shot_accuracy: 15 },
  },
];
