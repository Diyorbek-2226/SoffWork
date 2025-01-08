import { useState } from "react";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "Silvisilvia 168",
      avatar: "https://i.pravatar.cc/40?img=1",
      date: "2 oy oldin",
      text: "Super tezkor javob va yaxshi ish",
      reply: "Ajoyib xaridor. Katta rahmat - siz bilan yana ishlashni orziqib kutaman!",
    },
    {
      id: 2,
      username: "shudring puli",
      avatar: "https://i.pravatar.cc/40?img=2",
      date: "4 oy oldin",
      text: "Men kalit so'zni o'zgartirishni aniq so'radim, lekin bu sodir bo'lmadi.",
      reply: "Haqiqatan ham juda yaxshi xaridor. Xarid qilganingiz uchun rahmat.",
    },
  ]);
  const [comment, setComment] = useState("");

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          username: "Yangi Foydalanuvchi",
          avatar: "https://i.pravatar.cc/40?img=3",
          date: "Hozirgina",
          text: comment,
          reply: "",
        },
      ]);
      setComment("");
    }
  };

  return (
    <div className="comment-section container">
      <h2 className="title">Sharhlar</h2>
    
      <ul className="comment-list">
        {comments.map((cmt) => (
          <li key={cmt.id} className="comment-item">
            <div className="comment-header">
              <img src={'https://picsum.photos/200/300'} alt="avatar" className="avatar" />
              <div>
                <strong className="mn-n">{cmt.username}</strong>
                <p className="comment-date mn-n">{cmt.date}</p>
              </div>
            </div>
            <p className="comment-text ">{cmt.text}</p>
            {cmt.reply && (
              <div className="comment-reply">
                <img src={'https://picsum.photos/seed/picsum/200/200'} alt="avatar" className="avatar" />
                <div>
                  <strong className="mn-n">spotlightseo</strong>
                  <p className="reply-date">{cmt.date}</p>
                  <p className="mn-n">{cmt.reply}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
