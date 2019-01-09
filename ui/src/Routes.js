import  React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Pastors from './components/Pastors/Pastors'
import Church from './components/Church'
import Denomination from './components/Denominations'
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'
import AddMember from './components/Member/AddMember.js'
import Member from './components/Member/Member'

class Routes extends React.Component{
   state = {
        sidebarOpen: false
    }

 sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
          return {sidebarOpen: !prevState.sidebarOpen};
        });
 }
render(){
    let sidebar;

    if (this.state.sidebarOpen){
        sidebar = <Sidebar />;
    }
    return(
        <div>
        <Router>
            <div style={{ height:'100%' }}>
            {sidebar}
            <Header sidebarClickHandler={this.sidebarToggleClickHandler}/>
            <Footer/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/church" component={Church}/>
            <Route path="/member" exact component={Member}/>
            <Route path="/member/new" component={AddMember}/>
            <Route path="/pastors" component={Pastors}/>
            <Route path="/denomination" component={Denomination}/>
            <Redirect to="/" />
            </Switch>
            </div>
         </Router>
         </div>
    )}
        
}
 
export default Routes