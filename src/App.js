/* eslint-disable no-unused-vars */

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// the code written in the return is jsx which  is html (95 to 98%) class replaced by className can return only one
// one tag if you want more than one then

function App() {
  return (<>
   
{/*<Navbar title="Textutils" aboutText="About Textutils" />*/}
 {/*<Navbar/>*/}
 <Navbar title="Textutils"></Navbar>
 <div className="container my-3">
 <TextForm heading="Enter the text to analyse"/>
 </div>
    </>
  );
}

export default App;
