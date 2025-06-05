import { getSubscribeSetttings } from "@/data/loaders";
import { notFound } from "next/navigation";
import { RenderComponent } from "../LayoutRenderer";

async function loader() {
  const data = await getSubscribeSetttings();

  if (!data) notFound();
  return { ...data.data };
}

async function SectionThree() {
  const data = await loader();
  const blocks = data?.main || [];
  // console.log(blocks);

  return (
    <>
      <RenderComponent components={blocks} />
    </>
  );
}

export default SectionThree;
