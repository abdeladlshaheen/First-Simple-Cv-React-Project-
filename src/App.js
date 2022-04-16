import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from './components/heroComponent.js';
import About from './components/aboutComponent.js';
import Skills from './components/skillsComponent.js';
import Portofolio from './components/portofolioComponent.js';
import Footer from './components/footerComponent.js';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      userData: 
        {
          userName : "Abdeladl Mounir",
          age : 23,
          university : "Zagazig university",
          faculty : "information and technology",
          department : "Computer Science",
          grade : "Very Good",
          graduationProject:"Hand reabilitation (healthCare)",
          graduationProjectGrade : "Excellent",
          graduationYear : `${2020} - ${2021}`,
          nowdayWork : "Trainee at information technology institute ITI"
        }
    } 
  }
    render() {
      return (
      <div className="App container-fluid">
          <Hero data={this.state.userData} />
          <About data = {this.state.userData} />
          <Skills />
          <Portofolio />
          <Footer />
      </div>
      )
    }
     
  }



export default App;
