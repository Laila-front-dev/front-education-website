import { getGlobalSetttings } from "@/data/loaders";
import { RenderComponent } from "../LayoutRenderer";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getGlobalSetttings();

  if (!data) notFound();
  return { header: data.data.header };
}
async function Header() {
  const { header } = await loader();
  // console.log(header);
  return (
    <header className="content-grid bg-neutral-50 padding-block-end-1 box-shadow">
      <RenderComponent components={header} />
    </header>
  );
}

export default Header;
