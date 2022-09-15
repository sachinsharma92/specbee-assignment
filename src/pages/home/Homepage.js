import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import ButtonPrimary from '../../components/buttonPrimary/ButtonPrimary';
import Floating from '../../components/floating/Floating';

// Images here
import bannerImage from "../../assets/images/banner.jpg";
import arrowDown from "../../assets/images/arrow-down.svg";
import arrowLong from "../../assets/images/long-arrow.svg";

import member1 from "../../assets/images/members/member1.png";
import member2 from "../../assets/images/members/member2.png";
import member3 from "../../assets/images/members/member3.png";


// Styles here
import "./styles.scss";

const teamMembers = [
  {
    imageUrl: member1
  },
  {
    imageUrl: member2
  },
  {
    imageUrl: member3
  },
  {
    imageUrl: member1
  },
  {
    imageUrl: member2
  },
  {
    imageUrl: member3
  }
]

export default function Homepage() {
  return (
    <div className='homepage-style'>
      <Header />

      <section className='hero-section'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="title1 theme-primary">Eleifend amet in amet.</h1>
              <p className="description">Lorem ipsum dolor consectetur elit. <br />
                Quam vel rhoncus facilisis ac lectus suspendisse
              </p>
              <img src={arrowDown} alt="" className='arrow-down' />
            </div>
          </div>
        </div>
      </section>

      <section className='image-banner-section' style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title1 theme-primary">Quam in auctor <br /> odio viverra</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='section-tortor'>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h3 className="title3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam vel rhoncus, nisl tellus ultricies facilisis ac suspendisse.</h3>
            </div>
            <div className="col-sm-5">
              <h2 className="title1 theme-primary">Tortor arcu, ornare risus.</h2>
            </div>
          </div>
        </div>

        <div className="button-arrow-section">
          <img src={arrowLong} alt="" className='arrow-long' />
          <ButtonPrimary title="Join today" iconRight />
        </div>
      </section>

      <section className='six-million-section'>x
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="title1 title-lg theme-primary">6 million</h2>
              <h2 className="title1 para-style">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
          </div>
        </div>
      </section>

      <section className='image-groups-section'>
        <div className="scroll-section no-scrollbar">
          {teamMembers.map((item, index) => (
            <div key={index}>
              <div className="member-image">
                <img src={item.imageUrl} alt="" className='mamber-img' />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='consectetur-section'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam vel rhoncus,tellus ultricies facilisis ac lectus suspendisse. <span>Tortor arcu ornare ut nec risus, id libero auctor id.</span> Nulla est vestibulum elementum bibendum facilisis pellentesque integer. </p>
            </div>
            <div className="col-sm-6">
              <h2 className="title1 theme-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
          </div>
        </div>
      </section>

      <Floating/>

      <Footer />
    </div>
  )
}
