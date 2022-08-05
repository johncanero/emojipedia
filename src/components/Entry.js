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



// Substring Meaning
// const newEmojipedia = emojipedia.map(function (emojiEntry) {
//     return emojiEntry.meaning.substring(0, 100);
// })


const newEmojipedia = emojipedia.map((emojiEntry) => {
    return (
        emojiEntry.meaning.substring(0, 100)
    );
});

console.log(newEmojipedia)



// Arrow Functions
var numbers = [3, 56, 2, 48, 5]

const newNumbers = numbers.map( (x) => {
    return x * x;
});

console.log(newNumbers);
