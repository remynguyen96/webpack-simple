/**
 * @Description: Singleton Pattern
 */
class HttpClient {
  async get(url) {
    const response = await fetch(url);
    const resultApi = await response.json();
    return resultApi;
  }
}

class PostService {
  constructor() {
    this.value = 10;
  }

  configure(config) {
    this.configureHttpClient(config);
    this.configureEndPoints(config);
  }

  configureHttpClient(config) {
    if (!config.httpClient) {
      throw new Error('HttpClient not configured !!!');
    }
    this.httpClient = config.httpClient;
  }

  configureEndPoints(config) {
    const { endpoints } = config;
    if (!endpoints || !endpoints.posts || !endpoints.comments ) {
      throw new Error('Endpoint poorly configured !!!');
    }
    this.postEndPoints = endpoints.posts;
    this.commendtEndPoints = endpoints.comments;
  }

  async getPosts() {
    const responsePosts = await this.httpClient.get(this.postEndPoints);
    return responsePosts;
  }

  async getComments() {
    const responseComments = await this.httpClient.get(this.commendtEndPoints);
    return responseComments;
  }
}

class PostServiceFactory {
  prepareInstance() {
    const config = {
      httpClient: new HttpClient(),
      endpoints: {
        posts: 'http://jsonplaceholder.typicode.com/posts?_start=5&_limit=20',
        comments: 'http://jsonplaceholder.typicode.com/comments?_start=5&_limit=20',
      },
    };
    this.postsService = new PostService();
    this.postsService.configure(config);
  };

  getInstance() {
    if (!this.postsService) {
      this.prepareInstance();
    }
    return this.postsService;
  };
}

const postsServiceFactory = new PostServiceFactory();
const postService = postsServiceFactory.getInstance();
postService.value += 5;
let { getPosts, getComments } = {};
(async function() {
  getPosts = await postService.getPosts();
  getComments = await postService.getComments();
  console.log(getPosts);
  console.log(getComments);
  postService.value += 10;
  console.log(postService.value);
}());

