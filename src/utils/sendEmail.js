import emailjs from "@emailjs/browser";

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2e5ixcc",
      "template_crvft37",
      e.target,
      "9bU-0lLBRqQqM6o2W"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message Sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message.");
      }
    );

  e.target.reset();
};
