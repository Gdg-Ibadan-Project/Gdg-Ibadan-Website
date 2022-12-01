import { useState } from 'react';
import Card from "../Card/Card";
import Style from "./Event.module.scss";

function Event() {

    // const [state, setstate] = useState(initialState);

    const [eventStatus, setEventStatus] = useState('all');
    
    const [eventName, setEventName] = useState('');


    const onChangeHandler = (e) => {

        setEventStatus(e.target.value);
        
    }

    console.log(eventName)
    console.log( eventStatus)

    const onSearchChange = (e) => {

        const event = e.target.value

        setEventName(event)
        
    }

    const eventArr = Array(4);

    // let filterEventArray = eventArr.filter((event) => {

    //     if (event.type == eventStatus) {
            
    //         return event.type == eventStatus;
    //     }
        
    // })

    const filterByEventStatus = (event) => {

    //     if (typeof event.title == String) {
    //         return true
    //     }

    //    else if (event.title == eventStatus) {
            
    //         return event.title == eventStatus;
    //     }
        
        if (event.title) {

            if ( eventStatus.toLowerCase() == 'all') {
                return true
                
            }
            else if (event.title.toLowerCase() == eventStatus.toLowerCase()) {
                return true;
            }
        }
        
    
        // return true;
    }

    const filterByName = (event) => {

        // if (event.title.toLowerCase() == eventName.toLowerCase()) {

        //     return event.title.toLowerCase() == eventName.toLowerCase();
            
        // }

        return event?.name.toLowerCase().includes(eventName.toLowerCase());
            
        
    }


    // let filterEventByName = filterEventArray.filter((event) => {

    //     if (event.title.toLowerCase() == eventName.toLowerCase()) {

    //         return event.title.toLowerCase() == eventName.toLowerCase();
            
    //     }
        
    // })

    const eventArray = [{id:1 , name:'Frontend Optimization with React', title:'completed'} , {id:2 , name:'Frontend Optimization with React', title:'completed'},{id:3 , name:'Frontend Optimization with React', title:'completed'},{id:4 , name:'Frontend Optimization with React', title:'completed'}]

    return (
        <div className={Style.container} id="schedule">
            <aside className={Style.aside}>
                <section className={Style.sec}>
                    <div className={Style.header}>
                        <h1>Welcome to Devfest Live</h1>
                        <form action="">
                            
                            <input type="search" placeholder="Search event by name" onChange={onSearchChange} />

                            <select placeholder='Filter By' name="" id="" onChange={onChangeHandler}>
                                <option value="" disabled>Filter By:</option>
                                <option value='All'>All</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                                <option value="Upcoming">Upcoming</option>
                            </select>
                        </form>
                    </div>
                </section>
                {/* [...Array(4)] */}
                <section className={Style.scrollContainer}>
                    {
                       eventArray.filter(filterByEventStatus).filter(filterByName).map((event, i) =>
                            <div className={Style.cardWrapper} key={i}>
                                {/* <Card
                                    title={"Join us for the annual"}
                                    article={"Completed"}
                                    body={"Adeolu Ademuyiwa"}
                                /> */}
                                <Card type={event.title} title={event.name} />
                            </div>
                        )
                    }
                </section>
            </aside>
        </div>

    )
}

export default Event;