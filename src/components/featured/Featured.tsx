import "./featured.scss"
import person from "../../assets/images/landingPage/Base.png"
export default function Featured() {
    return (
        <div className="featuredBox">
            <div className="imgBox">
                <img src={person} alt="" />
            </div>
            <div className="featuredDesc">
                <span className="featuredDescTitle">St. Thomas Church School</span>
                <span className="featuredDescLoaction">DPS Jodhpur</span>
            </div>
        </div>
    )
}
