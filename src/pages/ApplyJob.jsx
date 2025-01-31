import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../Components/JobCard';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';
import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';

const ApplyJob = () => {
    const { id } = useParams();
    const { getToken } = useAuth();
    const navigate = useNavigate();
    const [JobData, setJobData] = useState(null);
    const [isAlredyApplied, setIsAlredyApplied] = useState(false);
    const { jobs, userData, userApplications, fetchUsersApplications } = useContext(AppContext);

    const fetchJob = async () => {
        const data = jobs.find(job => job._id === id);
        if (data) {
            setJobData(data);
            console.log("Job Data:", data);
        }
    };

    const applyHandler = async () => {
        try {
            if (!userData) {
                return toast.error('Login to Apply for Jobs');
            }
            if (!userData.resume) {
                navigate('/applications');
                return toast.error('Upload resume to apply for jobs');
            }

            const token = await getToken();
            console.log("Token Received:", token); // Debugging JWT issue

            if (!token) {
                return toast.error("Authentication failed. Please log in again.");
            }

            const { data } = await axios.post(
                backendUrl + '/api/users/apply',
                { jobId: JobData._id }, // ✅ Ensure correct format
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                toast.success(data.message);
                fetchUsersApplications();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Apply Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    const checkedAlreadyApplied = () => {
        if (!JobData) return;
        const hasApplied = userApplications.some(item => item.jobId?._id === JobData._id);
        setIsAlredyApplied(hasApplied);
    };

    useEffect(() => {
        fetchJob();
    }, [id, jobs]);

    useEffect(() => {
        if (userApplications.length > 0 && JobData) {
            checkedAlreadyApplied();
        }
    }, [JobData, userApplications, id]);

    return JobData ? (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
                <div className="bg-white text-black rounded-lg w-full">
                    <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
                        <div className="flex flex-col md:flex-row items-center">
                            <img className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border" src={JobData.companyId.image} alt="" />
                            <div className="text-center md:text-left text-neutral-700">
                                <h1 className="text-2xl sm:text-4xl font-medium">{JobData.title}</h1>
                                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                                    <span className="flex items-center gap-1">
                                        <img src={assets.suitcase_icon} alt="" />
                                        {JobData.companyId.name}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.location_icon} alt="" />
                                        {JobData.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.person_icon} alt="" />
                                        {JobData.level}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <img src={assets.money_icon} alt="" />
                                        CTC: {kconvert.convertTo(JobData.salary)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
                            <button onClick={applyHandler} className="bg-blue-600 p-2.5 px-10 text-white rounded">
                                {isAlredyApplied ? 'Already Applied' : 'Apply Now'}
                            </button>
                            <p className="mt-1 text-gray-600">Posted {moment(JobData.date).fromNow()}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : (
        <Loading />
    );
};

export default ApplyJob;
