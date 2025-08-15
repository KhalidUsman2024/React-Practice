import { React } from 'react'
import Header from './header'
import Footer from './footer'
import './App.css'
import Home from './Home'
import About from './About'
import Models from './Models'
import Contact from './Contact'
import Blog from './Blog'

function App() {
let isActive = "Home";
let output;
if(isActive === "Home"){
  output = <Home />;
}else if(isActive === "About"){
  output = <About />
}else if(isActive === "Models"){
  output = <Models />
}else if(isActive === "Contact"){
  output = <Contact />
}else if(isActive === "Blog"){
  output = <Blog />
}else{
  output = <h1>Page Not Found</h1>;
}

  return (
    <>
      <Header/>
     <>{output}</> 
      <Footer/>
    </>
  )
}

export default App;
