import Card from "../Card/Card";
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
                    {
                        [...Array(6)].map((u, i) =>
                            <div className={Style.cardWrapper} key={i}>
                                <Card
                                    title={"Join us for the annual"}
                                    article={"Completed"}
                                    body={"Adeolu Ademuyiwa"}
                                />
                            </div>
                        )
                    }
                </section>
            </aside>
            <aside>
                <div className={Style.contentDetails}>
                </div>
            </aside>
        </div>

    )
}

export default Event;