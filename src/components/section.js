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

                  
                  <div >
                  

    </div>
    
                </div>
               
              </div>
              
             
            );
          })};



      </section>
      <div>
    
      </div>
    </>

    
  );
        };
    
      