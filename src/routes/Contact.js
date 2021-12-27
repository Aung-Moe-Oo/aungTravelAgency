import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Get in touch</h1>
        <form action="" className={styles.form}>
          <input type="text" className={styles.inputS} placeholder="Username" />
          <input type="number" className={styles.inputS} placeholder="Phone" />
          <input type="email" className={styles.inputL} placeholder="Email" />
          <textarea
            name=""
            className={styles.textarea}
            placeholder="Messages"
            rows={6}
          ></textarea>
          <button className={styles.button}>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
