'use client'

import Image from "next/image";
import {url} from "../util/static"

function onClickNav(e, _id) {
  e.preventDefault();
  window.location=`${url}/${_id}`
}

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-10">
      <div className="search">
        <input type="text" placeholder="Search"></input>
      </div>
      <div className="nav">
        <button onClick={(e)=>onClickNav(e, "inbox")}>
          <span>Inbox</span>
          <span id="inbox-number">0</span>
        </button>
        <button onClick={(e)=>onClickNav(e, "inbox")}>
          <span>Calendar</span>
        </button>
        <button onClick={(e)=>onClickNav(e, "calendar")}>
          <span>Upcoming</span>
        </button>
        <button onClick={(e)=>onClickNav(e, "upcoming")}>
          <span>Anytime</span>
        </button>
        <button onClick={(e)=>onClickNav(e, "anytime")}>
          <span>Someday</span>
        </button>
        <button onClick={(e)=>onClickNav(e, "logbook")}>
          <span>Logbook</span>
        </button>
      </div>
    </main>
  );
}
