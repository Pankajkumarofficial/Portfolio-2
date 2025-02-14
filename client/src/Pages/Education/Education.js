import React from 'react'
import './Education.css'
import { MdOutlineCastForEducation } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    return (
        <>
            <div className="container education" id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education details</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2021 - present"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdOutlineCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title">B.Tech CSIT</h3>
                        <h4 className="vertical-timeline-element-subtitle">PDM Bahadurgarh, IN</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2020 - 2021"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<MdOutlineCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title">12th Standard</h3>
                        <h4 className="vertical-timeline-element-subtitle">VBS Sampla, IN</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education
