import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';


class Footer extends Component{
    render(){
        let currYear = new Date().getFullYear();
        return(
            <div class = "container-fluid bg-dark fixed-bottom ">
                    <footer class="card-footer">
                        <div className={"row"}>
                            <div className="col-sm-4 foot">
                                <a href={'#'} onClick={this.props.changeStatus} className="text-muted"> Testimonials </a>
                            </div>

                            <div className="col-sm-4 foot">
                                <span class=" text-center" style={{'color':'white'}}> &copy;{currYear} Rahul Banerjee </span>
                            </div>

                            <div className={"col-sm-4 foot"}>
                                <a href={'#'} className="text-muted" onClick={this.props.changeContact}> Contact </a>
                            </div>

                        </div>
                    </footer>

            </div>
        )
    }
}

export default Footer;