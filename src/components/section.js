import "../css/section.css";
import Content from "./readMore";
import image4 from "../assets/images/posts/img4.png";
import { Link } from "react-router-dom";

export default function Section({ filteredBlogData }) {
  return (
    <>
      <section className="section">
        {filteredBlogData.length === 0 && (
          <div>No blogs matches the search query...!</div>
        )}

        {filteredBlogData &&
          filteredBlogData.map((blog) => {
            return (
              <div key={blog.id} className="section__div">
                <img className="section__img" src={image4} alt=""></img>
                <div key={blog.id} className="section_para">
                  <h4>
                    <b>
                      <Link to={`/detail/${blog.id}`}> {blog.title} </Link>
                    </b>
                  </h4>
                  <span className="date-label-font">
                    Published At: {blog.published_date}
                  </span>
                  <Content article={blog.article} />
                </div>
              </div>
            );
          })}
      </section>
      <section className="section-bottom">
        <div className="section-bottom__div">
          <h4>WBC Shop</h4>
          <p>Your shopping cart is empty</p>
          <button type="button" className="btn">
            Visit the shop
          </button>
        </div>
        <div className="section-bottom__div">
          <h4>Next event</h4>
          <h3>World Barsita Cup 2021</h3>
          <p>
            Copenhagen, Denmark <br/>
            Dates: 25th-27th August 2021 <br/>
            Theme: SENSORY
          </p>
          <button type="button" className="btn">
            Sign up now
          </button>
        </div>
        <div className="section-bottom__div">
          <h4>Scoreboard</h4>
          <h3>List of winners from last year</h3>
          <p>
            2021 - ? <br/>
            2021 - Sweden <br/>
            2021 - Germany <br/>
          </p>
          <button type="button" className="btn">
            Visit the shop
          </button>
        </div>
      </section>
    </>
  );
}
