import { social } from "../constants";
import emailjs   from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message");
      });
  };


  return (
    <section id="contact" className="px-6 md:px-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div className="transition-all duration-800 opacity-100 translate-x-0">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold font-bebas text-gray-200 mb-6 uppercase">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Have a project idea, collaboration, or opportunity in mind? Feel
            free to reach out — I’d love to connect with you.
          </p>
          <div className="flex gap-5">
            {social.map((x) => (
              <a
                href={x.url}
                target="_blank"
                className="group relative w-11 h-11 lg:w-15 lg:h-15 flex items-center justify-center rounded-full bg-gray-400/10 backdrop-blur-xl border border-white/30 transition-all duration-300 hover:scale-110"
              >
                <span className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition"></span>
                <img src={x.link} alt={x.media} />
              </a>
            ))}
          </div>
        </div>
        <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
          <input
            placeholder="Enter Your Name"
            required
            className="peer w-full  px-4 py-5   rounded-2xl 
    bg-white/10 backdrop-blur-lg
    border border-white/30
    text-white outline-none
    focus:border-sky-400 transition"
            type="text"
            name="user_name"
          ></input>
          <input
            placeholder="Enter Your Email"
            required
            className="peer w-full  px-4 py-5   rounded-2xl 
    bg-white/10 backdrop-blur-lg
    border border-white/30
    text-white outline-none
    focus:border-sky-400 transition"
            type="email"
            name="user_email"
          ></input>
          <textarea
            name="message"
            className="peer w-full  px-4 py-5   rounded-2xl 
    bg-white/10 backdrop-blur-lg
    border border-white/30
    text-white outline-none
    focus:border-sky-400 transition"
            placeholder="Your Message"
            id=""
          ></textarea>
          <button
            
            type="submit"
            className="w-full h-full rounded-xl bg-white/70  p-4
              text-gray-900 font-semibold border
              border-gray-300/60
              transition-all duration-200 hover:translate-y-1  cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
