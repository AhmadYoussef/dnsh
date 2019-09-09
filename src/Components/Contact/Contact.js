import React from 'react';
import classes from './Contact.module.scss';
import FormContact from '../../Container/FormContact/FormContact';

const Contact =  () =>{
    return(
        <main className={classes.contact}>
            <section className={classes.contactText}>
                <article>
                    <h1>Kontaktieren Sie uns</h1>
                    <p><small>Halsbrückerstraße 34, 09599 Freiberg</small></p>
                    <a href="/"><small>info@dnsh-trading.com</small></a>
                    <p>+49 (0) 123 456 78</p>
                </article>
                <article className={classes.contactForm}>
                <FormContact />
                </article>
            </section>
            <div>
                <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.5225804643587!2d13.344833750947132!3d50.93254797944436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a7601b8c41eaf5%3A0x4e2619ae310a5162!2sHalsbr%C3%BCcker+Str.34%2C+09599+Freiberg!5e0!3m2!1sen!2sde!4v1545301012445"
                    width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            </div>
        </main>
    );
}

export default Contact;