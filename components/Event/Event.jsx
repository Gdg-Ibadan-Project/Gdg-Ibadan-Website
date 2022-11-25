import Card from "../Card/Card";
import Style from "./Event.module.scss";

function Event() {
    // const [state, setstate] = useState(initialState);

    return (
        <div className={Style.container} id="schedule">
            <aside className={Style.aside}>
                <section className={Style.sec}>
                    <div className={Style.header}>
                        <h1>Welcome to Devfest Live</h1>
                        <form action="">
                            <input type="search" placeholder="Search event by name" />
                            <select name="" id="">
                                <option value="">Filter By:</option>
                                <option value="">Ongoing</option>
                                <option value="">Completed</option>
                                <option value="">Upcoming</option>
                            </select>
                        </form>
                    </div>
                </section>
                <section className={Style.scrollContainer}>
                    {
                        [...Array(4)].map((u, i) =>
                            <div className={Style.cardWrapper} key={i}>
                                {/* <Card
                                    title={"Join us for the annual"}
                                    article={"Completed"}
                                    body={"Adeolu Ademuyiwa"}
                                /> */}
                                <Card type={'completed'} />
                            </div>
                        )
                    }
                </section>
            </aside>
        </div>

    )
}

export default Event;