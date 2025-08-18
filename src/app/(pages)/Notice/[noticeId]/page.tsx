import React from "react";

export default async function SingleNoticePage({
  params,
}: {
  params: Promise<{ noticeId: string }>;
}) {
  const { noticeId } = await params;

  return <div>SingleNoticePage{noticeId}</div>;
}
