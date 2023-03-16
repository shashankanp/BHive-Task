import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2 className="text-2xl mt-10">Join our amazing family of investors today!</h2>
    </main>
  );
}
