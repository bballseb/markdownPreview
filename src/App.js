import { useState } from 'react';
import { marked } from 'marked';
import './App.css';


//a header (H1 size), a sub header (H2 size), a link, inline code, 
//a code block, a list item, a blockquote, an image, and bolded text
function App() {
  const [text, setText] = useState(`
  # Welcome
  ## to my markdown
  **July 3rd, 2017**
  > He who is, he who isn't
   - make
   - money
   - faster
  \`Be Relentless\`
  [workhard](https://www.example.com)
  ![alt text](logo512.png)
  \`\`\`
{
  "firstName": "Greatest",
  "lastName": "Ever",
  "age": 25
}
\`\`\`
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
    <textarea id="editor"
      onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}
    ></textarea>
    <div id="preview" dangerouslySetInnerHTML={{
      __html: marked(text),
    }}  
    ></div>
    </div>
  );
}

export default App;
