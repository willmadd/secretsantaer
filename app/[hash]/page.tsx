// app/[hash]/page.tsx or src/app/[hash]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ScratchOff from "./ScratchOff";
import { recipients } from "../data/recipients";

type Props = {
  params: { hash: string };
};

export default async function Page({ params }: Props) {
  const { hash } = await params;

  //   const recipient = await prisma.recipients.findUnique({
  //     where: { hash }, // works because hash is @unique
  //   });

  const recipient = recipients.find((r) => r.hash === hash);

  if (!recipient) {
    notFound();
  }

  if (!recipient) {
    notFound();
  }

  return (
    <div>
      <ScratchOff name={recipient.name} />
    </div>
  );
}
