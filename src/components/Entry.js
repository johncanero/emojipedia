import React from "react";
import emojipedia from "../emojipedia"

const Entry = () => {

    // Props Function 
    const Card = (props) => {
        return ( <div className="term">   
                    <dt>
                        {/* <span>{props.id}</span> */}
                        <span className="emoji" role="img" aria-label="emoji.png">{props.emoji}</span>
                        <span>{props.name}</span>
                    </dt>

                    <dd>
                        <p>{props.meaning}</p>
                    </dd>
                </div>
        );
    }

    // Map Function
    const emojiCard =(emojipedia) => {
        return <Card 
            key={emojipedia.id}
            emoji={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
        />
    }
    

  return (
    <div>
        <h1>
            <span>emojipedia</span>
        </h1>

        <dl className="dictionary">
            {emojipedia.map(emojiCard)}
        </dl>
  </div>
  )
}

export default Entry


