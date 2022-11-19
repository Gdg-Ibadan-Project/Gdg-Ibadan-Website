import { useState } from "react"
import Style from "./Event.module.scss";

function Event() {
    // const [state, setstate] = useState(initialState);

    return (
        <div className={Style.container} id="schedule">
            <aside className={Style.aside}>
                <section>
                    <h1>EVENT SCHEDULING</h1>
                    <p>Join us for the annual developer festival of sessions, workshops, training, codelabs, and much more by awesome.</p>
                </section>
                <section className={Style.scrollContainer}>
                    {/* working */}
                </section>
            </aside>
            <aside>
                <div className={Style.contentDetails}>
                    <section>

                    </section>
                </div>
            </aside>
        </div>
    )
}

export default Event;