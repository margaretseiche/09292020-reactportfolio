import React from "react";
// import Hero from "../../components/Hero";
// import Container from "../../components/Container";
// import Row from "../../components/Row";
// import Col from "../../components/Col";
import "./style.css";

function About() {
  return (

    <main>
      <div class="container-fluid">

        <article class="Personal">
          <div class="row articleHeading">
            <div class="col-md-12"><h3>Personal</h3></div>
          </div>    
          
          <div class="row" id="feature">                
            <div class="col-md-4">    
              <img id="about-image" src="./assets/images/MargaretSeiche.JPG" class="float-left"
                  alt="Margaret has brown hair and eyeglasses." title="headshot of Margaret Seiche"/>                          
              <p>Experience leading remote teams for large-scale projects with overlapping deadlines</p>
            </div>

            <div class="col-md-4">
              <h4>New York City</h4>
              <ul>
                  <li id="list">3 years in sales</li>
                  <li id="list">Currently studying coding remotely</li>
              </ul>
            </div>            
                    
            <div class="col-md-4">
              <h4>10 years in China</h4>
              <ul>
                  <li id="list">2 years in conference management</li>
                  <li id="list">10 years in non-profit marketing and finance</li>
              </ul>
            </div>
                      
          </div>
        </article>

        <article class="Education">
          <div class="row articleHeading">
            <div class="col-md-12"><h3>Education</h3></div>
          </div>  
          <div class="row" id="feature">        
            <div class="col-md-4">
             
              <div class="row">
                  <h4>Coding Bootcamp</h4>
              </div>    
              <div class="row">   
                  <img id="about-image" src="./assets/images/ColumbiaEngineering.png" class="float-left"
                            alt="Columbia Engineering" title="Columbia Engineering"/>
                  <div>
                    <h6>COLUMBIA UNIVERSITY</h6>
                    <p>Certified in Javascript,</p> 
                    <p>Node, Express, API Queries,</p>  
                    <p>MySQL, React, and MongoDB</p>               
                  </div>               
              </div>  
          </div>
        
            <div class="col-md-4">
              <div class="row">
                <h4>MBA</h4>
              </div>
              <div class="row"> 
                <img id="about-image" src="./assets/images/ChicagoBooth——transparent.png" class="float-left"
                    alt="Chicago Booth MBA" title="Chicago Booth MBA"/>
                <div>      
                  <h6>UNIVERSITY OF CHICAGO</h6>              
                  <p>Finance and Accounting</p>
                </div>
              </div>
            </div>     

            <div class="col-md-4">
              <div class="row">
                <h4>Undergraduate</h4> 
              </div>
              <div class="row">         
                <img id="about-image" src="./assets/images/Middlebury——transparent.png"  class="float-left"
                          alt="crest of Middlebury College" title="crest of Middlebury College"/>
                <div>  
                  <h6>MIDDLEBURY COLLEGE</h6>   
                    <p>Bachelor of Arts,</p>
                    <p id="major">Intl. Politics & Economics</p>
                    <p>Study abroad in Japan</p>  
                </div>  
              </div>
            </div>
            </div>
             
        </article>
  
        <article class="experience">
          <div class="row articleHeading">
            <div class="col-md-12"><h3>Work Experience</h3></div>
          </div>  
          <div class="row" id="feature">        
            <div class="col-md-4">
             
              <div class="row">
                  <h4>Marketing</h4>
              </div>    
              <div class="row">      
                  <ul>
                      <li id="list">Launched websites on multiple platforms</li>
                      <li id="list">Certified in full-stack development</li>
                      <li id="list">5 years in direct sales</li>
                  </ul>                                         
              </div>  
          </div>
        
            <div class="col-md-4">
              <div class="row">
                <h4>Event Management</h4>
              </div>
              <div class="row"> 
                <ul>
                  <li id="list">Led 9 teams concurrently</li>
                  <li id="list">Expanded from 2 to 5 annual conferences</li>
                  <li id="list">Grew revenue while cutting fixed costs</li>
                </ul>   
              </div>
            </div>     

            <div class="col-md-4">
              <div class="row">
                <h4>Financial Analysis</h4> 
              </div>
              <div class="row">         
                <ul>
                  <li id="list">Developed event budgets and evaluation</li>
                  <li id="list">Standardized cash controls at a non-profit</li>
                  <li id="list">Analyzed contracts during restructuring</li>
              </ul>                
            </div>  
           </div>
         </div> 
        </article>

      </div>
    </main>

  );
}

export default About;