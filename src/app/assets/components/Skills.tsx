import Image from "next/image";
import "../css/Skills.css";
import pythonImage from "../svg/Python.svg";
import cplusImage from "../svg/C++.svg";
import HtmlImage from "../svg/Html.svg";
import cssImage from "../svg/Css.svg";
import javaScriptImage from "../svg/JavaScript.svg";
import NodeJsImage from "../svg/NodeJs.svg";
import expressImage from "../svg/Express.svg";
import ReactImage from "../svg/ReactJs.svg";
import visualStudioCodeImage from "../svg/VisualStudioCode.svg";
import githubImage from "../svg/Github.svg";
import nextjsImage from "../svg/NextJs.svg";
export default function Skills() {
    return (
        <div className="skillsSection">
            <h1 className="skillsTitle">Skills</h1>
            <div>
                <Image src={pythonImage} alt="" height={60} className="skillsIcon"/>
                <Image src={cplusImage} alt="" height={60} className="skillsIcon"/>
                <Image src={HtmlImage} alt="" height={60} className="skillsIcon"/>
                <Image src={cssImage} alt="" height={60} className="skillsIcon"/>
                <Image src={javaScriptImage} alt="" height={60} className="skillsIcon"/>
                <Image src={NodeJsImage} alt="" height={60} className="skillsIcon"/>
                <Image src={expressImage} alt="" height={60} className="skillsIcon"/>
                <Image src={ReactImage} alt="" height={60} className="skillsIcon"/>
                <Image src={nextjsImage} alt="" height={60} className="skillsIcon"/>
                <Image src={visualStudioCodeImage} alt="" height={60} className="skillsIcon"/>
                <Image src={githubImage} alt="" height={60} className="skillsIcon"/>
            </div>
        </div>
    )
}