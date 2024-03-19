import page from "./week-2/page"
import page1 from "./week-3/page"
import page2 from "./week-4/page"
import page3 from "./week-5/page"
import page4 from "./week-6/page"
import page5 from "./week-7/page"
import page6 from "./week-8/page"
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1> CPRG 306 : Web Development 2 - Assignments</h1>
        
        <li><Link href="/week-2">week-2</Link></li>
        <li><Link href="/week-3">week-3</Link></li>
        <li><Link href="/week-4">week-4</Link></li>
        <li><Link href="/week-5">week-5</Link></li>
        <li><Link href="/week-6">week-6</Link></li>
        <li><Link href="/week-7">week-7</Link></li>
     <li><Link href="/week-8">week-8</Link></li>

      </div>
    </main>
  );
}
