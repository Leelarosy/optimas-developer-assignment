import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [loginuser, setLoginuser] = useState([]);

    useEffect(() => {
        axios.get("./local.json")
            .then((res) => { setLoginuser(res.data); console.log(res.data) })
            .catch(err => console.log(err))
    }, []);


    const renderTable = () => {
        return loginuser.map(user => {
            return (
                <tr>
                    <td className='border border-blue-950'><img src="../images/d-arr.png" alt /></td>
                    <td className='border border-blue-950'>Emp-{user.id}</td>
                    <td className='border border-blue-950'>{user.name}</td>
                    <td className='border border-blue-950'>{user.email}</td>
                    <td className='border border-blue-950'>{user.phone}</td>
                    <td className='border border-blue-950'>{user.noprojects}</td>
                    <td className='border border-blue-950'>{user.designation}</td>
                    <td className='border border-blue-950'>VIEW</td>
                </tr>
            )
        })
    }

    return (
        <>
            <div>
                <div className='flex top-image'>
                    <div className="logo flex-none pl-2.5 pt-2.5">
                        <img src="../images/image-11.png" alt="" />
                    </div>
                    <div className='dashboard flex-auto flex place-content-center relative'>
                        <div className='grid grid-cols-4 items-end justify-items-center dash-bg'>
                            <div className='p-10 relative'>
                                <span className='text-center'><img src="../images/dash.png" alt="" className='mx-auto my-0' /></span>
                                <span className='text-white text-sm'>Dashboard</span>

                            </div>
                            <div className='p-10 active relative'> <span className='text-center'><img src="../images/userdash.png" alt="" className='mx-auto my-0' /></span>
                                <span className='text-sm'>Users</span></div>
                            <div className='p-10 relative'> <span className='text-center'><img src="../images/roles.png" alt="" className='mx-auto my-0' /></span>
                                <span className='text-white text-sm'>Roles</span></div>
                            <div className='p-10 relative'> <span className='text-center'><img src="../images/setting.png" alt="" className='mx-auto my-0' /></span>
                                <span className='text-white text-sm'>Setting</span></div>
                        </div>
                        <div className='absolute -bottom-[16px]'><img src="../images/minimize.png" alt="" /></div>
                    </div>
                </div>
                <section className='px-28 mt-16'>
                    <h1 className='text-white text-lg'>Admin</h1>
                    <div class="cta-g my-10">
                        <button className='active'>Users</button>
                        <button>User Groups</button>

                    </div>
                    <div className='flex flex-auto items-center'>
                        <div className='calc-cta flex flex-auto justify-items-center items-center'>
                            <button className='text-white flex mr-2.5'><img src="../images/book.png" alt className='mr-0.5' /> Definitions - 58</button>
                            <button className='text-white flex'><img src="../images/tickcircle.png" alt className='mr-0.5' /> Pending</button>
                        </div>
                        <div> <button className='add-user text-sm text-white'>+ Add User</button></div>
                    </div>
                    <table class="table-fixed   w-full text-white">
                        <tr className='bg-head'>
                            <th className='border border-blue-950'></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between"><span>User ID</span> <img src="../images/d-arr.png" alt /> <img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between">User Name <img src="../images/d-arr.png" alt /><img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between">Email ID <img src="../images/d-arr.png" alt /><img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between">Phone <img src="../images/d-arr.png" alt /><img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between">No of Projects <img src="../images/d-arr.png" alt /><img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'><div className="grid grid-flow-col auto-cols-max items-center justify-between">Designation <img src="../images/d-arr.png" alt /><img src="../images/filter.png" alt /></div></th>
                            <th className='border border-blue-950'>Actions</th>
                        </tr>
                        <tbody>{renderTable()}</tbody>

                    </table>
                </section>
                <section class="mt-11 flex flex-auto justify-between">
            <div> <img src="../images/botton-left.png" alt="" /></div>
            
            <div> <img src="../images/botton-right.png" alt="" /></div>
          </section>
            </div>
        </>
    )
}

export default Users;