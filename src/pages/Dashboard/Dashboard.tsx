import React from 'react'
import PageWrapper from '../../components/PageWrapper'

interface Props {

}

const Dashboard = (props: Props) => {
    return (
        <PageWrapper>
            <div className="w-3/4">
                <div className="grid grid-cols-3 h-36 w-full gap-x-3">
                    <div className="bg-white shadow-lg flex items-center rounded-lg  px-2">
                        <div className="flex px-2 justify-center items-center">
                            <div className="h-24 w-24 flex items-center justify-center rounded-full bg-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg flex items-center rounded-lg  px-2">
                        <div className="flex px-2 justify-center items-center">
                            <div className="h-24 w-24 flex items-center justify-center rounded-full bg-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                        </div>
                        <div className="mx-4 flex flex-col">
                            <span>Total Arrears</span>
                            <span className="text-5xl my-2 font-bold">1,562</span>
                            <span>20% of 67,4567 </span>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg flex items-center rounded-lg  px-2">
                        <div className="flex px-2 justify-center items-center">
                            <div className="h-24 w-24 flex items-center justify-center rounded-full bg-indigo-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-white shadow-lg mt-6 rounded-lg p-3 w-full">
                    <div className="flex flex-row">
                        <div className="border cursor-pointer rounded-full items-center flex px-3 h-6">
                            <div className="h-2 w-2 bg-indigo-700 rounded-full"></div>
                            <span className="text-sm mx-4 font-medium">dummy data</span>
                        </div>
                        <div className="border cursor-pointer rounded-full mx-4 items-center flex px-3 h-6">
                            <div className="h-2 w-2 bg-indigo-700 rounded-full"></div>
                            <span className="text-sm mx-4 font-medium">dummy data</span>
                        </div>
                        <div className="border  rounded-full items-center flex px-3 h-6">
                            <div className="h-2 w-2 bg-indigo-700 rounded-full"></div>
                            <span className="text-sm mx-4 font-medium">dummy data</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-auto"></div>
        </PageWrapper>
    )
}

export default Dashboard
