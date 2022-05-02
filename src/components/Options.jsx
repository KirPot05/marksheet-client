import "../styles/Options.css";

function Options() {
    return (
        <div className="options">
            <div className="subject__options">
                <span>
                    English: <input type="radio" name="subject" id="" />
                </span>

                <span>
                    Mathematics: <input type="radio" name="subject" id="" />
                </span>

                <span>
                    Hindi: <input type="radio" name="subject" id="" />
                </span>

                <span>
                    Science: <input type="radio" name="subject" id="" />
                </span>

                <span>
                    Computer Science: <input type="radio" name="subject" id="" />
                </span>

            </div>

            <button id="download__btn">Download</button>
        
        
        </div>
    );
}

export default Options;
