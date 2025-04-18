import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Define cn function locally
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-soft-blue/10 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-foreground/70">
                      khadyottakale@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-foreground/70">+91 9325255498</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-foreground/70">Pune, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/khadyot-takale-588005200/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {/* LinkedIn SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>

                  <a
                    href="https://github.com/KhadyotTakale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {/* GitHub SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7 
                        A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                        2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 
                        5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 
                        0 0 0 3 9.52c0 5.42 3.3 6.61 
                        6.44 7A3.37 3.37 0 0 0 8.5 
                        19V22"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-muted rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-muted rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="border border-muted rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>

              <button
                type="submit"
                className={cn(
                  "inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors"
                )}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
