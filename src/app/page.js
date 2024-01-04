import { getFeaturedEvents } from "../../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The HomePage</h1>
    </div>
  );
}
