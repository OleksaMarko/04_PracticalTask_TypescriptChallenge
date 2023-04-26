export function coveredTask() {
  interface ObjectShape {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const initArray: ObjectShape[] = [
    {
      userId: 1,
      id: 1,
      title: "Hello",
      body: "First obj",
    },
    {
      userId: 1,
      id: 2,
      title: "Hello",
      body: "Second obj",
    },
    {
      userId: 1,
      id: 3,
      title: "Hello",
      body: "Third obj",
    },
    {
      userId: 2,
      id: 1,
      title: "Bonjour",
      body: "First obj",
    },
    {
      userId: 2,
      id: 2,
      title: "Bonjour",
      body: "Second obj",
    },
    {
      userId: 2,
      id: 3,
      title: "Bonjour",
      body: "Third obj",
    },
    {
      userId: 3,
      id: 1,
      title: "Guten Morgen",
      body: "First obj",
    },
    {
      userId: 3,
      id: 2,
      title: "Guten Morgen",
      body: "Second obj",
    },
    {
      userId: 3,
      id: 3,
      title: "Guten Morgen",
      body: "Third obj",
    },
  ];

  async function updateObjectInArray<T>(
    initArray: T[],
    key: keyof T,
    value: T[keyof T],
    patch: Partial<T>
  ): Promise<T[]> {
    const copiedArray = [...initArray];

    const result = copiedArray.map((e, i: number) => {
      if (e[key] === value) {
        return { ...e, ...patch };
      } else {
        return e;
      }
    });

    return result;
  }

  updateObjectInArray<ObjectShape>(initArray, "id", 2, {
    body: "UPDATED",
    title: "UPDATED",
  }).then((result) => console.log(result));
}
