import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <button
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;
