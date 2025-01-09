import React, { useState } from 'react';


const Comment = ({ author, date, content, avatar, replies, likes }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="comment">
      <div className="comment-avatar">
        <img className='' src={avatar} alt={`${author}'s avatar`} />
      </div>
      <div className="comment-content">
        <div className="comment-header">
          <h3 className="comment-author">{author}</h3>
          <span className="comment-date">{date}</span>
        </div>
        <p className="comment-text">{content}</p>
        <div className="comment-actions">
          <button 
            className={`comment-action ${isLiked ? 'liked' : ''}`} 
            onClick={handleLike}
          >
            <span className="like-icon">👍</span>
            <span className="like-count">{likeCount}</span>
          </button>
          <button className="comment-action">Reply</button>
          {replies && replies.length > 0 && (
            <button 
              className="comment-action" 
              onClick={() => setShowReplies(!showReplies)}
            >
              {showReplies ? 'Hide Replies' : `Show Replies (${replies.length})`}
            </button>
          )}
        </div>
        {showReplies && replies && (
          <div className="comment-replies">
            {replies.map((reply, index) => (
              <Comment key={index} {...reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CommentSection = () => {
  const comments = [
    {
      author: "John Doe",
      date: "2023-05-10",
      content: "This is a great article! Thanks for sharing. I found the insights particularly useful for my current project.",
      avatar: "https://i.pravatar.cc/50?img=1",
      likes: 15,
      replies: [
        {
          author: "Jane Smith",
          date: "2023-05-11",
          content: "I agree, very informative! I especially liked the part about responsive design techniques.",
          avatar: "https://i.pravatar.cc/50?img=2",
          likes: 7
        }
      ]
    },
    {
      author: "Alice Johnson",
      date: "2023-05-12",
      content: "I have a question about the third point. Can you elaborate on how this approach affects performance on mobile devices?",
      avatar: "https://i.pravatar.cc/50?img=3",
      likes: 3
    }
  ];

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
