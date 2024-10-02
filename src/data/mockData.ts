import { Highlight } from "../models/Highlight";

export const mockHighlights: Highlight[] = [
  {
    match_id: 1,
    sport: "badminton",
    match_type: "1v1",
    user: "Sudeep Naru",
    video_url:
      "https://videos.pexels.com/video-files/8052826/8052826-uhd_2560_1440_25fps.mp4",
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
    sport: "football",
    match_type: "1v1",
    user: "Gungun Negi",
    video_url:
      "https://videos.pexels.com/video-files/2932301/2932301-uhd_2732_1440_24fps.mp4",
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
        start_time: 8,
        end_time: 10,
      },
    ],
    statistics: { calories_burned: 60, shot_accuracy: 15 },
  },
  {
    match_id: 3,
    sport: "backetball",
    match_type: "2v2",
    user: "Rahul Guota",
    video_url:
      "https://videos.pexels.com/video-files/5192157/5192157-hd_1920_1080_30fps.mp4",
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
    match_id: 4,
    sport: "football",
    match_type: "1v1",
    user: "Nitin Surya",
    video_url:
      "https://videos.pexels.com/video-files/2932301/2932301-uhd_2732_1440_24fps.mp4",
    key_moments: [
      {
        time: 3,
        description: "Scores a point",
        start_time: 7,
        end_time: 10,
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
  {
    match_id: 5,
    sport: "backetball",
    match_type: "2v2",
    user: "Rahul Guota",
    video_url:
      "https://videos.pexels.com/video-files/5192157/5192157-hd_1920_1080_30fps.mp4",
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
    match_id: 6,
    sport: "badminton",
    match_type: "1v1",
    user: "Saurabh Pratap",
    video_url:
      "https://videos.pexels.com/video-files/8052826/8052826-uhd_2560_1440_25fps.mp4",
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
];
