/* eslint-disable jsx-a11y/alt-text, jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Numbers from '../numbres/Numbers'
import Header from '../header/Header'
import PrideImg from '../../assets/1.png'
import Cars1 from '../../assets/cars1.jpg'
import Cars2 from '../../assets/cars2.jpg'
import './home.css'
import ingridients from '../../assets/2.png'
import Carousel from 'react-bootstrap/Carousel';
import Foods from '../foods/Foods'
import Swal from 'sweetalert2'




export default function Home() {


  const [email, setEmail] = useState('');
  const subButton = (e) => {
    e.preventDefault();
    if (email.trim().length <= 0) {
      Swal.fire(
        'Sorry',
        'Please put your email !!',
        'error'
      )
    } else {
      Swal.fire(
        'Wonderful',
        'Thanks for joining!',
        'success'
      )
      setEmail('');
    }

  }

  return (
    <>
      <Header />
      <Numbers />
      <section className='pride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={PrideImg} title='image'></img>
            </div>
            <div className='col-md-6'>
              <h2>
                We pride ourselves on making real food from the best ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <button><a href='#'>Learn more</a></button>
            </div>
          </div>
        </div>
      </section>

      <section className='ingredients'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Etiam sed dolor ac diam volutpat.</li>
                <li><i className="bi bi-check-circle"></i> Erat volutpat aliquet imperdiet.</li>
                <li><i className="bi bi-check-circle"></i> purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a href='#'>Learn more</a>
              </button>
            </div>
            <div className='col-md-6'>
              <img src={ingridients} alt='ingredients' />
            </div>
          </div>
        </div>
      </section>

      <section className='paralex'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>When a man's stomach is full it makes no <br />difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <a href='#'>Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>


      <Foods />


      <section className='sliderx' id='review'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <Carousel>
                <Carousel.Item>
                  <img
                    src={Cars1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Cars2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className='FAQ' id='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 mb-5'>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
              <h5>~ Is Foodera Bread really baked fresh each day?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-lg-6 col-md-6 mb-5'>
              <h5>~ Do you bake breads containing animal fats or products?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-lg-6 col-md-6'>
              <h5>~ Can I order your products online?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className='col-lg-6 col-md-6'>
              <h5>~ When are you opening a shop near me?</h5>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="parallax-content parallax text-center" data-stellar-background-ratio="0.4" style={{ backgroundPosition: '0px 38.7063px' }}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div className="col-md-4">
              <a href="#" className="btn btn-lg btn-primary pull-left">Learn More <i className="icon-arrow-right" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Subscribe newsletter */}

      <section >
        <div className="container text-center newsletter  mt-5">
          <div className="col-md-12">
            <h1>Hurry up! Subscribe our newsletter <br /> and get<span> 25% Off</span></h1>
            <p>Limited time offer for this month. No credit card required.</p>

            <form>
              <div className="row justify-content-md-center mt-5">
                <div className="form-group col-md-6 ">
                  <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email" />
                </div>
                <div className="form-group col-md-2">
                  <a className="btn btn-primary" onClick={subButton} type="submit">Subscribe</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section Footer */}

      <footer className="footer2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footerP text-center">
              <a href="#">Register</a>
              <a href="#">Forum</a>
              <a href="#">Affiliate</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-social">
              <a href="#" ><i className="bi bi-facebook"></i></a>
              <a href="#" ><i className="bi bi-twitter"></i></a>
              <a href="#"  ><i className="bi bi-youtube"></i></a>
              <a href="#" ><i className="bi bi-dribbble"></i></a>
              <a href="#" ><i className="bi bi-linkedin"></i></a>
              <a href="#" ><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copy">
        <div className="container">
          © 2022. HASSEN KHROUF. All rights reserved.
        </div>
      </div>
    </>
  )
}
