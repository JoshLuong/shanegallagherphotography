interface SectionType {
  title: string;
  primaryColor: string;
  secondaryColor: string;
  width?: string;
}

export default new Map<number, SectionType>([
  [
    1,
    {
      title: "Studio",
      primaryColor: "#00522a",
      secondaryColor: "#7ddf64",
    },
  ],
  [
    2,
    {
      title: "In Studio: Lucy",
      primaryColor: "#212121",
      secondaryColor: "#ff7f11",
      width: "700px"
    },
  ],
  [
    3,
    {
      title: "Cassie Wolde",
      primaryColor: "#990000",
      secondaryColor: "#f92a82",
    },
  ],
  [
    4,
    {
      title: "Lowtide Properties: Monarca",
      primaryColor: "#f7f3e3",
      secondaryColor: "#6f58c9",
      width: "900px"
    },
  ],
  [
    5,
    {
      title: "For The Love of Life",
      primaryColor: "#0a2463",
      secondaryColor: "#00a5cf",
    },
  ],
  [
    6,
    {
      title: "Granville Island Brewing",
      primaryColor: "#00522a",
      secondaryColor: "#7ddf64",
      width: "1000px"
    },
  ],
  [
    7,
    {
      title: "Kold",
      primaryColor: "#212121",
      secondaryColor: "#ff7f11",
    },
  ],
  [
    8,
    {
      title: "Sundays Furniture",
      primaryColor: "#f7f3e3",
      secondaryColor: "#6f58c9",
    },
  ],
]);
