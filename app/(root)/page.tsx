import Image from "next/image";
import Heading from "./_components/heading";
import Heroes from "./_components/hreoes";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center text-center gay-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
