import { getSingleNotice } from "@/services/admin/notice";
import UpdateSingleNotice from "./updateNoticeForm";

export default async function UpdateNoticeForm({
  params,
}: {
  params: Promise<{ noticeSlug: string }>;
}) {
  const { noticeSlug } = await params;

  const result = await getSingleNotice(noticeSlug);

  return (
    <main>
      <UpdateSingleNotice
        noticeHeading={result?.data?.noticeHeading}
        noticeId={result?.data?._id}
        noticeDis={result?.data?.noticeDis}
      />
    </main>
  );
}
