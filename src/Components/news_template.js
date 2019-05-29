import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';

class NewsTemplate extends Component{
    render(){
        return(
            <div class="col-sm-12 col-md-6">
                { console.log(this.props.url) }
                       <a onClick={this.props.showArticle}>
                            <img src={this.props.img} className="img-fluid"/>
                       </a>

                        <a onClick={this.props.showArticle}>
                        <h3 class="h3" style={{'color' : 'black'}}>
                            {this.props.title}
                        </h3>
                        </a>
                        <p>
                            {this.props.text}
                            <a href="#" onClick={this.props.showArticle}> Read More</a>
                        </p>
            </div>
        )
    }
}

export default NewsTemplate;