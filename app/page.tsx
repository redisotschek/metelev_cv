import Scroller from "@/components/scroller/Scroller";

const sections = [
  {
    title: "Home",
    id: "home",
  },
  {
    title: "Experience",
    id: "experience",
  },
  {
    title: "Projects",
    id: "projects",
  },
  {
    title: "Contacts",
    id: "contacts",
  },
];

export default function Home(props) {
  // const UnderConstructionNoSSR = dynamic(() => import('@/pages/underconstruction'), {ssr: false})
  return (
    <Scroller sections={sections}></Scroller>
    // <UnderConstructionNoSSR />
  );
}
