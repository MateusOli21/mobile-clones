import poster01 from "../../assets/poster/01.jpg";
import poster02 from "../../assets/poster/02.jpg";
import video01 from "../../assets/videos/01.mp4";
import video02 from "../../assets/videos/02.mp4";
import avatar01 from "../../assets/avatar/01.jpg";
import avatar02 from "../../assets/avatar/02.jpg";

const api = [
  {
    id: 0,
    poster: poster01,
    video: video01,
    user: {
      username: "whinderssonnunes",
      description: "Sed ut perspiciatis unde omnis iste.",
      music: "original",
      avatar: avatar01,
    },
    count: {
      likes: "1.1M",
      comments: "4050",
      share: "2800",
    },
  },
  {
    id: 1,
    poster: poster02,
    video: video02,
    user: {
      username: "luismariz",
      description: "natus error sit voluptatem accusantium doloremque lauda.",
      music: "original",
      avatar: avatar02,
    },
    count: {
      likes: "450k",
      comments: "1020",
      share: "420",
    },
  },
];

export default api;
