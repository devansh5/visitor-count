import React from 'react'
import ListOfVisitor from './components/ListOfVisitor/ListOfVisitor'
import VisitorDetails from './components/VisitorDetails/VisitorDetails'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
export default function App() {
  return (
  
  <div>  
    <BrowserRouter>
        <Navbar/>
          <Route exact path="/" component={VisitorDetails}/>
          <Route exact path="/list" component={ListOfVisitor}/>
    </BrowserRouter>
  </div>
  )
}