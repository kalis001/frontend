import React from 'react'

export default function Map1() {
    let a = [1, "one", 2];
    a.push("end")
    return (
        <div>
            <ol>
                {
                    a.map((q) => {
                        return <li>{q}</li>
                    })
                }

            </ol>
        </div>
    )
}
