import "./Landing.scss"
import Heading from "../../components/Header/Header"
import groupPhoto from "../../assets/images/landingPage/6162 1.png"
import Search from "../../components/search/Search"
import Category from "../../components/category/Category"
import Featured from "../../components/featured/Featured"
import TestimonialCard from "../../components/testimonials/TestimonialCard"
import Footer from "../../components/Footer/Footer"
import Trending from "../../components/trending/Trending"
import Partner from "../../components/parntners/Partner"
import Guarantee from "../../components/guarantee/Guarantee"


const Landing = () => {

  return (
    <div className="landingPageBox">
      <Heading />
      <div className="middle">
        <div className="landingImage">
          <img src={groupPhoto} alt="" />
        </div>
        <div className="searchBox">
          <Search />
          <div className="searchDesc">
            <span >School not listed?&nbsp;
              <span className="register">REGISTER</span>
            </span>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="leftInfo">
          <span className="btc">BTC</span>
          <span>One stop place for all school children needs</span>
          <button>Shop Now&nbsp;
            <span>
              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99741 6.27737C7.67198 6.60278 7.67198 7.13045 7.99741 7.45587C8.32285 7.78128 8.85049 7.78128 9.17593 7.45587L12.0926 4.5392C12.418 4.21378 12.418 3.68612 12.0926 3.3607L9.17593 0.444026C8.85049 0.118593 8.32285 0.118593 7.99741 0.444026C7.67198 0.769468 7.67198 1.2971 7.99741 1.62254L9.49149 3.11662H1.50334C1.04309 3.11662 0.670003 3.4897 0.670003 3.94995C0.670003 4.4102 1.04309 4.78328 1.50334 4.78328H9.49149L7.99741 6.27737Z" fill="white" />
              </svg>

            </span>
          </button>
        </div>
        <div className="rightInfo">
          <div className="schoolsInfo">
            <span className="schoolsInfoNum">2,981</span>
            <span className="schoolsInfoText">schools</span>

          </div>
          <div className="studentsInfo">
            <span className="studentsInfoNum">2,981</span>
            <span className="studentsInfoText">students</span>
          </div>
          <div className="ordersInfo">
            <span className="ordersInfoNum">2,981</span>
            <span className="ordersInfoText">Total&nbsp;Orders&nbsp;Fullfilled</span>
          </div>
        </div>
      </div>
      <div className="paddingBox">
        <h3 className="featuredTitle">Our Category</h3>
        <Category />
        <h3 className="featuredTitle">Featured Schools</h3>
        <div className="featured">

          <Featured />
          <Featured />
          <Featured />
          <Featured />

        </div>

        <div className="buttonCenter">
          <button className="seeMore">See All</button>
        </div>
        <h3 className="featuredTitle">Trending</h3>
        <div className="testimonialHeadDesc">
          <span>  Check our best seller products on BTC right now.</span>
        </div>
        <div className="trendingBox">
          <Trending />
          <Trending />
          <Trending />
          <Trending />


        </div>
        <div className="buttonCenter">
          <button className="loadMore">Load More</button>
        </div>
        <Guarantee />
        <h3 className="featuredTitle">Client Testimonials</h3>
        <div className="testimonialHeadDesc">
          <span>  Customers loving our work. Don’t believe our words, believe theirs.</span>
        </div>
        <div className="testimonials">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div className="buttonCenter">
          <button className="loadMore">Load All</button>
        </div>
      </div>
      <Partner />
      <Footer />
    </div>
  )
}

export default Landing