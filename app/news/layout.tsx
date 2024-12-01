import Hero from "@/app/_conponents/Hero";
import Sheet from "@/app/_conponents/Sheet"

type Props = {
  children: React.ReactNode;
}

export default function NewsLayout({children} : Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  )
}