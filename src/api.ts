interface UsersInPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}


export class Api {
  static async getAllUsers(): Promise<UsersInPost[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  }
}
