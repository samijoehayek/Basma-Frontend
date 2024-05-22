"use client";
import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" className="px-4">
      <Toolbar className="container mx-auto flex justify-between items-center text-sm">
        <div className="text-gray-800 w-1/3 text-left">
          <Link href="/">
            <Typography
              variant="h5"
              component="div"
              style={{ fontFamily: "Modena" }}
            >
              Logo
            </Typography>
          </Link>
        </div>
        <div className="text-gray-800 w-1/3 text-center">
          <Link href="/book-now">
            <Button color="inherit" style={{ fontFamily: "Modena" }}>
              Book now
            </Button>
          </Link>
        </div>
        <div className="text-gray-800 w-1/3 text-right">
          <Link href="/services">
            <Button color="inherit" style={{ fontFamily: "Modena" }}>
              Services
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
