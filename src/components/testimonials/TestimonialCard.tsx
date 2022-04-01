import "./testimonials.scss"
import img from "../../assets/images/landingPage/iphone-12-tim-8.png"
export default function Testimonials() {
    return (
        <div className="testimonialCardBox">
            <div className="testimonialCardUpper">
                <div className="testimonialCardImg">

                </div>
                <span className="clientName">Theresa Webb</span>
                <span className="clientInfo">UI Designer</span>

            </div>
            <div className="testimonialCardLower">
                <span className="review">
                    When your plugged-in, constantly-on-the-go lifestyle has you on the fritz, it feels impossible to take your dog out for a leisurely stroll.
                </span>
            </div>
        </div>
    )
}
