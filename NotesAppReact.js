<style>
  body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}
.status-button{
  display:flex;
}
.active-button{
  background-color:red;
}
.complete-button{
  background-color:green;
}
.all-button{
  background-color:yellow
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}
.note-item{
  border:3px solid;
  margin:3px;
}

  </style>

<div id="app"></div>

const { useState } = React;



function Notes() {
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [notes,setNotes] = useState([]);
  const [filteredNotes,setFilteredNotes] = useState([]);
  function save(){
  const noteObj = {
  	label,
    content
  }
  
 setNotes(prevNotes => [...prevNotes, noteObj]);
 setFilteredNotes(prevNotes => [...prevNotes, noteObj]);
 setLabel("");
  setContent("");
  
  }
  
  function filterNotes(status){
  if(status==="all"){
  setFilteredNotes((prevFilteredNotes)=>[...notes]);
  }else{
  let filteredNotes = notes.filter(function(item,index){
  return item.content.toLowerCase()===status
  })
  
  setFilteredNotes((prevFilteredNotes)=>[...filteredNotes]);
  }
  
 
  }
  return (
    <div>
    <h1>Notes App</h1>
   <label>Title</label> <input type="text" value={label} onChange={()=>setLabel(event.target.value)}></input>
   <br/>
     <label>Content</label><input type="text" value={content} onChange={()=>setContent(event.target.value)}></input>
     
   <button onClick={()=>save()}>Save</button>
   {notes.length}
   <div className="status-button">
      <button className="active-button" onClick={()=>filterNotes('active')}>Active</button>
    <button className="complete-button" onClick={()=>filterNotes('completed')}>Completed</button>
    <button className="all-button" onClick={()=>filterNotes('all')}>All</button>
   </div>
  
    
    <ul>
        {/* map over the users array */}
        {filteredNotes.map((note) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={note.label} className="note-item">
            <p>{note.label}</p>
            <p>{note.content}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Notes />, document.querySelector("#app"))
