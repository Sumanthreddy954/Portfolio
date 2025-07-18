import { LinkPreview } from "@/components/ui/link-preview";
import { ChevronsDown } from "lucide-react";
import ProjectShowcase from "../components/Project";

function page() {
  return (
    <div className="mt-36">
      <div className="flex gap-10">
        <ChevronsDown className="w-20 h-20" />
        <h1 className="font-poppins text-4xl font-extralight">
          Checkout My Work
        </h1>
      </div>
      <ProjectShowcase
        projectNumber="01"
        projectName="Uber Ride Data Analytics"
        description="Uber Ride Data Analytics is a cloud-powered project that analyzes Uber ride patterns, peak hours, and regional demand using GCP tools like Dataflow and BigQuery. 
          It delivers actionable insights through scalable pipelines and interactive visualizations."
        imageSrc="https://raw.githubusercontent.com/Sumanthreddy954/uber-data-analytics/main/architecture.jpg"
        codeLink="https://github.com/Sumanthreddy954/uber-data-analytics"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="02"
        projectName="YouTube ETL Dataflow Analysis"
        description="YouTube ETL Dataflow Analysis is a cloud-based pipeline built to process and analyze YouTube video engagement data. Using AWS services like Glue, Athena, and QuickSight, the project extracts key insights on user behavior and content categories through automated ETL workflows and interactive dashboards."
        imageSrc="https://raw.githubusercontent.com/Sumanthreddy954/YouTube-ETL-Dataflow-Analysis/main/architecture.jpeg"
        codeLink="https://github.com/Sumanthreddy954/YouTube-ETL-Dataflow-Analysis?tab=readme-ov-file"
        moreProjectsLink="/more-projects"
      />
      <ProjectShowcase
        projectNumber="03"
        projectName="Twitter Data Pipeline with Airflow"
        description="Created a data pipeline that collects tweets using the Twitter API and schedules tasks with Apache Airflow. The data is processed and stored for further analysis."
        imageSrc="https://drive.google.com/file/d/1Tul7331n8qV1jzIiiulJDga1RWJ0xRhh/view?usp=sharing"
        codeLink="https://github.com/Sumanthreddy954/Twitter-Data-Pipeline-Airflow"
        moreProjectsLink="/more-projects"
      />
      <div></div>
    </div>
  );
}

export default page;
