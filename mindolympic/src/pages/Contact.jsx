import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer'

const Contact = () => {
  return (
    <>
        <Navbar />
            <div>
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <button type="submit">Send</button>
                </form>
            </div>
        <Footer />
    </>
  )
}

export default Contact