import React from "react";
import { Typography } from '@material-tailwind/react';
import { Input, Button } from "@material-tailwind/react";

const Banner = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <div className="h-[450px] border border-green-600 flex flex-col justify-center items-center relative">
            <div className="absolute bg-[url('/images/bg.png')] inset-0 bg-no-repeat bg-center bg-cover object-fit opacity-10"></div>
            <Typography className="mb-4" variant="h2">I Grow By Helping People In Need</Typography>

            <div className="relative flex w-full max-w-[24rem]">
        <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
        />
        <Button
        size="sm"
        color={email ? "gray" : "red"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
        </div>
    </div>
    );
};

export default Banner;