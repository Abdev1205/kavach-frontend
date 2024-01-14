import React, { useEffect, useState } from 'react'
import TextFields from '../common/InputFields/TextFields';
import StageSelector from '../common/InputFields/StageSelector';
import { data } from 'autoprefixer';

const RegisterFir = ({ visible, onClose = () => { }, callback = () => { } }) => {

  const [accusedName, setAccusedName] = useState()
  const [accusedAge, setAccusedAge] = useState()
  const [accusedCity, setAccusedCity] = useState()
  const [accusedReport, setAccusedReport] = useState()


  const [suspectName, setSuspectName] = useState()
  const [suspectAge, setSuspectAge] = useState()
  const [suspectCity, setSuspectCity] = useState()

  const [stage, setStage] = useState(1)

  const stageData = [
    {
      id: 1,
      name: "Registered",
    },
    {
      id: 2,
      name: "Investigation",
    },
    {
      id: 3,
      name: "Action",
    },
    {
      id: 4,
      name: "Closed",
    },
  ]

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
  if (!visible) return null;
  return (
    <div
      id="background"
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id == "background") onClose();
      }}
    >
      <div className=' flex w-[40rem]  px-[2rem] py-[2rem] register-fir-bg  ' >
        <div className=' flex flex-col w-[100%] gap-[1rem] ' >
          <div className=' flex justify-between gap-[1.5rem] w-[100%] '>
            <TextFields value={accusedName} setValue={setAccusedName} label="Accused Name" placeholder="Enter Full Name" required={true} />
            <TextFields value={suspectName} setValue={setSuspectName} label="Suspect Name" placeholder="Enter Full Name" required={true} />
          </div>
          <div className=' flex justify-between gap-[1.5rem] w-[100%] '>
            <TextFields value={accusedAge} setValue={setAccusedAge} label="Accused Age" placeholder="Enter Age" required={true} />
            <TextFields value={suspectAge} setValue={setSuspectAge} label="Suspect Age" placeholder="Enter Age" required={true} />
          </div>
          <div className=' flex justify-between gap-[1.5rem] w-[100%] '>
            <TextFields value={accusedCity} setValue={setAccusedCity} label="Accused City" placeholder="Enter City" required={true} />
            <TextFields value={suspectCity} setValue={setSuspectCity} label="Suspect City" placeholder="Enter City" required={true} />
          </div>

          <div className=' flex flex-col gap-[.5rem] w-[100%] text-[#AEB9E180]  ' >
            <label htmlFor={"accused-report"}>Accused Report <span className={` text-red-600 `} >*</span></label>
            <textarea onChange={(e) => setAccusedReport(e.target.value)} value={accusedReport} type="text" className=' h-[8rem] bg-[#8C8C9A1F] text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c]' placeholder={"Enter Report"} />
          </div>
          {/* <StageSelector stage={stage} setStage={setStage} data={stageData} /> */}
          <button className=' w-[100%] h-[2.6rem] flex justify-center items-center rounded-md bg-[#6C72FF] text-white mt-[1.5rem] ' >Create FIR Report</button>

        </div>
      </div>

    </div>
  )
}

export default RegisterFir
