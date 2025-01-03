import Image from "next/image";
import Hero from "../../public/images/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-28">
      <div>
        <h1>Better Design for your digital production.</h1>
        <p>
          Turning your idea into Reality. We bring together the teams from the
          golabally industry.
        </p>
        <button>See Our Works</button>
      </div>
      <div className="w-full h-[500px] object-cover">
        <Image src={Hero} fill></Image>
      </div>
    </div>
  );
}
