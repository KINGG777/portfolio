import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps & Cloud Engineer</h4>
                <h5>Quantumware (AWS Migration)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Led end-to-end migration of on-premises applications to AWS. Migrated over 1 TB
              data to Amazon RDS via AWS DMS. Automated infrastructure setup using Terraform
              and designed CI/CD pipelines with Jenkins and GitLab.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps / Build Engineer</h4>
                <h5>Quantumware (EKS + Terraform)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and deployed a 3-tier web application architecture using AWS EKS, ALB,
              and RDS. Implemented robust CI/CD pipelines. Managed applications on Kubernetes
              with rolling updates, and set up Prometheus + Grafana monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
