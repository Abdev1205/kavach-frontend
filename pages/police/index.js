import React, { useEffect, useState } from "react";
import PoliceRoleLayer from "../(protectedLayer)/PoliceRoleLayer";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { DataLayer } from "@/context/UserDataProvider";
import { useRouter } from "next/router";
import axios from "axios";
import PoliceLayout from "../layout/PoliceLayout";
import Panel from "@/components/common/Leftpanel.js/Panel";
import AnalyticsCard from "@/components/police/dashboard/analytics/AnalyticsCard";
import {
  FirAnalyticsImage,
  FeedbackAnalytics,
  CaseAnaytics,
  CrimeAnalytics,
} from "../../public/assetsManager";
import RecentFir from "@/components/police/dashboard/recent/RecentFir";
import RecentFeedback from "@/components/police/dashboard/recent/RecentFeedback";
import { ApiUrl } from "@/utils/BaseUrl.js";

const index = () => {
  const { refresh } = useContext(DataLayer);
  const [FirChip, setFirChip] = useState({});

  const [casessolved, setCasesSolved] = useState({});
  const [feedbackChip, setFeedbackChip] = useState({});
  const [crimeChip, setCrimeChip] = useState({});

  const fethchData = async () => {
    try {
      const firData = await axios.get(`${ApiUrl}/api/totalFirCount`, {}, {});
      const SolvedCasesData = await axios.get(`${ApiUrl}/api/getSolvedCaseCount`, {}, {});
      const FeedbackCount = await axios.get(`${ApiUrl}/api/getFeedbackCount`);
      const crimeData = await axios.get(`${ApiUrl}/api/getCrimeRateCount`, {}, {});

      // console.log("FirData: ");
      // console.log(firData);

      // console.log("FeedbackCount: ");
      // console.log(FeedbackCount);

      // console.log("SolvedCasesData: ");
      // console.log(SolvedCasesData);

      // console.log("crimeData: ");
      // console.log(crimeData)

      setCasesSolved(SolvedCasesData.data);
      setFirChip(firData.data);
      setFeedbackChip(FeedbackCount.data);
      setCrimeChip(crimeData.data);
    } catch (error) {
      console.log(error);
    }
  };
  const { setIsAuthenticated } = useContext(DataLayer);
  const router = useRouter();

  useEffect(() => {
    fethchData();
  }, [router, refresh]);

  const analyticsData = [
    {
      id: 0,
      name: "FIR reports",
      count: FirChip.totalNo,
      increased: true,
      percent: 4.8,
      img: FirAnalyticsImage,
    },
    {
      id: 1,
      name: "Feedback",
      count: feedbackChip.totalFeedbackCount,
      increased: true,
      percent: feedbackChip.feedbackRate,
      img: FeedbackAnalytics,
    },
    {
      id: 2,
      name: "Case Solved",
      count: casessolved.total,
      increased: true,
      percent: casessolved.solvedCasesRate,
      img: CaseAnaytics,
    },
    {
      id: 3,
      name: "Crime Rate",
      count: crimeChip.totalFir,
      increased: false,
      percent: crimeChip.crimeRate,
      img: CrimeAnalytics,
    },
  ];

  return (
    <>
      <PoliceLayout>
        <div className=" bg-[#080F25] w-[100%] h-[100vh] flex flex-row relative flex-shrink ">
          <Panel />
          <div className=" w-[100%] h-[81vh] flex  flex-col items-center px-[2.5rem] pt-[1rem] text-[#AEB9E1] text-[2rem] ">
            <div className=" flex w-[100%] gap-[2rem] ">
              {analyticsData &&
                analyticsData.map((data, index) => {
                  return <AnalyticsCard key={index} data={data} />;
                })}
            </div>
            <div className=" w-[100%] " >
              <div className=" w-[100%] overflow-auto mt-[1rem]  ">
                <h2 className=" text-[#6C72FF] text-[1.1rem]  w-[15rem] ">
                  Recent FIr{" "}
                </h2>
                <RecentFir />
              </div>
              <div className=" w-[100%] mt-[1.5rem]  ">
                <h2 className=" text-[#6C72FF] text-[1.1rem]  w-[15rem] ">
                  Recent Feedback
                </h2>
                <RecentFeedback />
              </div>
            </div>
          </div>
        </div>
      </PoliceLayout>
    </>
  );
};

export default index;