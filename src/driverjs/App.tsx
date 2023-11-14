import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import imag1 from '../assets/EAQhHu5.gif';

const mainContent =<div>
       <nav className="navbar border-2 cursor-pointer flex justify-between px-5 py-2 border-blue-800 text-white bg-blue-800 ">
         <h1 className="font-bold uppercase">Faizan</h1>
         <ul className="flex gap-5 sm:gap-16">
           <li className="hover:text-blue-500">Home</li>
           <li className="hover:text-blue-500">Contact</li>
           <li className="hover:text-blue-500">Profile</li>
         </ul>
         <button className="join border-2 px-3 rounded-lg border-blue-600 uppercase font-bold hover:bg-blue-600 hover:text-white hover:border-black">Join</button>
       </nav>
       <section className='home'>
         <div className="h-[95vh]  flex justify-center items-center font-bold text-2xl bg-blue-300">Home Page </div>
       </section>
       <section className='contact'>
         <div className="h-[95vh]  flex justify-center items-center font-bold text-2xl bg-blue-500">Contact Page </div>
       </section>
       <section className='profile'>
         <div className="h-[100vh]  flex justify-center items-center font-bold text-2xl bg-blue-800">Profile Page </div>
       </section>
       <footer className='footer'>
         <ul className="flex justify-evenly bg-blue-500 p-5 uppercase text-white">
           <li className="fot1 cursor-pointer hover:text-black">About us</li>
           <li className="fot2 cursor-pointer hover:text-black">Contact</li>
           <li className="fot3 cursor-pointer hover:text-black">Feedback</li>
           <li className="fot4 cursor-pointer hover:text-black">Join Us</li>
         </ul>
       </footer>
    </div>


function DriverApp() {
  // Check if the tour has been completed
  const tourCompleted = localStorage.getItem('tourCompleted');

  // If the tour has already been completed, do not show it
  if (tourCompleted) {
    return (
      <div>
        {mainContent}
      </div>
    );
  }

  const driverObj = driver({
    showProgress: true,
    allowClose: false,
    popoverClass: 'driver-js-theme',
    steps: [
            {
        element:'.home',popover:{
          title:'HomePage',description:'it is a home page'
        }},
      {
        element:'.contact',popover:{
          title:'Contact Page',description:'it is a contact page'
        }},
      {
        element:'.profile',popover:{
          title:'Profile Page',description:'it is a profile page'
        }},
      {
        element:'.footer',popover:{
          title:'Footer Page',description:'it is a footer page'
        }},
      {
        element:'.fot1',popover:{
          title:'Footer Child',description:'it is a footer child'
        }},
      {
        element:'.fot2',popover:{
          title:'Footer child',description:'it is a footer child'
        }},
      {
        element:'.fot3',popover:{
          title:'Footer Child',description:'it is a footer child'
        }},
      {
        element:'.fot4',popover:{
          title:'Footer Child',description:'it is a footer child'
        }},
      {
        element:'.join',popover:{
          title:'Join',
          // description:'hope you like our Webapp . dont forge to join our channel'
          description:`<img src=${imag1} alt='no img found' style='height: 202.5px; width: 270px;' /><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Do join this super clan?</span>`
        }},
    ],
  });

  // Callback function to mark the tour as completed
  const handleTourComplete = () => {
    localStorage.setItem('tourCompleted', 'true');
  };

  // If the tour has not been completed, show the tour
  driverObj.drive()
  handleTourComplete();

  return (
    {mainContent}
  );
}

export default DriverApp;
