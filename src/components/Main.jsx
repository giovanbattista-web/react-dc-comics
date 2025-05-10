import ListComics from "./ListComics";

const Main = () => {
       return (
              <main>
                     <div className="main_alto">
                            <div className="container">
                                   <div className="row flex flex-wrap">
                                          <div className="col-16">
                                                 <div className="card">
                                                        <div className="card-image flex">
                                                               <ListComics />
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div className="main_basso gap">
                            <div className="container">
                                   <div className="padding_foto_main flex">
                                          <div>
                                                 <img src="./public/img/buy-comics-digital-comics1.png" alt="foto" />
                                                 <h4>DIGITAL COMICS</h4>
                                          </div>
                                          <div>
                                                 <img src="./public/img/buy-comics-merchandise1.png" alt="foto" />
                                                 <h4>DC MERCHANDISE</h4>
                                          </div>
                                          <div>
                                                 <img src="./public/img/buy-comics-subscriptions1.png" alt="foto" />
                                                 <h4>SUBSCRIPTION</h4>
                                          </div>
                                          <div>
                                                 <img src="./public/img/buy-comics-shop-locator1.png" alt="foto" />
                                                 <h4>COMIC SHOP LOCATOR</h4>
                                          </div>
                                          <div>
                                                 <img src="./public/img/buy-dc-power-visa1.svg" alt="foto" />
                                                 <h4>DC POWER VISA</h4>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </main>
       );
};

export default Main;