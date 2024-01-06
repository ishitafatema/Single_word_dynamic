  // ======PICK THE #WORD FOR CONSOLE START===========


import React from 'react'

const Heading = (props,className) => {
    props.text.split(" ").map(items =>{
        if (items.includes("#")) {
          let arr = items.split("")
          arr.pop()
          arr.shift()
            console.log(arr.join(""))  
        }
    })
    
  return (
    <div className={`${className}`}>{props.text}</div>
  )
}

export default Heading


  // ======PICK THE #WORD FOR CONSOLE END===========






// =========SINGLE WORD COLOR WITH SPAN START ========

import React from 'react'

const Heading = ({text}) => {
  let ishu = text.replace("#" , "<span class='one'>").replace("#" , "</span>");
  return <h1 dangerouslySetInnerHTML={{__html: ishu }}></h1>
}

export default Heading


// =========SINGLE WORD COLOR WITH SPAN END ========



// // =========MULTIPLE WORD COLOR WITH SPAN REGEX START ========
import React from 'react'

const Heading = ({text}) => {
  let pattern = /#([^#]+)#/g;
  let textWithSpans = text.replace(pattern,"<span class='one'>$1</span>");
  return <h1 dangerouslySetInnerHTML={{__html:textWithSpans }} ></h1>
}

export default Heading

// // =========MULTIPLE WORD COLOR WITH SPAN REGEX END ========



