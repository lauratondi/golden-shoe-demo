import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className="toggles">
        <button
          className="btn"
          id="toggle-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          Shipping
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Shipping
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            lectus, lacinia id lectus imperdiet, aliquam congue nisi.
            Pellentesque vitae ante dapibus, volutpat justo vel, auctor elit.
            Fusce non pharetra ex. Mauris sit amet erat nec leo fringilla
            placerat vel eu nibh.
          </div>
        </div>

        <button
          className="btn"
          id="toggle-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom1"
          aria-controls="offcanvasBottom"
        >
          Contact Us
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom1"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Contact Us
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            lectus, lacinia id lectus imperdiet, aliquam congue nisi.
            Pellentesque vitae ante dapibus, volutpat justo vel, auctor elit.
            Fusce non pharetra ex. Mauris sit amet erat nec leo fringilla
            placerat vel eu nibh.
          </div>
        </div>

        <button
          className="btn"
          id="toggle-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom2"
          aria-controls="offcanvasBottom"
        >
          Gift
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom2"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Gift
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            lectus, lacinia id lectus imperdiet, aliquam congue nisi.
            Pellentesque vitae ante dapibus, volutpat justo vel, auctor elit.
            Fusce non pharetra ex. Mauris sit amet erat nec leo fringilla
            placerat vel eu nibh.
          </div>
        </div>

        <button
          className="btn"
          id="toggle-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom3"
          aria-controls="offcanvasBottom"
        >
          Shopping Cart
        </button>

        <div
          className="offcanvas offcanvas-bottom"
          tabindex="-1"
          id="offcanvasBottom3"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">
              Shopping Cart
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            lectus, lacinia id lectus imperdiet, aliquam congue nisi.
            Pellentesque vitae ante dapibus, volutpat justo vel, auctor elit.
            Fusce non pharetra ex. Mauris sit amet erat nec leo fringilla
            placerat vel eu nibh.
          </div>
        </div>
      </div>

      <footer>
        <div>
          <p>The Store</p>
        </div>
        <div>|</div>
        <div className="socials">
          <i className="fab fa-facebook-square fa-lg"></i>
          {''}
          <i className="fab fa-instagram-square fa-lg"></i>
          {''}
          <i className="fab fa-twitter fa-lg"></i>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
