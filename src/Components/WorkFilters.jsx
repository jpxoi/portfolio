import { useEffect } from "react"

function WorkFilters() {

    useEffect(() => {
        const linkWork = document.querySelectorAll(".work__item")

        function activeWork() {
            linkWork.forEach(l => l.classList.remove("active-work"))
            this.classList.add("active-work")
        }

        linkWork.forEach(l => l.addEventListener("click", activeWork))
    }, [])

    return (
        <div className="work__filters">
            <span className="work__item active-work" data-filter="all">All</span>
            <span className="work__item" data-filter=".web">Web</span>
            <span className="work__item" data-filter=".ai">AI</span>
        </div>
    )
}

export default WorkFilters