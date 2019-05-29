import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';

class Article extends Component {
    render() {
        return (

            <div class="cotainer">

                <button onClick={this.props.back} class="btn-dark">Go Back</button>
                    <h2 class="h2"> {this.props.item.title} </h2>


                <img src={this.props.item.urlToImage} class="img-fluid" style={{
                    'margin': '5% 25% 5% 25%',
                    'width': '50%',
                    'height': '70%'
                }}/>

                <p>
                    {this.props.item.content}
                </p>

                <a href={this.props.item.url} target="_blank"> Go to Original Link</a>

            </div>
        )
    }
}

export default Article;
