import { getSingleEvent } from "@/services/admin/gallery";
import UpdateSingleEvent from "./updateEventForm";

export default async function page({
  params,
}: {
  params: Promise<{ eventSlug: string }>;
}) {
  const { eventSlug } = await params;

  const result = await getSingleEvent(eventSlug);

  return (
    <main>
      <UpdateSingleEvent
        EventHeading={result?.data?.eventHeading}
        EventId={result?.data?._id}
        EventDis={result?.data?.eventDis}
        EventType={result?.data?.type}
      />
    </main>
  );
}
