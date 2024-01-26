function ReactBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#00dcff] hover:text-[#00dcff] py-1 px-2 items-center">
            <i className="bx bxl-react"></i>
            ReactJS
        </span>
    )
}

function TailwindBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#00c0fe] hover:text-[#00c0fe] py-1 px-2 items-center">
            <i className="bx bxl-tailwind-css"></i>
            TailwindCSS
        </span>
    )
}

function HTMLBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#F06529] hover:text-[#F06529] py-1 px-2 items-center">
            <i className="bx bxl-html5"></i>
            HTML
        </span>
    )
}

function CSSBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#264de4] hover:text-[#264de4] py-1 px-2 items-center">
            <i className="bx bxl-css3"></i>
            CSS
        </span>
    )
}

function JavaScriptBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#F0DB4F] hover:text-[#F0DB4F] py-1 px-2 items-center">
            <i className="bx bxl-javascript"></i>
            JavaScript
        </span>
    )
}

function FlaskBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#ffffff] hover:text-[#000000] py-1 px-2 items-center">
            <i className="bx bxl-flask"></i>
            Flask
        </span>
    )
}

function PythonBadge() {
    return (
        <span className="badge flex gap-x-2 rounded-full text-xs bg-body_color text-[#3776AB] hover:text-[#3776AB] py-1 px-2 items-center">
            <i className="bx bxl-python"></i>
            Python
        </span>
    )
}

export { ReactBadge, TailwindBadge, HTMLBadge, CSSBadge, JavaScriptBadge, FlaskBadge, PythonBadge }