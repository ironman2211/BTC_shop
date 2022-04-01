import "./category.scss"
export default function Category() {
    return (
        <>
            <div className="cardBox">
                <div className="categoryGrid">
                    <div className="leftCategoryItems">
                        <div className="phone">
                            <div className="categoryBox">
                                <div className="categoryTitle">
                                    <span className="categoryCardTitle">Phone</span>
                                    <span className="categoryCardDesc">3,482 items</span>
                                </div>
                                <button className="seeAll">see All</button>
                            </div>
                        </div>
                        <div className="flexRow">
                            <div className="watch">
                                <div className="categoryBox">
                                    <div className="categoryTitle">
                                        <span className="categoryCardTitle">Watch</span>
                                        <span className="categoryCardDesc">3,482 items</span>
                                    </div>
                                    <button className="seeAll">see All</button>
                                </div>
                            </div>
                            <div className="headphone">
                                <div className="categoryBox">
                                    <div className="categoryTitle">
                                        <span className="categoryCardTitle">Headphone</span>
                                        <span className="categoryCardDesc">3,482 items</span>
                                    </div>
                                    <button className="seeAll">see All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightCategoryItems">
                        <div className="flexRow">
                            <div className="tablet">
                                <div className="categoryBox">
                                    <div className="categoryTitle">
                                        <span className="categoryCardTitle">Tablet</span>
                                        <span className="categoryCardDesc">3,482 items</span>
                                    </div>
                                    <button className="seeAll">see All</button>
                                </div>
                            </div>
                            <div className="laptop">

                                <div className="categoryBox">
                                    <div className="categoryTitle">
                                        <span className="categoryCardTitle">Laptop</span>
                                        <span className="categoryCardDesc">3,482 items</span>
                                    </div>
                                    <button className="seeAll">see All</button>
                                </div>
                            </div>
                        </div>
                        <div className="accessories">
                            <div className="categoryBox">
                                <div className="categoryTitle">
                                    <span className="categoryCardTitle">Accessories</span>
                                    <span className="categoryCardDesc">3,482 items</span>
                                </div>
                                <button className="seeAll">see All</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className="mobileCardBox">
                <div className="smPhone">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Tablet</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
                <div className="smTablet">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Tablet</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
                <div className="smLaptop">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Laptop</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
                <div className="smWatch">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Watch</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
                <div className="smHeadphone">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Headphone</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
                <div className="smAccessories">
                    <div className="categoryBox">
                        <div className="categoryTitle">
                            <span className="categoryCardTitle">Accessories</span>
                            <span className="categoryCardDesc">3,482 items</span>
                        </div>
                        <button className="seeAll">see All</button>
                    </div>
                </div>
            </div>
        </>
    )
}
