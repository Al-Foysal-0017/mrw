import React, { useRef, useState } from "react";
import styles from "../../styles/contact.module.css";
import mailIcon from "../../assets/contact/mail-icon.png";
import CustomInput from "../../components/common/CustomInput";
import { useMediaQuery } from "@mui/material";
import Container from "../../components/container/Container";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "./contact.css";

const Contact = () => {
  const is768 = useMediaQuery("(max-width:768px)");
  // const is425 = useMediaQuery("(max-width:425px)");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    content: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef<any>();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, email, phone, subject, content } = formData;

    if (!email || !firstName || !lastName || !phone || !subject || !content) {
      toast.error("Please fill all fields.");
      setLoading(false);
    }

    if (email && firstName && lastName && phone && subject && content) {
      emailjs
        .sendForm(
          "service_9kl6uzy",
          "template_pphp2fw",
          form.current,
          "XenK0tR8wFwth0Hr2"
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!");
            setLoading(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              subject: "",
              content: "",
            });
          },
          (error) => {
            setLoading(false);
            toast.error("Something went wrong! Try again.");
          }
        );
    }
  };

  return (
    <Container
      className={`contactFormContainer ${styles.section} ${styles.gradient_box}`}
    >
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#000000d1",
            border: "2px solid #064EFD",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div
        style={{ width: 250, textAlign: "center", padding: "4rem 0 2rem 0" }}
      >
        <h1 className={styles.title}>Contact US</h1>
        <hr className={styles.border_bottom} />
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: is768 ? "column" : "row",
          justifyContent: "center",
          width: "100%",
          padding: "40px 0",
        }}
      >
        <aside
          style={{
            width: is768 ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: is768 ? "100px" : 0,
          }}
        >
          <img src={mailIcon} alt="mailIcon" />
        </aside>

        <aside style={{ width: is768 ? "100%" : "50%" }}>
          {/* <Form /> */}
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CustomInput
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <div style={{ margin: "0 8px" }} />
              <CustomInput
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <CustomInput
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <CustomInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <CustomInput
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <div style={{ marginBottom: "20px" }}>
              <label className={styles.input_label} htmlFor="content">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className={styles.input}
                style={{ height: 100, padding: "8px" }}
              />
            </div>
            <button type="submit" className={styles.submit_btn}>
              {loading ? "Loading..." : "SUBMIT"}
            </button>
          </form>
        </aside>
      </section>
    </Container>
  );
};

export default Contact;
