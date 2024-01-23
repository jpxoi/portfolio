function WorkFilters() {
    return (
        <div className="work__filters">
            <span className="work__item active-work" data-filter="all">All</span>
            <span className="work__item" data-filter=".web">Web</span>
            <span className="work__item" data-filter=".ai">AI</span>
        </div>
    )
}

export default WorkFilters