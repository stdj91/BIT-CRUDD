import { http } from "./HttpService";
import { POSTS_URL } from "../shared/constants";
import { Post } from "../model/Post";

class PostService {
  getPosts() {
    return http.get(POSTS_URL).then(postData => {
      return postData.map(post => {
        return new Post(post);
      });
    });
  }
}
export const postService = new PostService();
