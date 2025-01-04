import Image from "next/image";
import Hero from "../../public/images/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex flex-1 justify-between items-center gap-28 pt-32">
      <section className="flex flex-1 flex-col gap-10">
        <h1 className="text-7xl bg-gradient-to-b from-[#194c33] to-gray-400 bg-clip-text text-transparent">
          Better Design for your digital production.
        </h1>
        <p className="text-2xl font-light">
          Turning your idea into Reality. We bring together the teams from the
          golabally industry.
        </p>
        <Button title={"See Our Works"}></Button>
      </section>
      <section className="flex-1 flex-col gap-12">
        <Image
          src={Hero}
          alt="hero image"
          className="w-full h-[500px] object-cover"
        ></Image>
      </section>
    </div>
  );
}
