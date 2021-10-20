import React from 'react';
import Card1Pic from '../../images/calendontsh.png'
import Card2Pic from '../../images/dpscreen.png'
import Card3Pic from '../../images/pwscreen.png'

export default function Portfolio() {
  return (
    <article id="portfolio" class="portfolio container shadow p-3 mb-3 rounded">
            <h3 class="text-center">Portfolio</h3>
            <div class="row justify-content-center">
                <div class="col text-center">
                    <div class="card shadow p-3 mb-3 rounded text-center" style={{width: '18rem'}}>
                        <a class="portfolio" href="https://pacific-badlands-48977.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={Card1Pic} class="card-img-top" alt="screenshot of Calendont" />
                            <div class="card-body">
                                <p class="card-text text-center">A project that can help you make and cancel plans!</p>
                            </div>
                        </a>
                    </div>
                </div>  
                <div class="col text-center">
                    <div class="card shadow p-3 mb-3 rounded" style={{width: '18rem'}}>
                        <a class="portfolio" href="https://rjr2.github.io/dayplanner/" target="_blank" rel="noopener noreferrer">
                            <img src={Card2Pic} class="card-img-top" alt="Screenshot of day planner" />
                            <div class="card-body">
                                <p class="card-text text-center">A simple dayplanner that uses local storage!</p>
                            </div>
                        </a>
                    </div>
                </div>  
                <div class="col text-center">
                    <div class="card shadow p-3 mb-3 rounded" style={{width: '18rem'}}>
                        <a class="portfolio" href="https://rjr2.github.io/PasswordGenerator/" target="_blank" rel="noopener noreferrer">
                            <img src={Card3Pic} class="card-img-top" alt="Screenshot of password generator" />
                            <div class="card-body">
                                <p class="card-text text-center">A password generator for when you need to be extra secure.</p>
                            </div>
                        </a>
                    </div>
                </div>  
            </div>
        </article>
  );
}
