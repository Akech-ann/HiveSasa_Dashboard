import { createPost } from "../Utilities/utils";
import { useState } from "react";
type PostData = {
  title: string;
  content: string;
};
const useCreatePost = () => {
  const [createdPost, setCreatedPost] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const createNewPost = async (postData: PostData) => {
    setIsLoading(true);
    try {
      const result = await createPost(postData as PostData);
      if (result instanceof Error) {
        throw result;
      }
      setCreatedPost(result);
      setError(null);
    } catch (error:any) {
      setError(error.message || "Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return {
    createNewPost,
    createdPost,
    error,
    isLoading,
  };
};
export default useCreatePost;