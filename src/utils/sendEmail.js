import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
        toast.success("Message Sent Successfully!", {
          icon: "🎉",
          style: {
            backgroundColor: "#FFF8F5",
            color: "#333",
            border: "1px solid #EB662B",
            borderLeft: "4px solid #EB662B",
          },
        });
      },
      (error) => {
        console.log(error.text);
        toast.error("Failed to send message. Please try again.", {
          icon: "❌",
          style: {
            backgroundColor: "#FFF8F5",
            color: "#333",
            border: "1px solid #EB662B",
            borderLeft: "4px solid #EB662B",
          },
        });
      }
    );

  e.target.reset();
};

export const sendBookingEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2e5ixcc",
      "template_0e0ozau",
      e.target,
      "9bU-0lLBRqQqM6o2W"
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success("Booking Request Submitted Successfully!", {
          icon: "✈️",
          style: {
            backgroundColor: "#FFF8F5",
            color: "#333",
            border: "1px solid #EB662B",
            borderLeft: "4px solid #EB662B",
          },
        });
      },
      (error) => {
        console.log(error.text);
        toast.error(
          "Failed to submit booking request. Please try again later.",
          {
            icon: "❌",
            style: {
              backgroundColor: "#FFF8F5",
              color: "#333",
              border: "1px solid #EB662B",
              borderLeft: "4px solid #EB662B",
            },
          }
        );
      }
    );

  e.target.reset();
};
