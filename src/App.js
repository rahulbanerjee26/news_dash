import React from 'react';
import Nav from "./Components/navBar.js";
import './css/bootstrap.css';
import Carousel from "./Components/Carousel.js";
import Footer from "./Components/footer_nav";
import NewsTemplate from "./Components/news_template";
import Article from "./Components/Article";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";




class App extends React.Component {

    state = {
        items: [],
        topHeadlines: [],
        status: 0,
        sports: [],
        topSports: [],
        tech: [],
        topTech: [],
        health: [],
        topHealth: [],
        business: [],
        topBusiness: [],
        currArticle: [],
        prevStatus: 0,
        searchResults: []
    };

    componentDidMount() {

        var all = 'https://newsapi.org/v2/top-headlines?' +
            'sources=bbc-news' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var top = 'https://newsapi.org/v2/everything?' +
            'domains=wsj.com,nytimes.com' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var all_health = 'https://newsapi.org/v2/everything?' +
            'q=' + 'health' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var top_health = 'https://newsapi.org/v2/top-headlines?' +
            'category=health&country=us' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var all_sports = 'https://newsapi.org/v2/everything?' +
            'q=' + 'sports' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var top_sports = 'https://newsapi.org/v2/top-headlines?' +
            'category=sports&country=us' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var all_tech = 'https://newsapi.org/v2/everything?' +
            'q=' + 'tech' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var top_tech = 'https://newsapi.org/v2/top-headlines?' +
            'category=technology&country=us' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var all_business = 'https://newsapi.org/v2/everything?' +
            'q=' + 'business' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var top_business = 'https://newsapi.org/v2/top-headlines?' +
            'category=business&country=us' +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        let Items = [];
        let headlines = [];
        let s = [];
        let ts = [];
        let h = [];
        let th = [];
        let b = [];
        let tb = [];
        let t = [];
        let tt = [];

        fetch(top).then((obj) => obj.json()) //returns a json file
            .then(item => {
                Items.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    items: Items
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(all).then((obj) => obj.json()) //returns a json file
            .then(item => {
                headlines.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    topHeadlines: headlines
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(all_health).then((obj) => obj.json()) //returns a json file
            .then(item => {
                h.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    health: h
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(all_business).then((obj) => obj.json()) //returns a json file
            .then(item => {
                b.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    business: b
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(all_sports).then((obj) => obj.json()) //returns a json file
            .then(item => {
                s.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    sports: s
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });


        fetch(all_tech).then((obj) => obj.json()) //returns a json file
            .then(item => {
                t.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    tech: t
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });


        fetch(top_health).then((obj) => obj.json()) //returns a json file
            .then(item => {
                th.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    topHealth: th
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(top_business).then((obj) => obj.json()) //returns a json file
            .then(item => {
                tb.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    topBusiness: tb
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

        fetch(top_sports).then((obj) => obj.json()) //returns a json file
            .then(item => {
                ts.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    topSports: ts
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });


        fetch(top_tech).then((obj) => obj.json()) //returns a json file
            .then(item => {
                tt.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    topTech: tt
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });

    }


    searchForResults(text) {
        var url = 'https://newsapi.org/v2/everything?' +
            'q=' + text +
            '&apiKey=9d18586084cd48eba05dd685f1d2dbd7';

        var results = [];

        fetch(url).then((obj) => obj.json()) //returns a json file
            .then(item => {
                results.push({
                        status: item.status,
                        total: item.totalResults,
                        articles: item.articles
                    }
                )
                this.setState({
                    searchResults: results
                })
            })
            .catch(function (err) { //In case of an error

                alert(err);

            });
    }

    render() {
        var News = [];
        var currTop;
        var currItem;
        var Title;
        var sr = this.state.searchResults;
        if (this.state.status == 0) {
            currTop = this.state.topHeadlines;
            currItem = this.state.items;
            Title = "Home";
        }

        if (this.state.status == 1) {
            currTop = this.state.topHealth;
            currItem = this.state.health;
            Title = "Health";
        }

        if (this.state.status == 2) {
            currTop = this.state.topSports;
            currItem = this.state.sports;
            Title = "Sports";
        }

        if (this.state.status == 3) {
            currTop = this.state.topTech;
            currItem = this.state.tech;
            Title = "Tech";
        }

        if (this.state.status == 4) {
            currTop = this.state.topBusiness;
            currItem = this.state.business;
            Title = "Business";
        }

        if (this.state.status <= 4) {
            currTop.map(item => (
                News = item.articles
            ))

            return (
                <div className={"App"}>
                    <Nav changeHome={() => {
                        this.setState({
                                status: 0
                            }
                        )
                    }}
                         changeTech={() => {
                             this.setState({
                                     status: 3
                                 }
                             )
                         }}
                         changeSport={() => {
                             this.setState({
                                     status: 2
                                 }
                             )
                         }}
                         changeBusiness={() => {
                             this.setState({
                                     status: 4
                                 }
                             )
                         }}
                         changeHealth={() => {
                             this.setState({
                                     status: 1
                                 }
                             )
                         }}
                         search={(e) => {
                             e.preventDefault();
                             var text = document.getElementById("searchTxt").value
                             var Status;
                             if(text.length !=0 ){
                                this.searchForResults(text);
                                Status = 6;
                             }else{
                                 alert("Please Enter Text");
                                 Status = this.state.status;
                             }
                             this.setState({
                                 prevStatus: this.state.status,
                                 status: Status,
                             })
                         }}
                    />

                    <h3 class="h3" style={{'text-align': 'center', 'margin': '0px'}}> {Title} </h3>

                    <Carousel news={News}/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="container-fluid">
                        <div class="row">
                            {
                                currItem.map(item => (
                                    item.articles.map(news => (
                                        <NewsTemplate text={news.description} img={news.urlToImage}
                                                      title={news.title}
                                                      showArticle={() => {
                                                          this.setState({
                                                                  prevStatus: this.state.status,
                                                                  status: 5,
                                                                  currArticle: news
                                                              }
                                                          )
                                                      }}
                                        />
                                    ))
                                ))
                            }
                        </div>
                    </div>
                    <Footer
                            changeStatus={() => {
                            this.setState({
                            status: 7
                                    }
                                )
                            }}

                            changeContact={() => {
                                this.setState({
                                        status: 8
                                    }
                                )
                            }}



                    />
                </div>
            )
        } else if (this.state.status === 5) {
            return (
                <Article item={this.state.currArticle}
                         back={() => {
                             this.setState({
                                     status: this.state.prevStatus,
                                 }
                             )
                         }}
                />
            )
        } else if (this.state.status === 6) {
                return (
                    <div className={"container-fluid"}>
                        <button onClick={()=>{
                            this.setState({
                                    status: 0,
                                }
                            )
                        }} className="btn-dark sticky-top">Home</button>
                        <div class="row">
                        {
                            sr.map(item => (
                                item.articles.map(news => (
                                    <NewsTemplate text={news.description} img={news.urlToImage}
                                                  title={news.title}
                                                  showArticle={() => {
                                                      this.setState({
                                                              prevStatus: this.state.status,
                                                              status: 5,
                                                              currArticle: news
                                                          }
                                                      )
                                                  }}
                                    />
                                ))
                            ))
                        }
                    </div>
                    </div>
                )
        } else if(this.state.status == 7){
            return(
                <div>
                    <Nav changeHome={() => {
                        this.setState({
                                status: 0
                            }
                        )
                    }}
                         changeTech={() => {
                             this.setState({
                                     status: 3
                                 }
                             )
                         }}
                         changeSport={() => {
                             this.setState({
                                     status: 2
                                 }
                             )
                         }}
                         changeBusiness={() => {
                             this.setState({
                                     status: 4
                                 }
                             )
                         }}
                         changeHealth={() => {
                             this.setState({
                                     status: 1
                                 }
                             )
                         }}
                         search={(e) => {
                             e.preventDefault();
                             var text = document.getElementById("searchTxt").value
                             var Status;
                             if(text.length !=0 ){
                                 this.searchForResults(text);
                                 Status = 6;
                             }else{
                                 alert("Please Enter Text");
                                 Status = this.state.status;
                             }
                             this.setState({
                                 prevStatus: this.state.status,
                                 status: Status,
                             })
                         }}
                    />
                    <Testimonial/>
                </div>
            )
        }else if (this.state.status === 8) {
            return (
                <div>
                        <button onClick={()=>{
                            this.setState({
                                    status: 0,
                                }
                            )
                        }} className="btn-dark sticky-top">Home</button>
                        <Contact/>
                </div>

            )
        }
    }
}

export default App;
