import Hero from "../_conponents/Hero";
import Sheet from "../_conponents/Sheet";

type Props = {
  children: React.ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  )
}