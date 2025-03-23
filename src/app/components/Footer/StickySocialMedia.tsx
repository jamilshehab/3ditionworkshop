import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const StickySocialMedia = () => {
  return (
    <div className="s-soft">
      {/* <Link
        href="https://www.facebook.com/"
        className="s-item facebook"
        target="blank"
        rel="nofollow"
      >
        <span>
          <FaFacebook />
        </span>
      </Link> */}
      <Link
        href="https://www.tiktok.com/@3dition_workshop?_t=ZS-8uvQ8eY3Hqa&_r=1"
        className="s-item twitter"
        target="blank"
        rel="nofollow"
      >
        <span>
          <FaTiktok />
        </span>
      </Link>
      <Link
        href="https://www.instagram.com/3dition_workshop/"
        className="s-item instagram"
        target="blank"
        rel="nofollow"
      >
        <span>
          <FaInstagram />
        </span>
      </Link>
      {/* <Link
        href="https://www.linkedin.com/"
        className="s-item linkedin"
        target="blank"
        rel="nofollow"
      >
        <span>
          <FaWhatsapp />
        </span>
      </Link> */}
    </div>
  );
};

export default StickySocialMedia;
