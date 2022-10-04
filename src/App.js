import React, { useState } from "react";
import { GiFootprint } from "react-icons/gi";
import { BsFacebook, BsInstagram } from "react-icons/bs";

import classes from "./App.module.css";

import DesktopHeroRatingBox from "./components/desktop-hero-rating-box/DesktopHeroRatingBox";
import DesktopHeroDescriptionBox from "./components/desktop-hero-description-box/DesktopHeroDescriptionBox";
import DesktopHeroTestimonialBox from "./components/desktop-hero-testimonial-box/DesktopHeroTestimonialBox";
import ButtonBookNow from "./components/button-book-now/ButtonBookNow";
import TestimonialNoArrow from "./components/testimonial-no-arrow-box/TestimonialNoArrowBox";
import ContactForm from "./components/contact-form/ContactForm";

function App() {
  const [heroTestimonialState, setHeroTestimonialState] = useState(1);

  const switchHeroTestimonialHandler = () => {
    heroTestimonialState === 3
      ? setHeroTestimonialState(1)
      : setHeroTestimonialState(heroTestimonialState + 1);
  };

  return (
    <div className="app">
      {/* ---------------- */}
      {/* -- Hero Section -- */}
      {/* ---------------- */}
      <section className={classes["section-hero"]}>
        {/* -------- Desktop Header -------- */}
        <header className={classes["desktop-header"]}>
          {/* ---- Logo Wrapper ---- */}
          <div className={classes["desktop-logo--wrapper"]}>
            <i className={classes["desktop-logo--icon"]}>
              <GiFootprint />
            </i>
            <h1 className={classes["desktop-logo--heading"]}>
              The London Wayfarer Hostel
            </h1>
          </div>

          <div className={classes["desktop-nav--wrapper"]}>
            <ul className={classes["desktop-nav--ul"]}>
              <li className={classes["desktop-nav--li"]}>Dorms</li>
              <li className={classes["desktop-nav--li"]}>Facilities</li>
              <li className={classes["desktop-nav--li"]}>Gallery</li>
              <li className={classes["desktop-nav--li"]}>Location</li>
              <li className={classes["desktop-nav--li"]}>Contact</li>
            </ul>
          </div>
        </header>

        {/* -------- Desktop Hero Rating Box -------- */}
        <DesktopHeroRatingBox />

        {/* -------- Desktop Hero Description Box -------- */}
        <DesktopHeroDescriptionBox />

        {/* -------- Desktop Hero Testimonial Boxes -------- */}
        {heroTestimonialState === 1 && (
          <div className={classes["u--hero-testimonial--position"]}>
            <DesktopHeroTestimonialBox
              imgSource="/img/testimonial-hero-1.jpg"
              review="Really great hostel that puts you right in the center of the sights, next to the train, buses, all of it. Solid bunk rooms though there’s a lot of stairs to get to them and they could use curtains, great private rooms if you book early enough to snag one at a nice price. Kitchen / community wasn't as strong but the staff rocks, the place is in the right spot, it's fantastic. "
              reviewer1="Victoria Gauld,"
              reviewer2="Backpacker"
              switchTestimonial={switchHeroTestimonialHandler}
            />
          </div>
        )}
        {heroTestimonialState === 2 && (
          <div className={classes["u--hero-testimonial--position"]}>
            <DesktopHeroTestimonialBox
              imgSource="/img/testimonial-hero-2.jpg"
              review="The building itself is fantastic, a massive spiral staircase that leads quite nice dorms rooms. Bathrooms are clean with good showers. The staff are absolutely lovely, when I asked if I could extend they apologized profusely as they were fully booked and kept me updated in case anyone cancelled last minute. Towels are cheap to rent too. When I go back to London I am definitely staying again! "
              reviewer1="Kayleigh Parks,"
              reviewer2="Backpacker"
              switchTestimonial={switchHeroTestimonialHandler}
            />
          </div>
        )}
        {heroTestimonialState === 3 && (
          <div className={classes["u--hero-testimonial--position"]}>
            <DesktopHeroTestimonialBox
              imgSource="/img/testimonial-hero-3.jpg"
              review="I stayed here for 3 weeks over a month. The team does a great job of keeping the hostel clean, as the dining areas, kitchen and bathrooms were always spotless. There is a nice dining and chill out area. The kitchen is fully equipped with enough room for refrigerated and frozen items. The beds are comfortable and there are decent sized lockers in the rooms. "
              reviewer1="Andrew Holden,"
              reviewer2="Digital Nomad"
              switchTestimonial={switchHeroTestimonialHandler}
            />
          </div>
        )}

        {/* -------- Book Now Button -------- */}

        <div className={classes["u--hero-book-now-btn--position"]}>
          <ButtonBookNow />
        </div>
      </section>

      {/* ---------------- */}
      {/* -- Dorms Section -- */}
      {/* ---------------- */}
      <section className={classes["section-dorms"]}>
        <h2 className={classes["dorms-heading"]}>Dorms</h2>
        {/* -------- Grid Wrapper -------- */}
        <div className={classes["dorms-grid-wrapper"]}>
          {/* ---- Image Wrapper ---- */}
          <div className={classes["dorms-img-wrapper"]}>
            <img
              className={classes["dorms-img"]}
              src="/img/img1.jpg"
              alt="dorms photo"
            />
          </div>

          {/* ---- Text Wrapper ---- */}
          <div className={classes["doms-text-wrapper"]}>
            <ul className={classes["dorms-ul"]}>
              <li className={classes["dorms-li"]}>
                14 Bed Mixed Dorm (up to £10 p/n)
              </li>
              <li className={classes["dorms-li"]}>
                10 Bed Mixed Dorm (up to £12 p/n){" "}
              </li>
              <li className={classes["dorms-li"]}>
                8 Bed Mixed Dorm (up to £13 p/n){" "}
              </li>
              <li className={classes["dorms-li"]}>
                8 Bed Womens Dorm (up to £13 p/n){" "}
              </li>
              <li className={classes["dorms-li"]}>
                4 Bed Mixed Dorm (up to £15 p/n){" "}
              </li>
              <li className={classes["dorms-li"]}>
                4 Bed Womens Dorm (up to £15 p/n){" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------ */}
      {/* -- Facilities Section -- */}
      {/* ------------------------ */}
      <section className={classes["section-facilities"]}>
        <h2 className={classes["facilities-heading"]}>Facilities</h2>
        {/* -------- Grid Wrapper -------- */}
        <div className={classes["facilities-grid-wrapper"]}>
          {/* ---- Text Wrapper 1 ---- */}
          <div className={classes["facilities-text-wrapper--1"]}>
            <ul className={classes["facilities-ul"]}>
              <li className={classes["facilities-li"]}>24 hour reception</li>
              <li className={classes["facilities-li"]}>
                Pre check-in luggage storage available
              </li>
              <li className={classes["facilities-li"]}>
                Padlocks available to buy
              </li>
              <li className={classes["facilities-li"]}>
                Chargers available to buy
              </li>
            </ul>
          </div>

          {/* ---- Image Wrapper 1 ---- */}
          <div className={classes["facilities-img-wrapper--1"]}>
            <img
              className={classes["facilities-img"]}
              src="/img/img2.jpg"
              alt="reception desk"
            />
          </div>

          {/* ---- Image Wrapper 2 ---- */}
          <div className={classes["facilities-img-wrapper--2"]}>
            <img
              className={classes["facilities-img"]}
              src="/img/img3.jpg"
              alt="reception desk"
            />
          </div>

          {/* ---- Text Wrapper 2 ---- */}
          <div className={classes["facilities-text-wrapper--2"]}>
            <ul className={classes["facilities-ul"]}>
              <li className={classes["facilities-li"]}>Lounge open 24/7</li>
              <li className={classes["facilities-li"]}>Communal Televison</li>
              <li className={classes["facilities-li"]}>Tables for laptops</li>
              <li className={classes["facilities-li"]}>
                Movie nights every Tuesday
              </li>
              <li className={classes["facilities-li"]}>
                Pub crawl every Friday
              </li>
            </ul>
          </div>

          {/* ---- Text Wrapper 3 ---- */}
          <div className={classes["facilities-text-wrapper--3"]}>
            <ul className={classes["facilities-ul"]}>
              <li className={classes["facilities-li"]}>
                Kitchen open 7am - 10pm
              </li>
              <li className={classes["facilities-li"]}>
                Breakfast available from 7am - 9am
              </li>
              <li className={classes["facilities-li"]}>
                Oven, microwave, fridges, freezers and cupboards available
              </li>
            </ul>
          </div>

          {/* ---- Image Wrapper 3 ---- */}
          <div className={classes["facilities-img-wrapper--3"]}>
            <img
              className={classes["facilities-img"]}
              src="/img/img4.jpg"
              alt="reception desk"
            />
          </div>

          {/* ---- Image Wrapper 4 ---- */}
          <div className={classes["facilities-img-wrapper--4"]}>
            <img
              className={classes["facilities-img"]}
              src="/img/img5.jpg"
              alt="reception desk"
            />
          </div>

          {/* ---- Text Wrapper 4 ---- */}
          <div className={classes["facilities-text-wrapper--4"]}>
            <ul className={classes["facilities-ul"]}>
              <li className={classes["facilities-li"]}>
                Shared bathrooms & showers
              </li>
              <li className={classes["facilities-li"]}>
                Washing machines available
              </li>
              <li className={classes["facilities-li"]}>
                Towels available to rent from reception
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------ */}
      {/* -- Testimonials 2 Section -- */}
      {/* ------------------------ */}

      <section className={classes["section-testimonials-2"]}>
        <div className={classes["testimonials-row"]}>
          <TestimonialNoArrow
            imgSource="/img/testimonial-1.jpg"
            review="My partner and I stayed in a private room, and it was amazing - basically a hotel room! Spacious room with a table, two chairs, side tables, tv + towels. The private rooms were in a separate building to the main hostel - lots of stairs if that would bother anybody. Bathrooms clean and had hand towels and soap. Also separate kitchen in the private rooms building. Still had access to all common areas in other building. Some noise overnight given location, but to be expected - earplugs needed. "
            reviewer1="Brendan Silburn,"
            reviewer2="Backpacker"
          />
          <TestimonialNoArrow
            imgSource="/img/testimonial-2.jpg"
            review="Had a nice few nights at this hostel! Location is 10/10 - steps from train station and a lot of the main attractions are within walking distance (including great bars and clubs!). Bathrooms were modern. Not a very social vibe to the hostel but people were friendly. Beds were very comfortable and it was helpful having lockers big enough for our backpacks. Overall, good stay! "
            reviewer1="Gemma Skinner,"
            reviewer2="Digital Nomad"
          />
          <TestimonialNoArrow
            imgSource="/img/testimonial-3.jpg"
            review="The place was great! Super close to the train station, literally up the stairs across the street, and directly on your left. The rooms were spacious, my group of 8 never felt crowded or cramped in our 9 person room. Because you are so close to everything, there is a bit of noise at night, but it never bothered me or anyone in my group that I know of. There is no elevator, but the stairs aren't steep, but we were on the second floor. Overall great hostel, would recommend. "
            reviewer1="Woo Jae Hwa,"
            reviewer2="Student"
            switchTestimonial={switchHeroTestimonialHandler}
          />
        </div>
        <div className={classes["testimonials-btn-wrapper"]}>
          <ButtonBookNow />
        </div>
      </section>

      {/* ------------------------ */}
      {/* -- Gallery Section -- */}
      {/* ------------------------ */}

      <section className={classes["section-gallery"]}>
        <h2 className={classes["gallery-heading"]}>Gallery</h2>
        <div className={classes["gallery-grid-wrapper"]}>
          <img
            src="/img/thumb/gal1.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-1"]}`}
          />

          <img
            src="/img/thumb/gal2.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-2"]}`}
          />

          <img
            src="/img/thumb/gal3.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-3"]}`}
          />

          <img
            src="/img/thumb/gal4.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-4"]}`}
          />

          <img
            src="/img/thumb/gal5.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-5"]}`}
          />

          <img
            src="/img/thumb/gal6.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-6"]}`}
          />

          <img
            src="/img/thumb/gal7.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-7"]}`}
          />

          <img
            src="/img/thumb/gal8.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-8"]}`}
          />

          <img
            src="/img/thumb/gal9.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-9"]}`}
          />

          <img
            src="/img/thumb/gal10.jpg"
            alt="gallery image"
            className={`${classes["gallery-img"]} ${classes["gallery-img-10"]}`}
          />
        </div>
      </section>

      {/* ------------------------ */}
      {/* -- Location Section -- */}
      {/* ------------------------ */}
      <section className={classes["section-location"]}>
        <h2 className={classes["location-heading"]}>Location</h2>
        {/* -------- Grid Wrapper -------- */}
        <div className={classes["location-grid-wrapper"]}>
          {/* -------- Text Wrapper -------- */}
          <div className={classes["location-text-wrapper"]}>
            <p className={classes["location-text"]}>
              From Charlton Station, head north up Charlton Church Road. Turn
              Left at the Anchor and Hope, we are the forth building on the
              right.
            </p>
            <p className={classes["location-text"]}>
              From the Anchor and Hope bus lane (472), head north at the
              roundabout and then turn left. You’ll find us on the righthand
              side, opposite Sainsbury’s Thameside
            </p>
          </div>

          {/* -------- Map Wrapper -------- */}
          <div className="location-map-wrapper">
            <iframe
              title="map"
              className={classes["location-map"]}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=0.024469792842864994%2C51.492776916343566%2C0.028010308742523197%2C51.494303251583524&amp;layer=mapnik&amp;marker=51.49354078895947%2C0.026240000000029795"
            ></iframe>
            <br />
            <small className={classes["location-map-link-wrapper"]}>
              <a
                className={classes["location-map-link"]}
                href="https://www.openstreetmap.org/?mlat=51.49354&amp;mlon=0.02624#map=19/51.49354/0.02624"
              >
                View Larger Map
              </a>
            </small>
          </div>
        </div>
        <div className={classes["location-btn-wrapper"]}>
          <ButtonBookNow />
        </div>
      </section>

      {/* ------------------------ */}
      {/* -- Contact Section -- */}
      {/* ------------------------ */}
      <section className={classes["section-contact"]}>
        <h2 className={classes["contact-heading"]}>Contact</h2>
        <ContactForm />
        <p className={classes["contact-address"]}>The London Wayfarer</p>
        <p className={classes["contact-address"]}>Riverside</p>
        <p className={classes["contact-address"]}>London</p>
        <p className={classes["contact-address"]}>SE7 7SU</p>
        <a className={classes["contact-link"]} href="tel:#">
          +44 8951 343769
        </a>
        <a
          className={classes["contact-link"]}
          href="mailto:#?subject=Feedback&body=Message"
        >
          admin@londonwayfarer.co.uk
        </a>
      </section>

      {/* ------------------------ */}
      {/* -- Footer ------------ */}
      {/* ------------------------ */}

      <footer className={classes["footer"]}>
        <div className={classes["footer-text-wrapper"]}>
          <p className={classes["footer-text"]}>
            Copyright © 2021, The London Wayfarer Hostel
          </p>
        </div>
        <div className={classes["footer-icon-wrapper"]}>
          <span className={classes["footer-icon"]}>
            <BsFacebook />
          </span>
          <span className={classes["footer-icon"]}>
            <BsInstagram />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
