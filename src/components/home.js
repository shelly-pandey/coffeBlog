import React, { useState, useCallback } from "react";
import Header from "./header.js";
import { Carousel } from "react-bootstrap";
import image4 from "../assets/images/posts/img4.png";
import image3 from "../assets/images/posts/img3.png";
import image2 from "../assets/images/posts/img2.png";
import Section from "./section";
import MyPaginator from "./MyPaginator";
import { blogData } from "../data.js";
import usePagination from "../hooks/usePagination";

import "../css/section.css";

export default function Home() {
  const [filteredBlogData, setFilteredBlogData] = useState(blogData);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback((event) => {
    let searchQuery = event.target.value;

    if (searchQuery) {
      setFilteredBlogData(search(searchQuery));
    } else {
      setFilteredBlogData(blogData);
    }
  });

  function search(searchQuery) {
    return blogData.filter((blog) => {
      return (
        blog.title
          .toLocaleLowerCase()
          .indexOf(searchQuery.toLocaleLowerCase()) !== -1
      );
    });
  }

  const ITEMS_PER_PAGE = 5;
  const {
    currentPage, getCurrentData, changePage, pageCount,
  } = usePagination(filteredBlogData, ITEMS_PER_PAGE);

  const onPageChange = (event, value) => changePage(value);
  


  return (
    <div>
      <Header handleChange={handleChange} />

      <Carousel variant="dark" className="container">
        <Carousel.Item>
          <img className="d-block w-100" src={image4} alt="First slide" />
          <Carousel.Caption className="slide-text">
            
            <p>The drink dates back to 800 A.D.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Second slide" />

          <Carousel.Caption className="slide-text">
            
            <p>Coffee beans are technically seeds.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />

          <Carousel.Caption className="slide-text">
            
            <p>And you can eat coffee cherries as a food.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      <Section filteredBlogData={getCurrentData()} />
      <MyPaginator
        itemCount={filteredBlogData.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={onPageChange}
        currentPage={currentPage}
        pageCount={pageCount}
      />
    </div>
  );
}
