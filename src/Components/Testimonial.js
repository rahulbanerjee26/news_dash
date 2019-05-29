import React,{Component} from 'react';
import '../css/App.css';
import '../css/bootstrap.css';
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";


class Testimonial extends Component{
    render(){
        return(
            <div class="container-fluid">
                    <h2 class="h2 text-dark col-12 text-center"> <strong> TESTIMONIALS </strong> </h2>

                    <div id="testimonial" className="carousel slide carousel-fade " data-ride="carousel"
                         data-interval="2000">


                        <div class="carousel-inner">

                         <div className="carousel-item text-center bg-dark">
                                <div class=" m-auto">
                                    <img class="img-fluid rounded-circle " src={p1}/>
                                </div>
                                <h5 class="py-1 my-1"><strong class="text-warning">Barney Stinson</strong></h5>
                                <h6 class="m-1 text-info"> CEO </h6>
                            <p class="py-3 text-light">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but
                                also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently
                                with desktop publishing software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>


                            <div className="carousel-item text-center  active bg-dark">
                                <div className=" m-auto">
                                    <img className="img-fluid rounded-circle " src={p2}/>
                                </div>
                                <h5 className="py-1 my-1"><strong className="text-warning">Joey Tribianni</strong></h5>
                                <h6 className="m-1 text-info"> CEO </h6>
                                <p className="py-3 text-light">
                                    Contrary to popular belief, Lorem Ipsum
                                    is not simply random text. It has roots
                                    in a piece of classical Latin literature
                                    from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at Hampden-Sydney
                                    College in Virginia, looked up one of the more
                                    obscure Latin words, consectetur, from a Lorem
                                    Ipsum passage, and going through the cites of the
                                    word in classical literature, discovered the undoubtable source
                                </p>
                            </div>


                                <div className="carousel-item text-center bg-dark">
                                    <div className=" m-auto">
                                        <img className="img-fluid rounded-circle " src={p3}/>
                                    </div>
                                    <h5 className="py-1 my-1"><strong className="text-warning">Ted Mosby</strong></h5>
                                    <h6 className="m-1 text-info"> CEO </h6>
                                    <p className="py-3 text-light">
                                        Lorem Ipsum comes from sections 1.10.32 and
                                        1.10.33 of "de Finibus Bonorum et Malorum"
                                        (The Extremes of Good and Evil) by Cicero,
                                        written in 45 BC. This book is a treatise on
                                        the theory of ethics, very popular during the
                                        Renaissance. The first line of Lorem Ipsum,
                                        "Lorem ipsum dolor sit amet..", comes from a
                                        line in section 1.10.32. source
                                    </p>
                                </div>


                            <div className="carousel-item text-center  bg-dark">
                                <div className=" m-auto">
                                    <img className="img-fluid rounded-circle " src={p4}/>
                                </div>
                                <h5 className="py-1 my-1"><strong className="text-warning">Ross Geller</strong></h5>
                                <h6 className="m-1 text-info"> CEO </h6>
                                <p className="py-3 text-light">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here'
                                    , making it look like readable English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as their default model text,
                                    and a search for 'lorem ipsum' will uncover many web sites still in
                                    their infancy. Various versions have evolved over the years, sometimes
                                    by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>



                            <div className="carousel-item text-center  bg-dark">
                                <div className=" m-auto">
                                    <img className="img-fluid rounded-circle " src={p5}/>
                                </div>
                                <h5 className="py-1 my-1"><strong className="text-warning">Marshall Eriksen</strong></h5>
                                <h6 className="m-1 text-info"> CEO </h6>
                                <p className="py-3 text-light">
                                    here are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure
                                    there isn't anything embarrassing hidden in the middle of text. All the
                                    Lorem Ipsum generators on the Internet tend to repeat predefined chunks
                                    as necessary, making this the first true generator on the Internet. It
                                    uses a dictionary of over 200
                                </p>
                            </div>


                            <div className="carousel-item text-center  bg-dark">
                                <div className=" m-auto">
                                    <img className="img-fluid rounded-circle " src={p6}/>
                                </div>
                                <h5 className="py-1 my-1"><strong className="text-warning">Chandler Bing</strong></h5>
                                <h6 className="m-1 text-info"> CEO </h6>
                                <p className="py-3 text-light">
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                    below for those interested. Sections 1.10.32 and 1.10.33 from
                                    "de Finibus Bonorum et Malorum" by Cicero are also reproduced
                                    in their exact original form, accompanied by English versions
                                    from the 1914 translation by H. Rackham.
                                </p>
                            </div>

                            <a className="carousel-control-prev" href="#testumonial" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="carousel-control-next" href="#testimonial" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;