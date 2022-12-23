import earls1 from "../earls1.png";
import kold1 from "../kold1.png";
import test from "../test.png";
import Routes from "../routes";
export interface SubSectionContent {
    title: string;
    href: string;
    path: Routes;
    description: string;
}
interface SectionType {
  title: string;
  primaryColor: string;
  secondaryColor: string;
  width?: string;
  subSectionContent?: SubSectionContent[];
}

export default new Map<number, SectionType>([
  [
    1,
    {
      title: "Studio",
      primaryColor: "#00522a",
      secondaryColor: "#7ddf64",
      subSectionContent: [
        {
            title: "Earls",
            path: Routes.EARLS,
            href: earls1,
            description: "I had the pleasure of working with this team in May 2022 for Earls Summer Specials. Our aim was to get some fun, thirst-quenching and fresh imagery that said SUMMER!"
        },
        {
            title: "Kold",
            href: kold1,
            path: Routes.KOLD,
            description: "The KOLD brand is an enhanced cold brew that is crafted using 100% high altitude, Arabica beans from Columbia. The coffee is then infused with organic Chaga and Lion’s Mane mushrooms. Slow roasted chicory is added to promote digestive health, which also results in a smooth flavour profile with notes of chocolate and sweet fruits."
        }
      ]
    },
  ],
  [
    2,
    {
      title: "In Studio: Lucy",
      primaryColor: "#212121",
      secondaryColor: "#ff7f11",
      width: "700px",
      subSectionContent: [
        {
            title: "",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
        {
            title: "Test",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
        {
            title: "Test",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
      ]
    },
  ],
  [
    3,
    {
      title: "Cassie Wolde",
      primaryColor: "#990000",
      secondaryColor: "#f92a82",
      subSectionContent: [
        {
            title: "",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
        {
            title: "Test",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
        {
            title: "Test",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
        {
            title: "Test",
            path: Routes.HOME,
            href: test,
            description: "Temporary description"
        },
      ]
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
      title: "Sundays Furniture",
      primaryColor: "#f7f3e3",
      secondaryColor: "#6f58c9",
    },
  ],
]);
