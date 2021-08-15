import {Like} from '@features/posts/interfaces/like';

export interface Post {
  readonly id: number;
  readonly userId: number;
  readonly createdAt: Date;
  readonly content: string;
  readonly likes: ReadonlyArray<Like>;
}
