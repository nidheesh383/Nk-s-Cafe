import { Grid } from "@mui/material";
import React from "react";
import Address from "./Address";
import Message from "./Message";
import Welcome from "./Welcome";

const ContactForm = () => {
  return (
    <div>
      <h2 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal mb-16 capitalize">
        Stay in touch with us
      </h2>
      <Grid container spacing={3} sx={{ px: "5%" }}>
        <Grid item xs={12} md={3}>
          <Address />
        </Grid>
        <Grid item xs={12} md={6}>
          <Message />
        </Grid>
        <Grid item xs={12} md={3}>
          <Welcome />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
