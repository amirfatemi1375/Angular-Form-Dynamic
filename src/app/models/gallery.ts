export interface Gallery {
  imageUrl: string;
  targetUrl: string;
  postedBy?: {
    name: string;
    avatarUrl: string;
  };
}
