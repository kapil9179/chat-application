import React, { useState } from 'react'
import "../../style/Showemoji.css"
function ShowEmoji({handelemojiClick}) {
  // accept props because when clicked on emoji set as a text
 const [emoji,setemoji] = useState(["🤣","😂","🙂","😊","🤌","😗","😙","🥲","😋","😄","😎","✌️","❤️‍🔥","💋","💘","💔","💞","❤","💯","💢","🕳","👇","🖕","👌","🤏","👈","🤝","🙏","✍","💪","🤳","👂","🧠","👄","🧑","👶","🧒","👦","👧","👱","🙅‍♂️","🙆‍♂️","💁‍♂️","💁‍♀️","🧑‍🎓","🧑‍🏫","🧑‍🍳","👨‍🍳","🎯","🎰","😭"]);
  return (
    <div className='emojicard'>
        {emoji && emoji.map((displayemoji,index)=>
         <p onClick={()=>handelemojiClick(displayemoji)} key={index}>{displayemoji}</p>
       )}
    </div>
  )
}

export default ShowEmoji