import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./Components/AddToCart";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="./users">Users</Link>
      <AddToCart/>
    </main>
  )
}
