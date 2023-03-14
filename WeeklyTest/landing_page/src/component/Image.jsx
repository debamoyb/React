import React from 'react'

const Image = () => {

    const photo = [
        {
            id: 1,
            img: "https://media.istockphoto.com/id/1419530650/photo/leadership-management-and-teamwork-between-ceo-and-senior-manager-in-a-business-meeting-in.jpg?b=1&s=170667a&w=0&k=20&c=CJOhQ2EVC8t3JrWilqAPo4ys7FJ48GMoU8ahitoQ_c4=",
        }, {
            id: 2,
            img: "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?b=1&s=170667a&w=0&k=20&c=XCzSqjgn02etddi527fy6Q9Dz_MtPYKKc-MMbhS3kK0=",
        }, {
            id: 3,
            img: "https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?b=1&s=170667a&w=0&k=20&c=hneWKKCxBCUN0SLnewghFPW3BI_WWqri_mfXdmHfJ1Y=",
        }, {
            id: 4,
            img: "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?b=1&s=170667a&w=0&k=20&c=rR8QkCJuP2rRLXgDHwHwgZGtqHDFf4WFhIz_FpB9IRs=",
        }, {
            id: 5,
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }, {
            id: 6,
            img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }, {
            id: 7,
            img: "https://media.istockphoto.com/id/1400474070/photo/what-you-need-to-now-word-on-yellow-paper-with-office-tools-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=pjzbOUeOrE2sn-ppCu8Q0fZzLv83iJHNhZmo67vnFYg=",
        }, {
            id: 8,
            img: "https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=TH7fxRJwwlUKThNim9J9xYwH3j_Ih8m3WPTSew-Xaw4=",
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