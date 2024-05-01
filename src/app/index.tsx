'use client'

import Image from "next/image";
import {url} from "../util/static"
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [inboxCount, setInboxCount] = useState(0);

  return (
    <main className="flex flex-col justify-between p-10">
      <div className="search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="nav">
        <button onClick={()=>router.push("inbox")}>
          <span>Inbox</span>
          <span id="inbox-number">{inboxCount}</span>
        </button>
        <button onClick={()=>router.push("calendar")}>
          <span>Calendar</span>
        </button>
        <button onClick={()=>router.push("upcoming")}>
          <span>Upcoming</span>
        </button>
        <button onClick={()=>router.push("anytime")}>
          <span>Anytime</span>
        </button>
        <button onClick={()=>router.push("someday")}>
          <span>Someday</span>
        </button>
        <button onClick={()=>router.push("logbook")}>
          <span>Logbook</span>
        </button>
      </div>
    </main>
  );
}
