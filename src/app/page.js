import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Search</div>
      <div>
        <span>Inbox</span>
        <span>0</span>
      </div>
      <div>Calendar</div>
      <div>Upcoming</div>
      <div>Anytime</div>
      <div>Someday</div>
      <div>Logbook</div>
    </main>
  );
}
