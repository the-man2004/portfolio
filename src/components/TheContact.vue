<template>
  <section id="contact" :class="store.modeClass">
    <div>
      <h2>CONTACT</h2>
      <p id="intro">
        If you are interested in offering me a job opertunity then feel free to
        contact me
      </p>
    </div>
    <div id="form-container">
      <form action="https://formspree.io/f/xrgnkbpb" method="POST">
        <div>
          <label for="name">Your Name</label>
          <input
            :class="store.modeClass"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Full Name"
            required
          />
        </div>
        <div>
          <label for="email">Your email</label>
          <input
            :class="store.modeClass"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <label for="message">Your message</label>
          <textarea
            :class="store.modeClass"
            name="message"
            id="message"
            placeholder="Enter A Message"
            required
          ></textarea>
        </div>
        <button id="submit-btn" type="submit">SUBMIT</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "../store/index";

const store = useStore();
</script>

<style scoped>
#contact {
  padding: 30px;
  scroll-margin: 68.69px;
  transition: background-color 250ms ease;
}

#contact h2 {
  margin: 15px 0 30px 0;
  text-align: center;
}
#contact h2::after {
  content: "";
  margin: 0 auto;
  display: block;
  height: 5px;
  width: 45px;
  border-radius: 100px;
  background: var(--accent-color);
  transform: translateY(10px);
}

#contact p {
  text-align: center;
  padding: 0 30px;
}

/* Form styles */
#form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;
}

#form-container form {
  margin: 0 15px;
  width: 100%;
  max-width: 750px;
}

#form-container div {
  display: flex;
  flex-direction: column;
  margin: 30px 0;
}

#form-container label {
  margin-bottom: 15px;
  font-weight: 500;
}

#form-container input,
#form-container textarea {
  padding: 15px;
  outline: 1px solid;
  border: none;
  border-radius: 5px;
  transition: background-color 250ms ease, box-shadow 250ms ease;
}

#form-container textarea {
  height: 250px;
  resize: none;
}

#form-container input:hover,
#form-container input:focus,
#form-container textarea:hover,
#form-container textarea:focus {
  box-shadow: 1px 1px 15px var(--accent-color);
}

/* Button */
#submit-btn {
  display: inline-block;
  padding: 7.5px 15px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  background: var(--accent-color);
  color: var(--light-color);
  cursor: pointer;

  transition: all 250ms ease;
}
#submit-btn:hover,
#submit-btn:focus {
  box-shadow: 1px 1px 15px var(--accent-color);
  transform: translateY(-5px);
}

@media (min-width: 750px) {
  #contact h2 {
    font-size: 2.5rem;
  }

  #contact p {
    font-size: 1.5rem;
  }

  #form-container label {
    font-size: 1.5rem;
  }

  #submit-btn {
    padding: 15px 30px;
    font-size: 1.5rem;
  }
}
</style>
