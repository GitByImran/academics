import { Inter } from "next/font/google";
import HomeContent from "./components/home-content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeContent />
    </div>
  );
}
