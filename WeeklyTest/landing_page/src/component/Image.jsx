import React from 'react'

const Image = () => {

    const photo = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }, {
            id: 2,
            img: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }, {
            id: 3,
            img: "https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?b=1&s=170667a&w=0&k=20&c=hneWKKCxBCUN0SLnewghFPW3BI_WWqri_mfXdmHfJ1Y=",
        }, {
            id: 4,
            img: "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?b=1&s=170667a&w=0&k=20&c=rR8QkCJuP2rRLXgDHwHwgZGtqHDFf4WFhIz_FpB9IRs=",
        }, {
            id: 5,
            img: "https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }, {
            id: 6,
            img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }, {
            id: 7,
            img: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }, {
            id: 8,
            img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]

  return (
    <div className='imageFooterRightSection'>
        {photo.map(e => {
            return (
                <img src={e.img} alt="no-pic" key={e.id} />
            )
        })}
    </div>
  )
}

export default Image