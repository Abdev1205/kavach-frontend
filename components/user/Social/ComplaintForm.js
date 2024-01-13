import React, { useState } from 'react';

const ComplaintForm = () => {
  const [complainant, setComplainant] = useState('');
  const [complainantNumber, setComplainantNumber] = useState('');
  const [respondent, setRespondent] = useState('');
  const [location, setLocation] = useState('');
  const [complaintSubject, setComplaintSubject] = useState('');
  const [complaintTime, setComplaintTime] = useState('');
  const [subjectOfComplaint, setSubjectOfComplaint] = useState('');
  const [complaintHappened, setComplaintHappened] = useState('');
  const [processingTime, setProcessingTime] = useState('');
  const [reviewTime, setReviewTime] = useState('');
  const [complaints, setComplaints] = useState('');
  const [processor, setProcessor] = useState('');
  const [solution, setSolution] = useState('');
  const [customerResponse, setCustomerResponse] = useState('');
  const [processingMethodReview, setProcessingMethodReview] = useState('');
  const [remark, setRemark] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    // You can send the form data to your server or perform any other necessary actions
    console.log({
      complainant,
      complainantNumber,
      respondent,
      location,
      complaintSubject,
      complaintTime,
      subjectOfComplaint,
      complaintHappened,
      processingTime,
      reviewTime,
      complaints,
      processor,
      solution,
      customerResponse,
      processingMethodReview,
      remark,
    });
  };

  return (
    <div className=" text-fontSec flex flex-col">
      <h2>Customer Complaint Record Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Complainant:
          <input type="text" value={complainant} onChange={(e) => setComplainant(e.target.value)} />
        </label>

        <label>
          Complainant's Telephone Number:
          <input type="tel" value={complainantNumber} onChange={(e) => setComplainantNumber(e.target.value)} />
        </label>

        <label>
          Respondent:
          <input type="text" value={respondent} onChange={(e) => setRespondent(e.target.value)} />
        </label>

        <label>
          Location Occur:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>

        <label>
          Complaint Subject:
          <input type="text" value={complaintSubject} onChange={(e) => setComplaintSubject(e.target.value)} />
        </label>

        <label>
          Complaint Time:
          <input type="text" value={complaintTime} onChange={(e) => setComplaintTime(e.target.value)} />
        </label>

        <label>
          Subject of Complaint:
          <input type="text" value={subjectOfComplaint} onChange={(e) => setSubjectOfComplaint(e.target.value)} />
        </label>

        <label>
          When the Complaint Happened:
          <input type="text" value={complaintHappened} onChange={(e) => setComplaintHappened(e.target.value)} />
        </label>

        <label>
          Processing Time for Complaints:
          <input type="text" value={processingTime} onChange={(e) => setProcessingTime(e.target.value)} />
        </label>

        <label>
          Review Time:
          <input type="text" value={reviewTime} onChange={(e) => setReviewTime(e.target.value)} />
        </label>

        <label>
          Complaints:
          <textarea value={complaints} onChange={(e) => setComplaints(e.target.value)} />
        </label>

        <label>
          Processor:
          <input type="text" value={processor} onChange={(e) => setProcessor(e.target.value)} />
        </label>

        <label>
          Solution:
          <textarea value={solution} onChange={(e) => setSolution(e.target.value)} />
        </label>

        <label>
          Customer Response:
          <textarea value={customerResponse} onChange={(e) => setCustomerResponse(e.target.value)} />
        </label>

        <label>
          Processing Method Review:
          <textarea value={processingMethodReview} onChange={(e) => setProcessingMethodReview(e.target.value)} />
        </label>

        <label>
          Remark:
          <textarea value={remark} onChange={(e) => setRemark(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
