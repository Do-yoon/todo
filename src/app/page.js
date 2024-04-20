import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-10">
      <div className="search">Search</div>
      <div className="nav">
        <div>
          <span>Inbox</span>
          <span id="inbox-number">0</span>
        </div>
        <div>
          <span>Calendar</span>
        </div>
        <div>
          <span>Upcoming</span>
        </div>
        <div>
          <span>Anytime</span>
        </div>
        <div>
          <span>Someday</span>
        </div>
        <div>
          <span>Logbook</span>
        </div>
      </div>
    </main>
  );
}
