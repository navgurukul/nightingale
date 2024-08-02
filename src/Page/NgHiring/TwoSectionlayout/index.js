import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Optional, if you have custom styles

function DualSectionLayout() {
  return (
    <div className="container d-flex">
      <div className="row w-100">
        {/* First Section */}
        <div className="col-5">
          <section className="content-block">
            <h2>First Section</h2>
            <p>This is the content of the first section.</p>
          </section>
        </div>

        {/* Vertical Line */}
        <div className="col-2 d-flex justify-content-center align-items-center">
          <div className="vertical-line"></div>
        </div>

        {/* Second Section */}
        <div className="col-5">
          <section className="content-block">
            <h2>Second Section</h2>
            <p>This is the content of the second section.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DualSectionLayout;
