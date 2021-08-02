/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import AdminContent from '../components/AdminContent'
import Sidebar from '../components/Sidebar'

interface Props {

}

const Admin = (props: Props) => {
    return (
        <Fragment>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <div className="h-screen flex overflow-hidden bg-gray-100">
                {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
                <Sidebar />

                <AdminContent />

            </div>

        </Fragment>
    )
}

export default Admin
