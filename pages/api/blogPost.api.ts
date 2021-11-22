import axios from "axios";
import { IPost } from "../../types";

const fetchPosts = async (): Promise<IPost[]> => {
  let { data } = await axios.get<IPost[]>(
    "https://6144e843411c860017d256f0.mockapi.io/api/v1/posts"
  );

  data = data.sort((a: IPost, b: IPost) => {
    const da = new Date(a.createdAt);
    const db = new Date(b.createdAt);
    return db.getTime() - da.getTime();
  });

  return data;
};

export { fetchPosts };
