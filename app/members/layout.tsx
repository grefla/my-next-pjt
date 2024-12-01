import Sheet from "@/app/_conponents/Sheet";
import Hero from "@/app/_conponents/Hero";

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}