"use client";

import { useState } from "react";
import { MessageSquareReply } from "lucide-react";
import { CommentModalData } from "../types/Table.type";

type Props = {
  comment: CommentModalData;
};

export function CommentModalButton({ comment }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [reply, setReply] = useState(comment.reply || "");

  const handleSendReply = () => {
    console.log("ارسال پاسخ برای کامنت:", comment.id, reply);
    setShowModal(false);
  };

  return (
    <>
      <button
        className="btn btn-xs btn-outline btn-info hover:text-white tooltip"
        data-tip="مشاهده و پاسخ"
        onClick={() => setShowModal(true)}
      >
        <MessageSquareReply size={14} />
      </button>

      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box text-sm max-w-md">
            <h3 className="font-bold text-lg mb-2">پاسخ به نظر</h3>
            <div className="mb-4">
              <span className="font-semibold block mb-1">متن نظر:</span>
              <p className="bg-zinc-100 p-2 rounded text-justify leading-relaxed">
                {comment.text}
              </p>
            </div>
            <div className="mb-4">
              <label className="label-text mb-1 block">پاسخ شما:</label>
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="textarea w-full text-sm outline-none focus:outline-none focus:ring-0"
                rows={4}
              />
            </div>
            <div className="modal-action">
              <button
                onClick={handleSendReply}
                className="btn btn-success text-white"
              >
                ارسال پاسخ
              </button>
              <button onClick={() => setShowModal(false)} className="btn">
                بستن
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
