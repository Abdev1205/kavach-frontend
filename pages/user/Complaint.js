import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import Panel from "@/components/common/Leftpanel.js/Panel";
import ComplaintForm from "@/components/user/Social/ComplaintForm";
const Complaint = () => {
  return (
    <div className="bg-primary flex">
      <Panel />
      <ComplaintForm />
      <div className="flex">

      </div>
    </div>
  );
};

export default Complaint;
