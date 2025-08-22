import post1Img from "../assets/image1.png";
import post2Img from "../assets/image2.png";
import post3Img from "../assets/image3.png";

export interface PostType {
  email: string;
  content: string;
  createdAt: Date;
  emoji?: string;
  imageUrl?: string;
}

export const dummyPosts: PostType[] = [
  {
    email: "theresa.webb@example.com",
    content:
      " This project really stands out because of the clean design and thoughtful structure. I like how the details are presented in a simple but effective way, making it easy to follow along. Looking forward to seeing how this evolves and improves with more updates in the future!",
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
    emoji: "👍",
    imageUrl: post1Img,
  },
  {
    email: "john.doe@example.com",
    content:
      "I appreciate the effort that went into this work. The layout feels intuitive, and it definitely helps in understanding the flow better. It’s clear that a lot of attention was given to both style and usability. Can’t wait to try it once more features are included soon!",
    createdAt: new Date(Date.now() - 60 * 60 * 1000),
    emoji: "😎",
    imageUrl: post2Img,
  },
  {
    email: "alice.smith@example.com",
    content: "Hello everyone! Excited to join.",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    emoji: "😍",
    imageUrl: post3Img,
  },
];
