export interface Post {
  readonly id: number;
  readonly userId: number;
  readonly createdAt: Date;
  readonly title: string;
  readonly content: string;
}
