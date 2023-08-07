import React from 'react'

export default function Header2() {
    return (
        <>
            <header>
                <div class="text-dark fs-3 fw-bold d-flex justify-content-between p-4 ms-8">
                    <div class="nav-item">
                        <button className="text-dark " type="button">MyTinary </button>
                    </div>
                    <div className='d-flex gap-4 me-8'>

                        <button className="text-dark fs-4 text-center" type='button' >Home</button>

                        <button className="text-dark fs-4 text-center" type='button' >Cities</button>



                        <button className="text-center btn d-flex align-items-center" style={{ background: "#7c3aed", color: "white" }} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>Login</button>


                    </div>
                </div>
            </header>
        </>
    )
}