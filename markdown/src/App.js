import React,{useState} from 'react';
import './App.css';


let marked = require("marked")

marked.setOptions({
  breaks: true
});  

const renderer = new marked.Renderer();

const placeholder = `

  this is a paragraph

  **This is bolded text**

  # heading1
  ## heading2

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`

  How To Use The Demo
  -------------------

      1. Type in stuff above.
      2. See the live updates below.

`;

function App() {

  const [text,setText] = useState(placeholder)


  return (
    <div>
      <div className = "container">
        <h1>My Markdown</h1>
        <textarea className = "markdown" onChange = {(e) => setText(e.target.value)} name="text" id="text" value={text} rows="30"></textarea>
      </div>
      <div className ="container">
        <h1>Markdown Output</h1>
        <Previewer text={text}/>
      </div>
        
    </div>
  );
}


function Previewer({text}) {
  return (
    <div 
    dangerouslySetInnerHTML={{__html: marked(text, {renderer: renderer}),}} className = "previewer">
    </div>
  )
}


export default App;
