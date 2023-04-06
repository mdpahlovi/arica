import ContactCard from "@/components/Contact/ContactCard";
import { BsHeadset, BsBugFill } from "react-icons/bs";
import { FaCommentsDollar, FaNewspaper } from "react-icons/fa";

const contact_data = [
    { title: "Technical support", email: "support@epaq.com", number: "+1 234-567-89", icon: <BsHeadset /> },
    { title: "Sales questions", email: "sales@epaq.com", number: "+1 234-567-89", icon: <FaCommentsDollar /> },
    { title: "Press", email: "press@epaq.com", number: "+1 234-567-89", icon: <FaNewspaper /> },
    { title: "Bug report", email: "bug@epaq.com", number: "+1 234-567-89", icon: <BsBugFill /> },
];

const Contact = () => {
    return (
        <section className="container py-16 space-y-6">
            <h1 className="text-center">Contact Us</h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                We use an agile approach to test assumptions and connect with the needs of your audience early and often.
            </p>
            <div className="space-y-10">
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {contact_data.map((contact, idx) => (
                        <ContactCard key={idx} contact={contact} />
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <form className="flex flex-col gap-4">
                        <div className="grid xs:grid-cols-2 gap-4">
                            <input type="text" name="fastName" placeholder="Fast Name" />
                            <input type="text" name="lastName" placeholder="Last Name" />
                        </div>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="subject" placeholder="Subject" required />
                        <textarea name="message" rows={4} placeholder="Message"></textarea>
                        <button type="submit" className="button primary justify-center">
                            Send Message
                        </button>
                    </form>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1787.9082330156946!2d90.3511583705549!3d22.706089471679952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375534237f5c2317%3A0x2fe3eeb3b267da3c!2sShahid%20Abdur%20Rab%20Serniabat%20Textile%20Engineering%20College!5e0!3m2!1sen!2sbd!4v1680776539767!5m2!1sen!2sbd"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-lg min-h-[22rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
