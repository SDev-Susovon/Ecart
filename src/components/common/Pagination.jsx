import React, { useState, useEffect } from 'react'


const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [counter, setCounter] = useState(1);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }

        } else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }

        }

    }

    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value)
    }, [counter, showPerPage, onPaginationChange])

    return (
        <>

            <div className="" style={{marginLeft:"15px"}}>

                <button className="btn-btn-primary" style={{color:"white", backgroundColor:"#fe980f", padding:"5px 20px",border:"none" }} onClick={() => onButtonClick('prev')}>Prev</button>

                    {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li> */}

                <button className="btn-btn-primary pull-right" style={{marginRight:"15px", color:"white", backgroundColor:"#fe980f", padding:"5px 20px",border:"none" }} onClick={() => onButtonClick('next')}>Next</button>

            </div>

        </>
    )
}

export default Pagination