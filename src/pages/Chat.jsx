import React from 'react';
import './Chat.css';

export default function Chat() {
  return (
    <div className='chatMain'>
      <div></div>
      <section>
        <input type='text' placeholder='Message' />
        <button to='/chat' className='sendBTN'>
          Send
        </button>
      </section>
    </div>
  );
}
