import { useState, useEffect } from "react";
import data from "../utils/Data.js";
import OrbitGraphic from "./OrbitGraphic.jsx";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Mail,Download } from "lucide-react";
import profilePic from "../assets/profileP.jpg";
import resume from "../assets/resume.pdf";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer"
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentRole(fullText.substring(0, currentRole.length - 1));
      } else {
        setCurrentRole(fullText.substring(0, currentRole.length + 1));
      }

      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, loopNum, roles]);

  const [typed, setTyped] = useState("");
  const full = data.name;
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 24px 80px", maxWidth: 1100, margin: "0 auto",
    }}>
      <div style={{margin:"auto"}} className="max-w-6xl   w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
      <div style={{ maxWidth: 760 }}>
         
         <div className="font-mono text-sm text-sky-400 mb-6 tracking-[0.12em] flex items-center gap-2">
            <span className="w-8 h-[1px] bg-sky-400 inline-block"></span> HELLO, I AM
          </div>
          
          <h1  style={{ marginBottom: "16px"}}className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-200 mb-4 font-sans">
            {data.name}
          </h1>
         <h2 style={{marginBottom:"24px"}}  className="text-2xl sm:text-3xl font-medium text-slate-400 mb-6 h-10 flex items-center">
            A passionate&nbsp;
            <span className="text-sky-400 font-semibold inline-block">
              {currentRole}
              <span className="animate-[blink_1s_step-end_infinite] text-sky-400">|</span>
            </span>
          </h2>
        <p  style={{margin:"0 0 40px"}} className="text-base sm:text-lg text-slate-400/80 leading-relaxed max-w-lg mb-10">
            {data.tagline}
          </p>
      <div className="flex flex-wrap gap-4">
            <a href="#contact" style={{padding: "12px 24px"}} className="inline-flex shadow-sm shadow-sky-400 items-center gap-2 px-7 py-3 rounded-lg bg-sky-400 text-[#08090e] font-mono text-sm font-bold tracking-[0.06em] hover:bg-sky-300 transition-colors">
              <Mail size={18} /> CONTACT ME
            </a>
            <a href={resume} download="Vivek_Kumar_Resume.pdf" style={{padding:"12px 24px" }} className="inline-flex shadow shadow-sky-400/20 items-center gap-2 py-3 rounded-lg bg-sky-400/10 border border-sky-400/30 text-sky-400 font-mono text-sm font-bold tracking-[0.06em] hover:bg-sky-400/20 transition-colors">
              <Download size={18} /> RESUME
            </a>
            <div className="flex gap-4 ml-0 sm:ml-2">
              <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center justify-center w-[52px] h-[52px] shadow-sm shadow-sky-400 rounded-lg border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 transition-colors">
                <FaGithub size={22} />
              </a>
              <a href={data.linkedin}   target="_blank" rel="noreferrer" className="flex items-center justify-center w-[52px] h-[52px] shadow shadow-sky-400 rounded-lg border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-400/50 transition-colors">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
          

        {/* Orbit graphic — signature element */}
        <div style={{ position: "fixed", right: "-80px", top: "50%", transform: "translateY(-50%)", opacity: 0.12, pointerEvents: "none", zIndex: 0 }}>
          <OrbitGraphic />
        </div>
      </div>
       {/* Right Column (Image) */}
        <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0 z-10">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-sky-500/20 blur-[80px] rounded-full"></div>
            
            {/* The Actual Picture */}
            <img 
              src="https://instagram.fmyq1-1.fna.fbcdn.net/v/t51.82787-15/624471856_18055630448672341_5604312082504135148_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzM2MzQ5NjQxNTUyNDU5NTQ0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=HFauUTh9FEEQ7kNvwHJzg4B&_nc_oc=Adr6v326w4fWzztT7ewQnvd7Z2s7ms8ep_FmJE0wgyhWMYrcJOikGLY_L9SspKzs9qc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmyq1-1.fna&_nc_gid=yIbV30AXiHMRVhSntaScqg&_nc_ss=7a22e&oh=00_AQBsjGF2-pUIHaWgIbbCr1HZ8fRCRDnSySMe4Bw_p6ToVw&oe=6A49D2E0" 
              alt="Vivek Kumar" 
              className="relative shadow shadow-sky-400 z-10 w-full h-full object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl bg-[#0d1117] hover:scale-[1.02] transition-transform duration-500"
              style={{ objectPosition: 'center top' }}
            />
            
            {/* Decorative dots behind image */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#38bdf8_2px,transparent_2px)] [background-size:12px_12px] opacity-20 z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(#38bdf8_2px,transparent_2px)] [background-size:12px_12px] opacity-20 z-0"></div>
          </div>
        </div>

        </div>
    </section>
  );
}