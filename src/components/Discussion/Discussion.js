import React, { useState } from "react";
import "./discussion-style.css";
import avatar1 from '../../assets/jason.jpg';
import avatar2 from '../../assets/michelle.jpg';
import avatar3 from '../../assets/ricahrd_taylor.jpg';
import avatar4 from '../../assets/jennifer.jpg';

export const Discussion = () => {

    const users = {
        'jason1': {
          name: 'Jason Alexander',
          src: `${avatar1}`
        },
        'michelle1': {
          name: 'Michelle Claude',
          src: `${avatar2}`
        },
        'ricahrd_taylor': {
          name: 'Richard Taylor',
          src: `${avatar3}`
        },
        'jennifer': {
          name: 'Jennifer Floyd',
          src: `${avatar4}`
        }
      };
    
      const loggedUser = users['jason1'];
    
      const [comments, setComments] = useState([
        {
          id: 1,
          text: 'I am on it, will get back to you at the end of the week 😆.',
          author: users['jennifer'],
          createdAt: '2023-09-03 12:00:00',
        },
        {
          id: 2,
          text: 'I will prepare Instagram strategy, Liliya will take care about Facebook.',
          author: users['michelle1'],
          createdAt: '2023-09-03 11:00:00',
        },
        {
          id: 3,
          text: 'I would love to get on that marketing campaign 😊. What are the next steps?',
          author: users['ricahrd_taylor'],
          createdAt: '2023-09-02 10:00:00',
        }
      ]);
    
      const timeSince = (date) => {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    
        let interval = seconds / 31536000;
    
        if (interval > 1) {
          return Math.floor(interval) + " years ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes ago";
        }
    
        if (seconds < 10) {
          return "just now";
        }
    
        return Math.floor(seconds) + " seconds ago";
      }
    
      const createComment = (comment) => {
        const newDate = new Date(comment.createdAt);
        return (
          <div className="comment" key={comment.id}>
            <div className="avatar">
              <img
                className="avatar"
                src={comment.author.src}
                alt={comment.author.name}
              />
            </div>
            <div className="comment__body">
              <div className="comment__author">
                {comment.author.name}
                <time
                  dateTime={comment.createdAt}
                  className="comment__date"
                >
                  {timeSince(newDate)}
                </time>
              </div>
              <div className="comment__text">
                <p>{comment.text}</p>
              </div>
            </div>
          </div>
        );
      }
    
      const handleCommentSubmit = (e) => {
        e.preventDefault();
    
        const newCommentTextareaValue = e.target.elements.commentTextarea.value;
    
        const newComment = {
          id: comments.length + 1,
          text: newCommentTextareaValue,
          author: loggedUser,
          createdAt: new Date().toISOString(),
        };
    
        setComments([newComment, ...comments]);
        e.target.reset();
      }
    
      return (
        <div className="app-container">
          <div className="discussion">
            <div className="discussion__header">
              <div className="authed-user">
                <img className="avatar" src={loggedUser.src} alt={loggedUser.name} />
              </div>
              <form id="newcomment__form" onSubmit={handleCommentSubmit}>
                <textarea
                  tabIndex="1"
                  cols="150"
                  rows="4"
                  minLength="5"
                  required
                  placeholder="Write a comment"
                  name="commentTextarea"
                ></textarea>
                <div className="newcomment__toolbar">
                  <button
                    id="reset-button"
                    className="button--secondary"
                    tabIndex="3"
                    type="reset"
                  >
                    Reset
                  </button>
                  <button
                    id="confirm-button"
                    className="button--primary"
                    tabIndex="2"
                    type="submit"
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="discussion__comments">
              {comments.map(comment => createComment(comment))}
            </div>
          </div>
        </div>
    );
};