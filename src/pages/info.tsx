import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import { Kalnia } from "next/font/google";
import {
  FaLaptopCode,
  FaGlobeAsia,
  FaCode,
  FaPuzzlePiece,
  FaCamera,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
const font = Kalnia({ subsets: ["latin"] });
export default function Info() {
  return (
    <div>
      <Navbar />
      <div className="w-full text-center mt-20 animate-fadeIn">
        <h1 className={`${font.className} text-4xl `}>About Me</h1>
      </div>
      <div className="animate-fadeIn w-full h-full p-4 flex flex-col items-center">
        {/** Introduction Section */}
        <section className="mb-6 w-full flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 text-left p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FaCamera className="mr-2" />
              Introduction
            </h2>
            <p className="text-xl">
              I&apos;m a passionate coder who loves exploring the endless
              possibilities of technology. When I&apos;m not immersed in
              programming, you&apos;ll often find me watching anime, solving
              math problems, or diving into new topics to expand my knowledge. I
              thrive on curiosity and enjoy learning something new every day!
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="/pfp.png"
              alt="Profile"
            />
          </div>
        </section>

        {/** Location Section */}
        <section className="mb-6 w-full flex flex-col md:flex-row-reverse items-center">
          <div className="flex flex-col w-full md:w-1/2 text-right p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center justify-end">
              Location
              <FaLocationDot className="ml-2" />
            </h2>
            <p className="text-xl">
              I originally lived in Rawatbhata, a small town in Rajasthan, but I
              shifted to Kota in 2024. Both places have played an important role
              in my growth, with Kota now being my base as I pursue my passion
              for programming.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="/rawatbhata.png"
              alt="Rawatbhata scenery"
            />
          </div>
        </section>

        {/** Coding Journey Section */}
        <section className="mb-6 w-full flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 text-left p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FaGlobeAsia className="mr-2" />
              My Coding Journey
            </h2>
            <p className="text-xl">
              My coding journey began at a young age, driven by an innate
              curiosity about how things work. I started exploring programming
              in my early teens, and soon enough, I found myself hooked on
              solving problems with code.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="https://images.unsplash.com/photo-1530721733923-e2df89901503"
              alt="Coding journey illustration"
            />
          </div>
        </section>

        {/** Start of Journey Section */}
        <section className="mb-6 w-full flex flex-col md:flex-row-reverse items-center">
          <div className="flex flex-col w-full md:w-1/2 text-right p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center justify-end">
              The Start of My Journey
              <FaCode className="ml-2" />
            </h2>
            <p className="text-xl">
              My first experience with coding was through small projects and
              online tutorials. Initially, I dabbled with HTML, CSS and Python
              to create simple websites. As I gained confidence, I ventured into
              more advanced languages like JavaScript and TypeScript, Advanced
              my knowledge in Python, and eventually frameworks like React. Then
              I learnt Go. Each new challenge sparked my love for
              problem-solving and deepened my desire to learn more.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Early coding projects"
            />
          </div>
        </section>

        {/** Expanding Skills Section */}
        <section className="mb-6 w-full flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-1/2 text-left p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FaPuzzlePiece className="mr-2" />
              Expanding My Skills
            </h2>
            <p className="text-xl">
              Over time, I&apos;ve expanded my skills, learning new technologies
              like TypeScript and building projects that allow me to apply what
              I&apos;ve learned. Currently, I&apos;m diving deeper into React to
              build interactive and dynamic user interfaces, and I&apos;m
              excited about the future of web development.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
              alt="Learning new skills"
            />
          </div>
        </section>

        {/** Passion for Coding Section */}
        <section className="w-full flex flex-col md:flex-row-reverse items-center">
          <div className="flex flex-col w-full md:w-1/2 text-right p-4">
            <h2 className="text-2xl font-semibold mb-2 flex items-center justify-end">
              My Passion for Coding
              <FaLaptopCode className="ml-2" />
            </h2>
            <p className="text-xl">
              Coding is more than just a career path for me—it&apos;s a passion.
              I love the sense of accomplishment that comes with solving
              problems and creating something from scratch. Every project I work
              on is a learning opportunity, and that motivates me to keep
              exploring new horizons in the tech world.
            </p>
          </div>
          <div className="flex w-full md:w-1/2 justify-center">
            <Image
              width={320}
              height={320}
              className="rounded-full w-80 h-80 object-cover"
              src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1"
              alt="Passion for coding"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
