import WorkFilters from "../Components/WorkFilters";
import WorkGridContainer from "../Components/WorkGridContainer";

function Work() {
    return (
        <section className="work section" id="work">
            <div className="span section__subtitle">My Work</div>
            <h2 className="section__title">Portfolio</h2>

            <WorkFilters />

            <WorkGridContainer />
        </section>
    );
}

export default Work;