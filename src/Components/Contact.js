import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';

class Contact extends Component{
    render() {
        return(
            <div class="container">
                <h2 class="text-dark h2 text-center"> CONTACT US </h2>

                <div className="form-group">
                    <label> Name</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label> Email</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label> Message</label>
                    <textarea rows={"5"} className="form-control"> </textarea>
                </div>

                <div className="form-group">
                    <button onClick={()=> alert("Thank You for your Message")} class="btn-dark btn btn-primary"> Submit </button>
                </div>

            </div>
        )
    }
}

export default Contact;