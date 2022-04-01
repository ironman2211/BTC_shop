import Heading from "../../components/Header/Header";
import "./shop.scss";

const Shop = () => {
  return (
    <div className="ShopPage">
      <Heading />
      <div className="downloadApp">Get App</div>
      <div className="ShopHeader">
        <div className="logo">LOGO</div>
        <div className="category"> Category</div>
        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <span> Deliver To location</span>{" "}
        </div>
        <div className=" InputLine">
          <input placeholder="Search For Product"></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="other wishlist">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>Wishlist</span>
        </div>

        <div className="other cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>cart</span>
        </div>

        <div className="other signin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>signin</span>
        </div>
      </div>
      <p>Items({`${7}`})</p>

      <div className="carasole">
        {/* <div className="left">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
                />
            </svg>
            </div>
            <div className="right">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
                />
            </svg>
            </div> */}
        <div className="wrap">
          <a>
            <img src="/images/imagex.jpg" alt=""></img>
          </a>
        </div>
        <div className="wrap">
          <a>
            <img src="/images/slider-badging.jpg" alt=""></img>
          </a>
        </div>
        <div className="wrap">
          <a>
            <img src="/images/slider-badging.jpg" alt=""></img>
          </a>
        </div>
        <div className="wrap">
          <a>
            <img src="/images/slider-badging.jpg" alt=""></img>
          </a>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="itemsContainerLeft">
          <div className="div">
            <span>weight</span>
            <svg
              className="icons"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
        <div className="itemsContainerRight">
          <span className="AllProducts">All Products</span>
          <div className="items">
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
            <div className="item">
              <img src="/images/img.jpg"></img>
              <b>₹{`${51}`}</b>
              <span className="span">Item</span>
              <small>by shopkeper</small>
            </div>
          </div>
        </div>
      </div>
      <div className="company_description">
    <div className="logoDescrip">
      <b>LOGO</b>
      <p>lorem ipsum dollar xhbjb hhg bhhguihuik hhuhi uhguih hjiun jioasdjkakbh hioinjklas
      huhi uhguih hjiun jioasdjkakbh
      </p>
      <div >
        <img src="/images/facebook.svg"></img>
        <img src="/images/twitter.svg"></img>
        <img src="/images/instagram.svg"></img>
        <img src="/images/facebook.svg"></img>
      </div>
      
    </div>
    <div className="company Descrip">
      <b>Company</b>
      <small>About us</small>
      <small>About brand</small>
      <small>About director</small>
    </div>
    <div className="info Descrip">
    <b>Company</b>
      <small>About us</small>
      <small>About brand</small>
      <small>About director</small>
    </div>
    <div className="subscribe Descrip">
    <b>Subscribe now</b>
      <small>Subscribe your email for newsletter and featured news based on your interest</small>
      <input></input>
    </div>
      </div>
      <hr></hr>
      <footer>
      ©Powered by <b>HeyHomie</b>   All rights reserved
      </footer>
    </div>
  );
};

export default Shop;
