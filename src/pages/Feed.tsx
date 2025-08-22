import { useState } from "react";

/* Components */
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Post from "../components/Common/Post/Post";
import AuthModal from "../components/Modal/AuthModal";
import InputBox from "../components/Common/InputBox/InputBox/InputBox";

/* Constant */
import { dummyPosts, type PostType } from "../Constants/dummyPosts";

/* Images */
import Img1 from "../assets/image1.png";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";

interface FeedProps {
  user: string | null;
  setUser: (u: string | null) => void;
}

export default function Feed({ user, setUser }: FeedProps) {
  const [posts, setPosts] = useState<PostType[]>(dummyPosts);
  const [newPost, setNewPost] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handlePublish = () => {
    if (!user) {
      setShowModal(true);
      setShowSignUp(false);
      return;
    }
    if (newPost.trim() === "") return;

    const images = [Img1, Img2, Img3];
    const emojis = ["❤️", "😂", "✌🏻", "😍", "😎", "🥲", "🎶", "🤓"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomEmojis = emojis[Math.floor(Math.random() * emojis.length)];

    const newPostObj: PostType = {
      email: user,
      content: newPost,
      createdAt: new Date(),
      emoji: `${randomEmojis}`,
      imageUrl: randomImage,
    };

    setPosts([newPostObj, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      <div className="mb-6 sticky top-[50px] z-30 ">
        <InputBox
          value={newPost}
          setValue={setNewPost}
          onClick={handlePublish}
        />
      </div>

      <div className="flex flex-col gap-[2rem] mb-[20px] ">
        {posts.map((post, index) => (
          <Post
            key={index}
            email={post.email}
            content={post.content}
            createdAt={post.createdAt}
            emoji={post.emoji}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)}>
        {!showSignUp ? (
          <SignIn
            setUser={(u) => {
              setUser(u);
              setShowModal(false);
            }}
            switchToSignUp={() => setShowSignUp(true)}
            isModal
          />
        ) : (
          <SignUp
            setUser={(u) => {
              setUser(u);
              setShowModal(false);
            }}
            switchToSignIn={() => setShowSignUp(false)}
            isModal
          />
        )}
      </AuthModal>
    </div>
  );
}
