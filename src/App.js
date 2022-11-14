import React, { useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { GiFootprint } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

import classes from "./App.module.css";

import DesktopHeroRatingBox from "./components/desktop-hero-rating-box/DesktopHeroRatingBox";
import DesktopHeroDescriptionBox from "./components/desktop-hero-description-box/DesktopHeroDescriptionBox";
import DesktopHeroTestimonialBox from "./components/desktop-hero-testimonial-box/DesktopHeroTestimonialBox";
import ButtonBookNow from "./components/button-book-now/ButtonBookNow";
import TestimonialNoArrow from "./components/testimonial-no-arrow-box/TestimonialNoArrowBox";
import ContactForm from "./components/contact-form/ContactForm";

function App() {
  {
    /* --- useAnimation Variables --- */
  }
  const dormsAnimate = useAnimation();
  const facilitiesAnimate = useAnimation();
  const testimonialsAnimate = useAnimation();
  const galleryAnimate = useAnimation();
  const locationAnimate = useAnimation();
  const contactAnimate = useAnimation();

  {
    /* --- Animation Handlers --- */
  }

  const dormsAnimateHandler = () => {
    dormsAnimate.start({
      opacity: 1,
      x: 0,
      transition: { duration: 2.5 },
    });
  };

  const facilitiesAnimateHandler = () => {
    facilitiesAnimate.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    });
  };

  const testimonialsAnimateHandler = () => {
    testimonialsAnimate.start({
      opacity: 1,
      transition: { duration: 2.5 },
    });
  };

  const galleryAnimateHandler = () => {
    galleryAnimate.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    });
  };

  const locationAnimateHandler = () => {
    locationAnimate.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1.5 },
    });
  };

  const contactAnimateHandler = () => {
    contactAnimate.start({
      opacity: 1,
      transition: { duration: 2.5 },
    });
  };

  {
    /* ------ State controlling whether the social/booking modal is active ------ */
  }
  const [socialBookingModalActive, setSocialBookingModalActive] =
    useState(false);

  const [socialBookingMessage, setSocialBookingMessage] =
    useState("PlaceHolder");

  const turnOnSocialModalHandler = () => {
    setSocialBookingMessage(
      "This button would take you to off site to London Wayfarer's social media."
    );
    setSocialBookingModalActive(true);
  };

  const turnOnBookingModalHandler = () => {
    setSocialBookingMessage(
      "This button would take you to off site to a booking website like Hostelworld."
    );
    setSocialBookingModalActive(true);
  };

  const turnOffSocialModalHandler = () => {
    setSocialBookingModalActive(false);
  };

  {
    /* ------ State controlling whether the gallery modal is active ------ */
  }
  const [galleryModalActive, setGalleryModalActive] = useState(false);

  const turnOffGalleryModalHandler = () => {
    setGalleryModalActive(false);
  };

  const turnOnGalleryModalHandler1 = () => {
    setCurrentModalImage(1);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler2 = () => {
    setCurrentModalImage(2);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler3 = () => {
    setCurrentModalImage(3);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler4 = () => {
    setCurrentModalImage(4);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler5 = () => {
    setCurrentModalImage(5);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler6 = () => {
    setCurrentModalImage(6);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler7 = () => {
    setCurrentModalImage(7);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler8 = () => {
    setCurrentModalImage(8);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler9 = () => {
    setCurrentModalImage(9);
    setGalleryModalActive(true);
  };

  const turnOnGalleryModalHandler10 = () => {
    setCurrentModalImage(10);
    setGalleryModalActive(true);
  };

  {
    /* ------ State controlling the current image in the modal gallery ------ */
  }
  const [currentModalImage, setCurrentModalImage] = useState(1);

  const nextModalImage = () => {
    if (currentModalImage < 10) {
      setCurrentModalImage(currentModalImage + 1);
    } else {
      setCurrentModalImage(1);
    }
  };

  const prevModalImage = () => {
    if (currentModalImage > 1) {
      setCurrentModalImage(currentModalImage - 1);
    } else {
      setCurrentModalImage(10);
    }
  };
  {
    /* ------ State controlling whether the fullscreen mobile nav menu is showing ------ */
  }
  const [fullscreenMenuShowing, setfullscreenMenuShowing] = useState(false);

  const toggleFullscreenMenu = () => {
    setfullscreenMenuShowing(!fullscreenMenuShowing);
  };

  const turnOffFullscreenMenu = () => {
    setfullscreenMenuShowing(false);
  };

  {
    /* ---- State controlling which hero testimonial user is displayed ------ */
  }
  const [heroTestimonialState, setHeroTestimonialState] = useState(1);

  const switchHeroTestimonialHandler = () => {
    heroTestimonialState === 3
      ? setHeroTestimonialState(1)
      : setHeroTestimonialState(heroTestimonialState + 1);
  };

  return (
    <React.Fragment>
      <div className="app">
        {/* ---------------- */}
        {/* -- Hero Section -- */}
        {/* ---------------- */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes["section-hero"]}
        >
          {/* -------------------------------- */}
          {/* -------- Desktop Header -------- */}
          {/* -------------------------------- */}
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
                <li className={classes["desktop-nav--li"]}>
                  <Link
                    activeClass="active"
                    to="dorms-anchor"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Dorms
                  </Link>
                </li>
                <li className={classes["desktop-nav--li"]}>
                  <Link
                    activeClass="active"
                    to="facilities-anchor"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Facilities
                  </Link>
                </li>
                <li className={classes["desktop-nav--li"]}>
                  <Link
                    activeClass="active"
                    to="gallery-anchor"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li className={classes["desktop-nav--li"]}>
                  <Link
                    activeClass="active"
                    to="location-anchor"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Location
                  </Link>
                </li>
                <li className={classes["desktop-nav--li"]}>
                  <Link
                    activeClass="active"
                    to="contact-anchor"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </header>

          {/* -------------------------------- */}
          {/* -------- Mobile Header -------- */}
          {/* -------------------------------- */}
          <header className={classes["mobile-header"]}>
            {/* ---- Logo Wrapper ---- */}
            <div className={classes["mobile-logo--wrapper"]}>
              <i className={classes["mobile-logo--icon"]}>
                <GiFootprint />
              </i>
              <h1 className={classes["mobile-logo--heading"]}>
                The London Wayfarer Hostel
              </h1>
            </div>
          </header>

          {/* -------- FullScreen Nav Toggle Button ------- */}
          <div className={classes["fullscreen-nav-button--wrapper"]}>
            <button
              className={classes["fullscreen-nav-button"]}
              onClick={toggleFullscreenMenu}
            >
              {!fullscreenMenuShowing && <AiOutlineMenu />}
              {fullscreenMenuShowing && <AiOutlineClose />}
            </button>
          </div>

          {/* ----------------------------------------------- */}
          {/* -------- Full Screen Nav Menu ----------------- */}
          {/* ----------------------------------------------- */}
          {fullscreenMenuShowing && (
            <div className={classes["fullscreen-nav-wrapper"]}>
              <ul className={classes["fullscreen-nav--ul"]}>
                <li className={classes["fullscreen-nav--li"]}>
                  <Link
                    onClick={turnOffFullscreenMenu}
                    activeClass="active"
                    to="dorms-anchor"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Dorms
                  </Link>
                </li>
                <li className={classes["fullscreen-nav--li"]}>
                  <Link
                    onClick={turnOffFullscreenMenu}
                    activeClass="active"
                    to="facilities-anchor"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Facilities
                  </Link>
                </li>
                <li className={classes["fullscreen-nav--li"]}>
                  <Link
                    onClick={turnOffFullscreenMenu}
                    activeClass="active"
                    to="gallery-anchor"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Gallery
                  </Link>
                </li>
                <li className={classes["fullscreen-nav--li"]}>
                  <Link
                    onClick={turnOffFullscreenMenu}
                    activeClass="active"
                    to="location-anchor"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Location
                  </Link>
                </li>
                <li className={classes["fullscreen-nav--li"]}>
                  <Link
                    onClick={turnOffFullscreenMenu}
                    activeClass="active"
                    to="contact-anchor"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* -------- Desktop Hero Rating Box -------- */}
          <DesktopHeroRatingBox />

          {/* -------- Desktop Hero Description Box -------- */}
          <div className={classes["u--hero-description--position"]}>
            <DesktopHeroDescriptionBox />
          </div>

          {/* -------- Desktop Hero Testimonial Boxes -------- */}
          {heroTestimonialState === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              className={classes["u--hero-testimonial--position"]}
            >
              <DesktopHeroTestimonialBox
                imgSource="/img/testimonial-hero-1.jpg"
                review="Really great hostel that puts you right in the center of the sights, next to the train, buses, all of it. Solid bunk rooms though there’s a lot of stairs to get to them and they could use curtains, great private rooms if you book early enough to snag one at a nice price. Kitchen / community wasn't as strong but the staff rocks, the place is in the right spot, it's fantastic. "
                reviewer1="Victoria Gauld,"
                reviewer2="Backpacker"
                switchTestimonial={switchHeroTestimonialHandler}
              />
            </motion.div>
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
            <ButtonBookNow turnOnModal={turnOnBookingModalHandler} />
          </div>
        </motion.section>

        {/* ------------------------ */}
        {/* -- Description Section -- */}
        {/* ------------------------ */}
        <section className={classes["section-description"]}>
          <p className={classes["description-text"]}>
            We offer affordable, fun, safe accommodation for young backpackers
            and students, right along the River Thames.
          </p>
        </section>

        {/* ------------------------ */}
        {/* -- Testimonials 1 Section -- */}
        {/* ------------------------ */}

        <section className={classes["section-testimonials-1"]}>
          <div className={classes["testimonials-row"]}>
            <TestimonialNoArrow
              imgSource="/img/testimonial-hero-1.jpg"
              review="Really great hostel that puts you right in the center of the sights, next to the train, buses, all of it. Solid bunk rooms though there’s a lot of stairs to get to them and they could use curtains, great private rooms if you book early enough to snag one at a nice price. Kitchen / community wasn't as strong but the staff rocks, the place is in the right spot, it's fantastic. "
              reviewer1="Victoria Gauld,"
              reviewer2="Backpacker"
            />
            <TestimonialNoArrow
              imgSource="/img/testimonial-hero-2.jpg"
              review="The building itself is fantastic, a massive spiral staircase that leads quite nice dorms rooms. Bathrooms are clean with good showers. The staff are absolutely lovely, when I asked if I could extend they apologized profusely as they were fully booked and kept me updated in case anyone cancelled last minute. Towels are cheap to rent too. When I go back to London I am definitely staying again! "
              reviewer1="Kayleigh Parks,"
              reviewer2="Backpacker"
            />
            <TestimonialNoArrow
              imgSource="/img/testimonial-hero-3.jpg"
              review="I stayed here for 3 weeks over a month. The team does a great job of keeping the hostel clean, as the dining areas, kitchen and bathrooms were always spotless. There is a nice dining and chill out area. The kitchen is fully equipped with enough room for refrigerated and frozen items. The beds are comfortable and there are decent sized lockers in the rooms. "
              reviewer1="Andrew Holden,"
              reviewer2="Digital Nomad"
            />
          </div>
        </section>

        {/* ---------------- */}
        {/* -- Dorms Section -- */}
        {/* ---------------- */}
        <motion.section
          initial={{ x: "-100vw", opacity: 0 }}
          animate={dormsAnimate}
          whileInView={dormsAnimateHandler}
          className={classes["section-dorms"]}
        >
          <Element className={classes["dorms-heading"]} name="dorms-anchor">
            Dorms
          </Element>
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
        </motion.section>

        {/* ------------------------ */}
        {/* -- Facilities Section -- */}
        {/* ------------------------ */}
        <motion.section
          initial={{ x: 1000, opacity: 0 }}
          animate={facilitiesAnimate}
          whileInView={facilitiesAnimateHandler}
          className={classes["section-facilities"]}
        >
          <Element
            className={classes["facilities-heading"]}
            name="facilities-anchor"
          >
            Facilities
          </Element>
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
        </motion.section>

        {/* ------------------------ */}
        {/* -- Testimonials 2 Section -- */}
        {/* ------------------------ */}

        <motion.section
          initial={{ opacity: 0 }}
          animate={testimonialsAnimate}
          whileInView={testimonialsAnimateHandler}
          className={classes["section-testimonials-2"]}
        >
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
            <ButtonBookNow turnOnModal={turnOnBookingModalHandler} />
          </div>
        </motion.section>

        {/* ------------------------ */}
        {/* -- Gallery Section -- */}
        {/* ------------------------ */}

        <motion.section
          initial={{ x: "-100vh", opacity: 0 }}
          animate={galleryAnimate}
          whileInView={galleryAnimateHandler}
          className={classes["section-gallery"]}
        >
          <Element className={classes["gallery-heading"]} name="gallery-anchor">
            Gallery
          </Element>
          <div className={classes["gallery-grid-wrapper"]}>
            <img
              onClick={turnOnGalleryModalHandler1}
              src="/img/thumb/gal1.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-1"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler2}
              src="/img/thumb/gal2.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-2"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler3}
              src="/img/thumb/gal3.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-3"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler4}
              src="/img/thumb/gal4.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-4"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler5}
              src="/img/thumb/gal5.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-5"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler6}
              src="/img/thumb/gal6.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-6"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler7}
              src="/img/thumb/gal7.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-7"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler8}
              src="/img/thumb/gal8.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-8"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler9}
              src="/img/thumb/gal9.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-9"]}`}
            />

            <img
              onClick={turnOnGalleryModalHandler10}
              src="/img/thumb/gal10.jpg"
              alt="gallery image"
              className={`${classes["gallery-img"]} ${classes["gallery-img-10"]}`}
            />
          </div>
        </motion.section>

        {/* ------------------------ */}
        {/* -- Location Section -- */}
        {/* ------------------------ */}
        <motion.section
          initial={{ x: 1000, opacity: 0 }}
          animate={locationAnimate}
          whileInView={locationAnimateHandler}
          className={classes["section-location"]}
        >
          <Element
            className={classes["location-heading"]}
            name="location-anchor"
          >
            Location
          </Element>
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
            <ButtonBookNow turnOnModal={turnOnBookingModalHandler} />
          </div>
        </motion.section>

        {/* ------------------------ */}
        {/* -- Contact Section -- */}
        {/* ------------------------ */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={contactAnimate}
          whileInView={contactAnimateHandler}
          className={classes["section-contact"]}
        >
          <Element className={classes["contact-heading"]} name="contact-anchor">
            Contact
          </Element>
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
        </motion.section>

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
            <span
              className={classes["footer-icon"]}
              onClick={turnOnSocialModalHandler}
            >
              <BsFacebook />
            </span>
            <span
              className={classes["footer-icon"]}
              onClick={turnOnSocialModalHandler}
            >
              <BsInstagram />
            </span>
          </div>
        </footer>
      </div>

      {/* ------------------------ */}
      {/* -- Modal Gallery-------- */}
      {/* ------------------------ */}
      {galleryModalActive && (
        <React.Fragment>
          <div className={classes["modal-gallery-background"]}></div>
          <div className={classes["modal-gallery-wrapper"]}>
            <button
              className={classes["modal-gallery-arrow-button"]}
              onClick={prevModalImage}
            >
              <BiLeftArrow />
            </button>
            <div className={classes["modal-gallery-image-container"]}>
              <img
                className={classes["modal-gallery-image"]}
                src={"/img/fullscreen/gal" + currentModalImage + ".jpg"}
                alt="fullscreen"
              />
            </div>
            <button
              className={classes["modal-gallery-arrow-button"]}
              onClick={nextModalImage}
            >
              <BiRightArrow />
            </button>
          </div>

          <button
            className={classes["modal-gallery-close-button"]}
            onClick={turnOffGalleryModalHandler}
          >
            <AiOutlineClose />
          </button>
        </React.Fragment>
      )}

      {/* ------------------------ */}
      {/* -- Modal Social/Booking  */}
      {/* ------------------------ */}
      {socialBookingModalActive && (
        <React.Fragment>
          <div className={classes["modal-social-booking--background"]}></div>
          <div className={classes["modal-social-booking--content-wrapper"]}>
            <div className={classes["modal-social-booking--content-card"]}>
              <p className={classes["modal-social-booking--content-text"]}>
                {socialBookingMessage}
              </p>
              <button
                className={classes["modal-social-booking--content-close-btn"]}
                onClick={turnOffSocialModalHandler}
              >
                Close
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
