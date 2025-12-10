export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "PhD in Computer Engineering",
    organization: "SGB Amaravati University",
    year: "2016",
    description: "Awarded PhD (No: SGBAU/Ph.D./655/2016) with a research focus on Mobility Management and Seamless Handoff in Heterogeneous Wireless Networks.",
  },
  {
    id: "2",
    title: "HOD Computer/IT Department",
    organization: "Multiple Institutions",
    year: "2000-2018",
    description: "Served as Head of Department for Computer/IT for over 10 years across RAIT, SCOE, TCET, GHRCEM, and PCCOE, handling key administrative portfolios.",
  },
  {
    id: "3",
    title: "Member Board of Studies (Computer/IT)",
    organization: "University of Mumbai & SPPU",
    year: "2002-2017",
    description: "Appointed as BoS Member for University of Mumbai (2002-2004) and actively contributed to Syllabus Revision Committees for SPPU (2012-2017).",
  },
  {
    id: "4",
    title: "M.E. (Computer Science) with Distinction",
    organization: "BITS Pilani",
    year: "1997",
    description: "Completed Master of Engineering in Computer Science with a CGPA of 8.81.",
  },
  {
    id: "5",
    title: "Life Member Professional Societies",
    organization: "ISTE, CSI, ACM",
    year: "Present",
    description: "Life Member of ISTE (LM 19514), Life Member of CSI (00075668), and Member of ACM (No. 2675484).",
  },
  {
    id: "6",
    title: "Secretary & Chairman Roles",
    organization: "CSI & ISTE",
    year: "2003-2012",
    description: "Served as Secretary for the CSI Navi Mumbai Chapter and Chairman for the ISTE Chapter at GHRCEM, Pune.",
  },
];