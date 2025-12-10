export interface Experience {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Associate Dean Faculty Development & Deputy HoD",
    organization: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
    date: "2012 - Present",
    description: "Serving as Associate Dean of Faculty Development and Welfare, and Deputy HoD of the Computer Engineering Department. Coordinator for the Eduskill – AICTE internship initiative, and PCCOE ISTE & CSI Chapters. Teaching Computer Networks (CN), Mobile Computing (MC), Computer Organization (CO), Software Engineering (SE), and Software Project Management (SPM).",
  },
  {
    id: "2",
    title: "HOD Computer Engineering",
    organization: "G.H. Raisoni College of Engineering & Management, Pune",
    date: "2008 - 2012",
    description: "Served as Head of Department for Computer Engineering (UG & PG) and Chairman of the ISTE Chapter. Taught Principles of Programming Languages (PPL), Operating Systems (OS), Data Structures (DS), Computer Networks (CN), Mobile Computing, and Information & Network Security.",
  },
  {
    id: "3",
    title: "Faculty Member",
    organization: "MPSTME, Vile Parle (E), Mumbai",
    date: "2007 - 2008",
    description: "Taught UG courses including Computer Architecture & Organization (CAO) and Operating Systems (OS). Conducted PG courses in Network Architecture and Mobile Communication.",
  },
  {
    id: "4",
    title: "HOD IT & Placement Incharge",
    organization: "Thakur College of Engineering & Technology, Mumbai",
    date: "2006 - 2007",
    description: "Functioned as HOD IT, Placement Incharge, and Infosys Campus Connect Co-ordinator. Taught System Software, Computer Networks (CN), Information Security, and Software Engineering.",
  },
  {
    id: "5",
    title: "Faculty Member & HOD",
    organization: "Saraswati COE & R.A.I.T., Navi Mumbai",
    date: "2000 - 2006",
    description: "Held the position of HOD CS/IT at RAIT (2000-2005) and Saraswati COE (2005-2006). Served as Secretary of the CSI Navi Mumbai Chapter. Taught Information Theory & Coding, Computer Organization (CO), Operating Systems (OS), Computer Networks (CN), Information Security, Data Structures (DS), and Automata Theory.",
  },
  {
    id: "6",
    title: "Faculty Member",
    organization: "S.S.G.M. College of Engineering, Shegaon",
    date: "1997 - 2000",
    description: "Taught Computer Graphics (CG), Computer Architecture & Organization (CAO), Computer Networks (CN), Operating Systems (OS), Robotics, and System Analysis & Design (SAD).",
  },
  {
    id: "7",
    title: "Research Scholar & Faculty",
    organization: "BITS, Pilani",
    date: "1995 - 1997",
    description: "Completed M.E. (CS) with 8.81 CGPA. Taught Computer Organization (CO), Object Oriented Programming (OOP), Computer Graphics (CG), and Switching & Control Logic (SCL).",
  },
  {
    id: "8",
    title: "Faculty Member",
    organization: "PREC, Loni",
    date: "1993 - 1995",
    description: "Instructed courses on Numerical Methods (NM), Unix, and Computer Organization (CO).",
  },
];
