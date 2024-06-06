import Image from "next/image";
import { Inter } from "next/font/google";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";
import { VideoGrid } from "@/components/VideoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Appbar />
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  );
}
