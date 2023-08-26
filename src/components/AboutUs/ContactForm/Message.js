import { Button, Grid, Input } from "@mui/material";
import axios from "axios";
import React from "react";

const Message = () => {
  const handleSubmit = () => {
    axios.post(``);
  };
  return (
    <div>
      <div className="grid justify-center text-3xl leading-10 font-semibold tracking-normal capitalize mb-4">
        Send us a Message
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={4}>
          <Input className="mb-2" id="name" placeholder="Your Name" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input className="mb-2" id="email" placeholder="Your e-mail" />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={8}>
          <Input className="mb-2" id="sub" fullWidth placeholder="Subject" />
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={8}>
          <Input
            className="mb-2"
            fullWidth
            multiline
            minRows={3}
            id="msg"
            placeholder="Message"
          />
        </Grid>
        <Button
          onClick={handleSubmit}
          sx={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "3px",
            backgroundColor: "#b08e3d",
            color: "white",
            transition:
              "background-color .2s ease-in-out, color .2s ease-in-out",
            width: "25%",
            "&:hover": {
              color: "#b08e3d",
              backgroundColor: "transparent",
            },
            ml: "50%",
            mt: "50px",
          }}
        >
          Send message
        </Button>
      </Grid>
    </div>
  );
};

export default Message;
