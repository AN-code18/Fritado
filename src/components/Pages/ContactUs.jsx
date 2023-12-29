import ContactDetails from "../core/ContactUs/ContactDetails";
import ContactUsForm from "../core/ContactUs/ContactUsForm";
import Footer from "../common/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[#f6f3ef] relative mx-auto flex w-11/12 max-w-maxContent flex-col  w-full text-center  text-stone-900">
        <header className="text-4xl mx-auto pt-20 font-semibold lg:w-[70%]">
          Contact us
          <p className="mx-auto mt-4 text-center text-lg font-medium text-gray-800 lg:w-[95%]">
            Home / Contact Us
          </p>
        </header>

        <div className="sm:h-[70px] lg:h-[150px]"></div>
      </div>

      <p className="text-xl font-medium text-stone-900 tracking-wider leading-4 font-medium mt-14">
        Let's discuss
      </p>
      <h1 className="text-4xl font-semibold leading-[1.182em] text-stone-900  ">
        Whatever question you have, please feel free to ask.
      </h1>

      <div className="mx-auto w-11/12 max-w-maxContent flex flex-col justify-between gap-10 lg:flex-row mt-14 mb-20 ">
        {/**contact form */}
        <div className="lg:w-[57%]">
          <div
            
            className="text-richblack-300  lg:p-10 flex flex-col gap-2 "
          >
            <h3 className="text-3xl leading-6 font-semibold text-richblack-5 text-left">
              Write US
            </h3>

            <div className="mt-7 ">
              <ContactUsForm />
            </div>
          </div>
        </div>

        {/**contact details */}
        <div className="lg:w-[43%] mt-7 ">
          <ContactDetails />
        </div>
      </div>

      {/*<!-- Start Map Area -->*/}

      <div className="">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.17719124099!2d77.58668581113459!3d12.914331543311858!2m3!1f0!2f0!3f0!
      3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1504b9c7cf71%3A0x282db70bdaa95a8a!2sFritado%20Technologies%20Private%20
      Limited!5e0!3m2!1sen!2sin!4v1703828458866!5m2!1sen!2sin" className="w-full h-[450px]">
       </iframe>
      </div>

      
    </div>
  );
};

export default ContactUs;
