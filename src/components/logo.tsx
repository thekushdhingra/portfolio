import { Kalnia } from "next/font/google";

const font = Kalnia({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className={font.className}>
      <h1 className="text-6xl ">K.</h1>
    </div>
  );
}
