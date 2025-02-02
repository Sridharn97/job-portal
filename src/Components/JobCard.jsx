import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-6 shadow-lg rounded-lg bg-white hover:shadow-xl transition-all duration-300">
      {/* Header - Company Logo */}
      <div className="flex justify-between items-center">
        <img className="h-10 w-10 object-contain" src={job.companyId.image} alt={job.companyId.name} />
      </div>

      {/* Job Title */}
      <h4 className="font-semibold text-lg mt-3 text-gray-800">{job.title}</h4>

      {/* Job Tags */}
      <div className="flex items-center gap-2 mt-3 text-xs">
        <span className="bg-blue-100 text-blue-700 border border-blue-300 px-3 py-1 rounded-md">
          {job.location}
        </span>
        <span className="bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded-md">
          {job.level}
        </span>
      </div>

      {/* Job Description Preview */}
      <p
        className="text-gray-600 text-sm mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      {/* Action Buttons */}
      <div className="mt-5 flex gap-4 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Apply Now
        </button>

        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="text-gray-700 border border-gray-400 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
