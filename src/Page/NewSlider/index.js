import React from "react";
import "./styles.css";

function NewSlider() {
  // const mystyle1 = {
  //   opacity: 1,
  //   marginLeft: "-10%",
  //   // backgroundColor: "green",
  //   // color: "white",
  //   // backgroundColor: "DodgerBlue",
  //   // padding: "10px",
  //   // fontFamily: "Arial"
  // };
  // const mystyle2 = {
  //   color: "red",
  //   fontSize: "30px",
  //   // backgroundColor: "green",
  //   // color: "white",
  //   // backgroundColor: "DodgerBlue",
  //   // padding: "10px",
  //   // fontFamily: "Arial"
  // };
  // const mystyle3 = {
  //   opacity: 1,
  //   transform: "rotate(-180deg)",
  //   marginRight: "-10%",
  //   // backgroundColor: "green",
  //   // color: "white",
  //   // backgroundColor: "DodgerBlue",
  //   // padding: "10px",
  //   // fontFamily: "Arial"
  // };
  // const mystyle4 = {
  //   color: "blue",
  //   fontSize: "30px",
  //   // backgroundColor: "green",
  //   // color: "white",    backgroundColor: "DodgerBlue",
  //   // padding: "10px",
  //   // fontFamily: "Arial"
  // };

  const partners = [
    {
      name: "Hope Foundation",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
    {
      name: "Hope Foundation",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
    {
      name: "Poonam",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
    {
      name: "Hope Foundation",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
    {
      name: "Hope Foundation",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
    {
      name: "Punnu",
      footerMsg: "- Suresh G, Program Director",
      // image: require("./assets/partner.png"),
      description:
        "IITD '13 CS graduate. Co-founded Zumbl.com and FranklyMe. Zumbl was acquired and FranklyMe raised more than 2.6M$ from Matrix Partners and others.",
    },
  ];

  return (
    // <div
    //   id="carouselExampleControls"
    //   class="carousel slide"
    //   data-ride="carousel"
    // >
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img
    //         src={require("./assets/Ellipse_1.png").default}
    //         alt="Ellipse_1.png"
    //       />
    //       <h1>I</h1>
    //     </div>
    //     <div class="carousel-item">
    //       <img src={require("./assets/Ellipse_2.png").default} />
    //       <h1>AM</h1>
    //     </div>
    //     <div class="carousel-item">
    //       <img src={require("./assets/Ellipse_3.png").default} />
    //       <h1>ENOUGH</h1>
    //     </div>
    //   </div>
    //   <a
    //     class="carousel-control-prev"
    //     href="#carouselExampleControls"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Previous</span>
    //   </a>
    //   <a
    //     class="carousel-control-next"
    //     href="#carouselExampleControls"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="sr-only">Next</span>
    //   </a>
    // </div>
    <section class="pt-5 circle-1 body">
      <div class="ourworks-box container pb-5 pt-5">
        <h1 class="our-works-head">Our Clients say</h1>
        <p>
          Check out what clients say about my services. Happy clients all over
          the world. Share your experience with me by submitting your reviews
        </p>
      </div>

      <div class="container pb-5 position-relative">
        <div
          id="demo"
          class="carousel slide position-relative"
          data-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class=""></li>
            <li data-target="#demo" data-slide-to="1" class="active"></li>
            <li data-target="#demo" data-slide-to="2" class=""></li>
          </ul>

          {/* <!-- The slideshow --> */}
          <div class="carousel-inner">
            <div class="carousel-item active carousel-item-left">
              {/* <div class="carousel-item "> */}
              {/* <div class="carousel-item carousel-item-next caroussel-item-left"> */}
              <div class="d-flex">
                {partners.map((item) => {
                  return (
                    <div class="col-lg-4 col-sm-12 col-12 d-flex flex-column ">
                      <a href="#" class="introduce pb-3">
                        <div class="flex-column-1 ">
                          <p class="pr-2 pl-3 pt-4">
                            {/* Poonam */}
                            {item.description}
                          </p>
                        </div>
                        <div class="flex-column-2 d-flex">
                          <div class="pic p1"></div>
                          <div class="information  flex-column pl-3 pt-2">
                            <p>{item.name}</p>
                            <p class="text-gray">{item.footerMsg}</p>
                          </div>
                        </div>
                        <span></span>
                      </a>
                    </div>
                    // <div class="col-lg-4 col-sm-12 col-12 d-flex flex-column ">
                    //   <a href="#" class="introduce pb-3">
                    //     <div class="flex-column-1 ">
                    //       <p class="pr-2 pl-3 pt-4">
                    //         What a Service!!!!!Antony is one of the top Classy
                    //         designer in the world.Exceeded expectation and designed
                    //         my website to my requirments.Will be usingfor ongoing
                    //         work.
                    //       </p>
                    //     </div>
                    //     <div class="flex-column-2 d-flex">
                    //       <div class="pic p1"></div>
                    //       <div class="information  flex-column pl-3 pt-2">
                    //         <p>David Beckham</p>
                    //         <p class="text-gray">Managing Director</p>
                    //       </div>
                    //     </div>
                    //     <span></span>
                    //   </a>
                    // </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <!-- Left and right controls --> */}

          <a
            class="carousel-control-prev"
            href="#demo"
            data-slide="prev"
            className="mystyle1"
            // style={{opacity: 1; left: -10%;}}
            // style={mystyle1}
          >
            <i
              class="fas fa-chevron-left"
              // style="color:#5969f6; font-size:30px;"
              className="mystyle2"
              // style={mystyle2}
            ></i>
          </a>
          <a
            class="carousel-control-next"
            href="#demo"
            data-slide="next"
            // style="opacity: 1; transform: rotate(-180deg); right: -10%;"
            className="mystyle3"
            // style={mystyle3}
          >
            <i
              class="fas fa-chevron-left"
              // style="color:#5969f6; font-size:30px;"
              className="mystyle4"
              // style={mystyle4}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewSlider;
