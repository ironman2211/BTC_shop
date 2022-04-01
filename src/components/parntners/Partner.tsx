import "./partner.scss"
import puma from "../../assets/images/landingPage/image 4.png"
import raymond from "../../assets/images/landingPage/image 5.png"
import cello from "../../assets/images/landingPage/image 6.png"
import ncert from "../../assets/images/landingPage/image 7.png"
export default function Partner() {
    return (
        <div className="partnerbox">
            <div className="logo">
                <img src={puma} alt="" />
            </div>
            <div className="logo">
                <img src={raymond} alt="" />
            </div>
            <div className="logo">
                <img src={cello} alt="" />
            </div>
            <div className="logo">
                <img src={ncert} alt="" />
            </div>
        </div>
    )
}
