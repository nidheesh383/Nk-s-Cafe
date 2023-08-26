import React from "react";
import "./PageErr.scss";

const PageError = () => {
  return (
    <div className="hidden md:grid mt-18 md:mt-20 px-4 md:px-16 py-4 w-full h-full">
      <div class="error_404">
        <h1>Woops it seems like we lost Page here</h1>
        <h2>ERROR 404</h2>
      </div>
      <div class="compass_container">
        <div class="outside_circle">
          <div class="center"></div>
          <div class="outside_filling">
            <div class="top_point"></div>
            <div class="bottom_point"></div>
            <div class="left_point"></div>
            <div class="right_point"></div>
          </div>
          <div class="inner_circle">
            <div class="inner_filling">
              <span>N</span>
              <span>E</span>
              <span>S</span>
              <span>W</span>
              <div class="needle">
                <div class="top_needle">
                  <div class="needle_inside"></div>
                </div>
                <div class="bottom_needle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="not_north">Page not found &#9785;</h2>
    </div>
  );
};

export default PageError;
