import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';
import NewsTemplate from "./news_template";

class Carousel extends Component{
render(){
    return(

        <div id="carousel-example-2" class="carousel slide carousel-fade " data-ride="carousel" data-interval="2000">

            <ol className="carousel-indicators">
                {
                this.props.news.map( (item,index) =>(
                        index == 0 ?
                            <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                           :
                            <li data-target="#carousel-example-2" data-slide-to={index}></li>
                    ))
                }

            </ol>



            <div class="carousel-inner" role="listbox">
                {
                    this.props.news.map( (item,index) =>(
                        index == 0 ?
                            <div className="carousel-item active">
                                <div className="view">
                                    <a href={item.url} target="_blank">
                                    <img className="d-block w-100 img-car"
                                         src={item.urlToImage}
                                         alt="slide"/>
                                    </a>
                                    <div className="mask rgba-black-light"></div>
                                </div>
                                <div className="carousel-caption">
                                    <h5 className="h5-responsive">{item.title}</h5>
                                </div>
                            </div>
                            :
                            <div className="carousel-item">
                                <div className="view">
                                    <a href={item.url} target="_blank">
                                    <img className="d-block w-100 img-car"
                                         src={item.urlToImage}
                                         alt="slide"/>
                                    </a>
                                    <div className="mask rgba-black-light"></div>
                                </div>
                                <div className="carousel-caption">
                                    <h5 className="h5-responsive">{item.title}</h5>
                                </div>
                            </div>

                    ))
                }
            </div>

            <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>
    )
    }
}

export default Carousel;