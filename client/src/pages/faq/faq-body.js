import Data from './faq-data';
import { ReactComponent as UpArrow } from '../../images/up-arrow.svg';
import { ReactComponent as DownArrow } from '../../images/down-arrow.svg';
import React from 'react';
import Nav from '../../componenets/Nav';

function FaqBody() {

  function toggle(id) {
    var answer = document.querySelector(`.answer.${id}`);
    var button = document.querySelector(`.arrow.${id}`);
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      button.style.transform = 'rotate(0deg)'
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      button.style.transform = 'rotate(180deg)'
    }
  }

  return (
    <>
    <Nav />
      <div className='faq-container'>
        {
          Data.map((content) => {
            return (
              <div>
                <article>
                  <DownArrow className={`arrow ${content.id}`} onClick={() => toggle(content.id)} />
                  <div className={`question ${content.id}`}>{content.question}</div>
                  <p className={`answer ${content.id}`}>{content.answer}</p>
                </article>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default FaqBody;