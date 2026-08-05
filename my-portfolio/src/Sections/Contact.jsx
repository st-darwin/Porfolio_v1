import React, { useRef, useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading , setLoading] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setLoading(true)
    try{
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
       setFormData({ name: "", email: "", message: "" });
    }
    catch(err){
        console.log("email js error :" , err)
    }
    finally{
      setLoading(false)
    }
    // Logic to clear form after submit
   
    alert("Message sent successfully!"); 
  };

  return (
    <section id='contact' className='flex-center section-padding mt-25'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          sub="❤️ Have Quetions or Ideas? Lets Talk 🚀"
          title="Get In Touch - Let's Connect"
        />
        
        <div className='justify-around mt-16 grid-12-cols'>
          {/* Contact form at the left side */}
          <div className='xl:col-span-5'>
            <div className='flex-center card-border rounded-xl p-10'>
              <form ref={formRef} className='w-full flex flex-col gap-7' onSubmit={handleSubmit}>
                
                <div>
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    name='name'
                    id='name' // Unique ID
                    placeholder='Your name:'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email"
                    name='email'
                    id='email' // Changed from 'name' to 'email'
                    placeholder='Enter your Email:'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea 
                    name="message"
                    id="message"
                    rows="5"
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={loading} className="group">
                  <div className='cta-button hover:scale-103 active:scale-90 duration-700'>
                    <div className='bg-circle' />
                    <p className='text font-[450] text-[0.9rem]'>{loading ? "Sending...🚀" : "Send A Message"}</p>
                    <div className='arrow-wrapper'>
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

              </form> 
            </div>
          </div>

          {/* Right side decoration */}
          <div className='xl:col-span-7 min-h-96'>
            <div>
              <img 
                className='md:ml-20 mt-1 object-cover  md:w-150 w-90 md:h-150 rounded-full' 
                src="/images/bubble.png" 
                alt="contact illustration" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;