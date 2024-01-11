import * as React from "react";

function policeDash(props) {
  return (
    <div className="bg-slate-900 pr-10 h-1/2 max-w-screen max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
          <div className="border-r-[color:var(--primary-border,#1F2A4A)] shadow-2xl bg-slate-900 flex grow flex-col items-stretch w-full py-7 border-r border-solid max-md:mt-9">
            <div className="flex flex-col items-stretch px-7 max-md:px-5">
              <div className="flex flex-col items-stretch justify-between gap-2.5">
                <div className="flex flex-row">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/609b4a02a5c4069a4406097a7ec2d657072b707073d77fa5131e43dcf94030d7?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-11 overflow-hidden shrink-0 max-w-full mr-6"
                  />

                  <div></div>
                  <div className="flex flex-row DASHBOARD">
                    <div className="text-indigo-300 text-2xl font-semibold my-auto">
                      Police Dashboard
                    </div>
                  </div>
                </div>

                <div className="border bg-slate-900 flex items-stretch justify-between gap-4 mt-9 px-3.5 py-3 rounded-md border-solid border-gray-800 max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/201bb7cfe4b4c95c67242de3491279914a42ff25b21ed75f678d6cc629e28141?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-400 text-base grow whitespace-nowrap mt-1 self-start">
                    Search things ...
                  </div>
                </div>
              </div>
              <div className="bg-blue-950 shrink-0 h-0.5 mt-10" />
              <div className="flex flex-col mt-10 px-7 max-md:px-5">
                <div className="border-l-[color:var(--primary-btn,#6C72FF)] bg-blue-950 self-stretch flex items-stretch justify-between gap-3 px-5 py-2.5 rounded-md border-l-4 border-solid max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b861a53933590f9e648ed6a3578639705c570dfa7093d053e8da4cdae9d00bc?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-gray-100 text-lg self-center grow whitespace-nowrap my-auto">
                    Dashboard
                  </div>
                </div>
                <div className="self-center flex w-[233px] max-w-full justify-between gap-5 mt-7 items-start">
                  <div className="flex gap-4 items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6646efc21cba1618e45e63d8455655d5358cccea26152f92a6e83ebaac5527f?apiKey=e16cb3c994984815b737f967d633609a&"
                      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-indigo-300 text-lg mt-1.5">
                      FIR reports
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cee703bd297571b310a3089b3841978c702a6199d57b7c7f7866d63a3a0bdb?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full mt-1"
                  />
                </div>
                <div className="flex items-stretch gap-3 ml-7 mt-7 self-start max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2824509e7a5df877e310d017a7baaa1943f04c7d067776da9c2162b121766a4?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-[1.08] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-indigo-300 text-lg self-center grow whitespace-nowrap my-auto">
                    Feedback
                  </div>
                </div>
                <div className="self-center flex w-[234px] max-w-full items-stretch justify-between gap-5 mt-7">
                  <div className="flex items-stretch justify-between gap-3">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/378a6ebf6b6e73749e4c8c09c68226bced3395de316d17ba485b74cebd31f0ac?apiKey=e16cb3c994984815b737f967d633609a&"
                      className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-indigo-300 text-lg self-center grow whitespace-nowrap my-auto">
                      Social Media
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cee703bd297571b310a3089b3841978c702a6199d57b7c7f7866d63a3a0bdb?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
                <div className="flex items-stretch gap-4 ml-6 mt-7 self-start max-md:ml-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b248846540ccf9367672a47b11d55a1cb2f99e63160f0eb9df5d0203f3bb3d?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-indigo-300 text-lg self-center my-auto">
                    Our Teams
                  </div>
                </div>
                <div className="self-center flex items-stretch gap-3.5 mt-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/24b7e1977305fa052e2e51c56c5281e83c95317d1e70bf7d8da669aee80eaed9?apiKey=e16cb3c994984815b737f967d633609a&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-indigo-300 text-lg self-center grow whitespace-nowrap my-auto">
                    Contact Admin
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-950 shrink-0 h-0.5 mt-80 max-md:mt-10" />
            <div className="flex flex-col mt-9 px-7 items-start max-md:px-5">
              <div className="flex items-stretch gap-3.5 ml-6 max-md:ml-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be156930a2cdb7b90ca175ee3e9e68d87b3a124bf276526e722ea980f3c5e644?apiKey=e16cb3c994984815b737f967d633609a&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-indigo-300 text-lg self-center my-auto">
                  Your Profile
                </div>
              </div>
              <div className="bg-indigo-500 self-stretch flex items-stretch justify-between gap-4 mt-7 px-12 py-2.5 rounded-md max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a576fd970ff5d197dc3470df1f9430a10273e2e7939c8a6f698ba99273c259d?apiKey=e16cb3c994984815b737f967d633609a&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-xl mt-1.5 self-start">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[77%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="px-0.5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <div className="border bg-slate-900 flex w-full grow flex-col items-stretch mx-auto px-5 py-2.5 rounded-lg border-solid border-gray-800 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/981dee9a5ee0c6af9fc3306a3c2416e6c88a61d56611bc1be05d5b97a5df77de?apiKey=e16cb3c994984815b737f967d633609a&"
                        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-2xl font-medium my-auto">
                        FIR reports
                      </div>
                    </div>
                    <div className="justify-between items-stretch flex gap-2.5 mt-2">
                      <div className="text-indigo-500 text-2xl font-medium leading-8 grow whitespace-nowrap">
                        1,250
                      </div>
                      <div className="items-stretch self-center flex gap-1.5 my-auto pl-5">
                        <div className="text-green-600 text-sm font-medium leading-5 whitespace-nowrap">
                          4.8%
                        </div>
                        <div className="text-neutral-400 text-xs leading-4 grow whitespace-nowrap self-start">
                          from last week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="border bg-slate-900 flex w-full grow flex-col items-stretch mx-auto px-5 py-2.5 rounded-lg border-solid border-gray-800 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb05f301abd06a8938baf669dfdfcdcacd3a8faf12ff8f01635a5601a141f443?apiKey=e16cb3c994984815b737f967d633609a&"
                        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-2xl font-medium my-auto">
                        Feedback
                      </div>
                    </div>
                    <div className="justify-between items-stretch flex gap-2.5 mt-2">
                      <div className="text-amber-500 text-2xl font-medium leading-8 grow whitespace-nowrap">
                        1,250
                      </div>
                      <div className="items-stretch self-center flex gap-1.5 my-auto pl-5">
                        <div className="text-green-600 text-sm font-medium leading-5 whitespace-nowrap">
                          4.8%
                        </div>
                        <div className="text-neutral-400 text-xs leading-4 grow whitespace-nowrap self-start">
                          from last week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="border bg-slate-900 flex w-full grow flex-col items-stretch mx-auto px-5 py-2.5 rounded-lg border-solid border-gray-800 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61997729ac2f786791a8d9c84049b8e6277bcb859e3280973a84a3876d91fc92?apiKey=e16cb3c994984815b737f967d633609a&"
                        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-2xl font-medium my-auto">
                        Case Solved
                      </div>
                    </div>
                    <div className="justify-between items-stretch flex gap-2.5 mt-2">
                      <div className="text-green-500 text-2xl font-medium leading-8 grow whitespace-nowrap">
                        1,250
                      </div>
                      <div className="items-stretch self-center flex gap-1.5 my-auto pl-5">
                        <div className="text-green-600 text-sm font-medium leading-5 whitespace-nowrap">
                          4.8%
                        </div>
                        <div className="text-neutral-400 text-xs leading-4 grow whitespace-nowrap self-start">
                          from last week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="border bg-slate-900 flex w-full grow flex-col items-stretch mx-auto px-4 py-2.5 rounded-lg border-solid border-gray-800 max-md:mt-10">
                    <div className="flex items-stretch justify-between gap-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef7a00b2a2178ec0650b5bb674591b1c14c78c891ffcf4c9efac855a7e0d9128?apiKey=e16cb3c994984815b737f967d633609a&"
                        className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-2xl font-medium my-auto">
                        Crime Rate
                      </div>
                    </div>
                    <div className="justify-between items-stretch flex gap-5 mt-3 px-1.5">
                      <div className="text-rose-600 text-2xl font-medium leading-8">
                        60
                      </div>
                      <div className="items-stretch self-center flex gap-1.5 my-auto pl-4">
                        <div className="text-red-600 text-sm font-medium leading-5 whitespace-nowrap">
                          25%
                        </div>
                        <div className="text-neutral-400 text-xs leading-4 grow whitespace-nowrap self-start">
                          from last week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between gap-5 mt-16 pr-7 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
              <div className="text-indigo-500 text-center text-sm leading-5">
                Accused Details
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 self-stretch">
                Report
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5">
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Stages
                </div>
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Reported at
                </div>
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Investigate
                </div>
              </div>
            </div>
            <div className="border bg-slate-900 flex items-center justify-between gap-5 mt-6 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Neha Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                Husband beaten him brutually after knowing her extra marital
                affair. He also need official divorce so she have to leave her
                house immediately
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-zinc-400 bg-opacity-10 justify-center items-stretch my-auto px-3.5 py-2 rounded">
                registered
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-white text-sm whitespace-nowrap bg-indigo-500 justify-center items-stretch my-auto px-3.5 py-2 rounded-md">
                Investigate
              </div>
            </div>
            <div className="border bg-slate-900 flex items-center justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Neha Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                Husband beaten him brutually after knowing her extra marital
                affair. He also need official divorce so she have to leave her
                house immediately
              </div>
              <div className="text-amber-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-yellow-600 bg-opacity-20 justify-center items-stretch my-auto px-1.5 py-2 rounded">
                investigation
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-white text-sm whitespace-nowrap bg-indigo-500 justify-center items-stretch my-auto px-3.5 py-2 rounded-md">
                Investigate
              </div>
            </div>
            <div className="border bg-slate-900 flex items-center justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Neha Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                Husband beaten him brutually after knowing her extra marital
                affair. He also need official divorce so she have to leave her
                house immediately
              </div>
              <div className="text-rose-600 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-rose-700 bg-opacity-20 justify-center items-stretch my-auto px-7 py-2 rounded max-md:px-5">
                action
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-white text-sm whitespace-nowrap bg-indigo-500 justify-center items-stretch my-auto px-3.5 py-2 rounded-md">
                Investigate
              </div>
            </div>
            <div className="border bg-slate-900 flex items-center justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Neha Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                Husband beaten him brutually after knowing her extra marital
                affair. He also need official divorce so she have to leave her
                house immediately
              </div>
              <div className="text-green-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-green-900 bg-opacity-30 justify-center items-stretch my-auto p-2 rounded">
                Case closed
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-white text-sm whitespace-nowrap bg-indigo-500 justify-center items-stretch my-auto px-3.5 py-2 rounded-md">
                Investigate
              </div>
            </div>
            <div className="text-indigo-500 text-center text-lg font-semibold leading-6 mt-14 max-md:max-w-full max-md:mt-10">
              Recent Feedback
            </div>
            <div className="flex w-full justify-between gap-5 mt-6 pr-11 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="flex items-stretch justify-between gap-5">
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Accused Details
                </div>
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Feedback
                </div>
              </div>
              <div className="self-stretch flex justify-between gap-5 items-start">
                <div className="text-indigo-500 text-center text-sm leading-5">
                  Hero
                </div>
                <div className="text-indigo-500 text-center text-sm leading-5 self-stretch">
                  Reported at
                </div>
                <div className="text-indigo-500 text-center text-sm leading-5 self-stretch">
                  Reply
                </div>
              </div>
            </div>
            <div className="border bg-slate-900 flex items-start justify-between gap-5 mt-6 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Vijay Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                I thank you to all police men who investigate my problem and
                solved within short period of time , I love Rajasthan Police{" "}
              </div>
              <div className="text-amber-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-yellow-600 bg-opacity-20 justify-center items-stretch mt-1.5 px-3 py-2 rounded self-start">
                Sher Singh
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-zinc-400 bg-opacity-10 self-center justify-center items-stretch my-auto px-7 py-2 rounded max-md:px-5">
                Reply
              </div>
            </div>
            <div className="border bg-slate-900 flex items-start justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Vijay Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                I thank you to all police men who investigate my problem and
                solved within short period of time , I love Rajasthan Police{" "}
              </div>
              <div className="overflow-hidden text-amber-500 text-center text-ellipsis text-sm leading-5 whitespace-nowrap shadow-sm bg-yellow-600 bg-opacity-20 justify-center items-stretch mt-1.5 px-1.5 py-2 rounded self-start">
                Bahdur Singh
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-zinc-400 bg-opacity-10 self-center justify-center items-stretch my-auto px-7 py-2 rounded max-md:px-5">
                Reply
              </div>
            </div>
            <div className="border bg-slate-900 flex items-start justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Vijay Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                I thank you to all police men who investigate my problem and
                solved within short period of time , I love Rajasthan Police{" "}
              </div>
              <div className="overflow-hidden text-amber-500 text-center text-ellipsis text-sm leading-5 whitespace-nowrap shadow-sm bg-yellow-600 bg-opacity-20 justify-center items-stretch mt-1.5 px-2 py-2 rounded self-start">
                Ranveer SIngh
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-zinc-400 bg-opacity-10 self-center justify-center items-stretch my-auto px-7 py-2 rounded max-md:px-5">
                Reply
              </div>
            </div>
            <div className="border bg-slate-900 flex items-start justify-between gap-5 mt-4 pl-4 pr-3 py-3 rounded-md border-solid border-gray-800 max-md:max-w-full max-md:flex-wrap">
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap">
                  Vijay Singh
                </div>
                <div className="text-indigo-300 text-center text-sm leading-5 whitespace-nowrap mt-2">
                  29 years
                </div>
              </div>
              <div className="overflow-hidden text-indigo-300 text-ellipsis text-sm leading-5 grow shrink basis-auto self-start max-md:max-w-full">
                I thank you to all police men who investigate my problem and
                solved within short period of time , I love Rajasthan Police{" "}
              </div>
              <div className="text-amber-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-yellow-600 bg-opacity-20 justify-center items-stretch mt-1.5 px-5 py-2 rounded self-start max-md:pl-5">
                Dogesh
              </div>
              <div className="text-indigo-300 text-center text-sm leading-5 self-start">
                25.12.23
                <br />
                Monday
              </div>
              <div className="text-indigo-500 text-center text-sm leading-5 whitespace-nowrap shadow-sm bg-zinc-400 bg-opacity-10 self-center justify-center items-stretch my-auto px-7 py-2 rounded max-md:px-5">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default policeDash;
