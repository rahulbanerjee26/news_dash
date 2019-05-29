import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';
import {Link} from 'react-router-dom';

class Nav extends Component{
   myFunc(){
       alert("yes ");
   }
    render() {
        return (
            <div className={"bg-dark sticky-top"}>
               <nav className={"navbar navbar-expand-lg navbar-dark nav-tabs"}>
                   <a href={"#"}> <span class="navbar-brand"> RNEWS </span> </a>
                   <button class="navbar-toggler"  data-toggle="collapse"
                           data-target="#drawer" >
                       <span className={"navbar-toggler-icon"}> </span>
                   </button>

               <div id={"drawer"} className={"collapse navbar-collapse"}>
                   <ul className={"navbar-nav mx-auto"}>

                       <li className={"nav-item active"}>
                           <button className="btn btn-dark" onClick={this.props.changeHome}>
                               Home
                           </button>
                       </li>


                       <li className={"nav-item"}>
                           <button className="btn btn-dark" onClick={this.props.changeHealth}>
                               Health
                           </button>
                       </li>

                       <li className={"nav-item"}>
                           <button className="btn btn-dark" onClick={this.props.changeSport}>
                               Sports
                           </button>
                       </li>

                       <li className={"nav-item"}>
                           <button className="btn btn-dark" onClick={this.props.changeTech}>
                               Tech
                           </button>
                       </li>

                       <li className={"nav-item"}>
                           <button className="btn btn-dark" onClick={this.props.changeBusiness}>
                               Business
                           </button>
                       </li>

                   </ul>

                   <form className="form-inline my-2 my-lg-0">
                       <input id={"searchTxt"} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                           <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.search} type="submit">
                               Search
                           </button>
                   </form>

               </div>
               </nav>
            </div>
        )
    }
}

export default Nav;