import "./search.scss"
export default function Search() {

  return (
    <div className="searchInput">
      <div className="preInputIcons">
        <div className="selectBox">
          <div className="loactionIcon">
            <span>
              <svg width="100%" height="100%" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10ZM8 0C12.2 0 16 3.22 16 8.2C16 11.38 13.55 15.12 8.66 19.43C8.28 19.76 7.71 19.76 7.33 19.43C2.45 15.12 0 11.38 0 8.2C0 3.22 3.8 0 8 0Z" fill="#5950C8" />
              </svg>
            </span>
          </div>
          <select name="cars" >

            <option value="volvo">Jodhpur</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>

          </select>


        </div>
        <div className="vl"></div>
        <div className="searchIcon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11H11.71L11.43 10.73C12.63 9.33001 13.25 7.42002 12.91 5.39002C12.44 2.61002 10.12 0.390015 7.32001 0.0500152C3.09001 -0.469985 -0.469985 3.09001 0.0500152 7.32001C0.390015 10.12 2.61002 12.44 5.39002 12.91C7.42002 13.25 9.33001 12.63 10.73 11.43L11 11.71V12.5L15.25 16.75C15.66 17.16 16.33 17.16 16.74 16.75C17.15 16.34 17.15 15.67 16.74 15.26L12.5 11ZM6.50002 11C4.01002 11 2.00002 8.99002 2.00002 6.50002C2.00002 4.01002 4.01002 2.00002 6.50002 2.00002C8.99002 2.00002 11 4.01002 11 6.50002C11 8.99002 8.99002 11 6.50002 11Z" fill="#B0B0B0" />
          </svg>

        </div>
      </div>
      <input placeholder="Search Schools" />
    </div>

  )
}
