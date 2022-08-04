import emojipedia from "../emojipedia"

const Entry = () => {


    const Card = (props) => {
        return <div className="term">   
                    <dt>
                        <span className="emoji" role="img" aria-label="emoji.png">{props.emoji}</span>
                        <span>{props.name}</span>
                    </dt>

                    <dd>
                        <p>{props.meaning}</p>
                    </dd>
                </div>
    }



  return (
    <div>
        <h1>
            <span>emojipedia</span>
        </h1>

        <dl className="dictionary">

            {/* SECOND METHOD */}
            {/* <Card 
                emoji={emojipedia[0].emoji}
                name={emojipedia[0].name}
                meaning={emojipedia[0].meaning}
            />

            <Card 
                emoji={emojipedia[1].emoji}
                name={emojipedia[1].name}
                meaning={emojipedia[1].meaning}
            />

            <Card 
                emoji={emojipedia[2].emoji}
                name={emojipedia[2].name}
                meaning={emojipedia[2].meaning}
            /> */}




            {/* FIRST METHOD */}
            {/* <Card 
            emoji="💪" 
            name="Tense Biceps"   
            meaning="You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."/>

            
            <Card 
            emoji="🙏" 
            name="Person With Folded Hands"
            meaning="Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you." />

            <Card 
            emoji="🤣" 
            name="Rolling On The Floor, Laughing"
            meaning="This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
            />     */}
        </dl>
  </div>
  )
}

export default Entry