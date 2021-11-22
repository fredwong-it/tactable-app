import { useQuery } from "react-query";
import { IPost } from "../../types";
import { getPosts } from "../api/blogPost.api";

export const fetchPosts = (): IPost[] | undefined => {
  const { data } = useQuery("post", getPosts);

  return data
};
