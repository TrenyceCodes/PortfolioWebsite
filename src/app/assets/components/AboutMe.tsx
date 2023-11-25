import Link from "next/link";
import Image from "next/image";
import "../css/AboutMeSection.css";
import instagramIcon from "../svg/instagram.svg";
import githubIcon from "../svg/GithubLink.svg";
import profileImage from "../svg/profileImage.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function AboutMe() {
    return (
        <div className="section">
            <div className="aboutMeInformation">
                <h3 className="greeting">Hey</h3>
                <p className="description">I'm TreNyce Price</p>
                <p className="secondaryTitle">Inspiring Software Engineer</p>
                <Link href="https://www.instagram.com/trenycecodes._/"><FontAwesomeIcon icon={faInstagram}  className="instagramIcon"/></Link>
                <Link href="https://github.com/TrenyceCodes"><FontAwesomeIcon icon={faGithub} className="githubIcon"/></Link>
            </div>
            <Image className="profileImage" src={profileImage} alt="Profile Image" height={546}/>
        </div>
    )
}