import './Career.css'
export const Career = () => {

    return (
        <div className='careerBackground'>
<h2>Background</h2>
<p>
    I studied <b>Computer Science</b> in <i>University College</i> Cork <i>from 2021 - 2025.</i> 
    I finished college in May and will be officially graduating with an (expected) 2:1 degree in November 2025. 
    I spent most of college working part-time in bars/restaurants within Cork, learning 
    <b>invaluable team skills and the ability to work under high pressure.</b>
</p>
<hr></hr>
<h2>Career</h2>
<h3>Software Engineer - Dell Technologies Internship</h3>
<h4>March 2024 - September 2024</h4>
<p>As a software engineering intern in the Data Telemetry Team of SIP - Infra:</p>
<ul>
    <li>
        I used various cloud technologies <i>Kubernetes</i>, <i>Helm</i> & <i>Docker</i> alongside CI tools <i>Jenkins</i> & <i>Argo CD</i> to work collaboratively with the team, while 
        <b> maintaining and improving the cloud platform under development.</b>
    </li>
    <li>
        I created a version control and automatic environment-switching system for the team's <i>Grafana</i> interface using <i>Python</i> scripts and <i>Grafana's</i> own <i>API</i>, 
        <b> allowing the team to quickly migrate between development environments. </b> 
        This streamlined the monitoring setup and <b>significantly improved operational efficiency for the entire team.</b>
    </li>
    <li>
        I designed and <b>implemented <i>Prometheus</i> integrations that monitored various parts of the system</b>, including <i>Redis</i> and testbeds generating real-time continuous data.
    </li>
    <li>
        I helped redesign the <i>Grafana</i> <b>alert system to send out relevant notifications via email and MS Teams</b> to members across the entire SIP-Infra team in case of downtime or extremely high resource usage of their services.
    </li>
</ul>

        </div>
    )
}