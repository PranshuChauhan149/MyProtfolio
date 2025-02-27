import { FaBookReader } from "react-icons/fa";
import TimeLineitem from "./TimeLineitem";

function Resume(){
return<>
<section>
<header>
  <h2 className="h2 article-title">Resume</h2>
</header>
<div className="title-wrapper">
  <div className="icon-box">
  <FaBookReader />

  </div>
  <h3 className='expeien-text'>Experience</h3>
</div>

<div>
  <ol className="timeline-list">
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer.."
  />
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer."
  />
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer.."
  />
  </ol>
</div>

<div className="title-wrapper">
  <div className="icon-box">
  <FaBookReader />

  </div>
  <h3 className="expeien-text">Education</h3>
</div>

<div>
  <ol className="timeline-list">
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer.."
  />
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer.."
  />
  <TimeLineitem
  title="Unversity School of the Btech"
  date="2023 - 2027"
  description ="Pursuing a Bachelor of Technology in Computer Science & Engineering with a strong foundation in programming, algorithms, and networking. Experienced in problem-solving and network configuration using Cisco Packet Tracer."
  />
  </ol>
</div>
</section>
</>


}

export default Resume;