import { apiUrl } from "@/lib/api";

export default async function Read({ params }) {
  const { id } = await params;

  const resp = await fetch(apiUrl(`topics/${id}`), {
    cache: "no-store",
  });
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
