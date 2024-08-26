function ReactBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00dcff_0%,#22555d_50%,#00dcff_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#00dcff] hover:text-[#00dcff] py-1 px-2">
          <i className="bx bxl-react"></i>
          ReactJS
        </div>
      </span>
    </div>
  );
}

function TailwindBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00c0fe_0%,#163b46_50%,#00c0fe_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#00c0fe] hover:text-[#00c0fe] py-1 px-2">
          <i className="bx bxl-tailwind-css"></i>
          TailwindCSS
        </div>
      </span>
    </div>
  );
}

function HTMLBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F06529_0%,#522a19_50%,#F06529_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#F06529] hover:text-[#F06529] py-1 px-2">
          <i className="bx bxl-html5"></i>
          HTML
        </div>
      </span>
    </div>
  );
}

function CSSBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#264de4_0%,#1a2656_50%,#264de4_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#264de4] hover:text-[#264de4] py-1 px-2">
          <i className="bx bxl-css3"></i>
          CSS
        </div>
      </span>
    </div>
  );
}

function JavaScriptBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F0DB4F_0%,#4a441c_50%,#F0DB4F_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#F0DB4F] hover:text-[#F0DB4F] py-1 px-2">
          <i className="bx bxl-javascript"></i>
          JavaScript
        </div>
      </span>
    </div>
  );
}

function FlaskBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#000000_50%,#ffffff_100%)]"></span>
        <div id="flask-badge" className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#ffffff] hover:text-[#000000] py-1 px-2">
          <i className="bx bxl-flask"></i>
          Flask
        </div>
      </span>
    </div>
  );
}

function PythonBadge() {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3776AB_0%,#1a3347_50%,#3776AB_100%)]"></span>
        <div className="badge inline-flex gap-x-2 justify-center items-center w-full text-xs text-green-800 bg-green-100 rounded-full cursor-pointer bg-gray-900 backdrop-blur-3xl whitespace-nowrap text-[#3776AB] hover:text-[#3776AB] py-1 px-2">
          <i className="bx bxl-python"></i>
          Python
        </div>
      </span>
    </div>
  );
}

export {
  ReactBadge,
  TailwindBadge,
  HTMLBadge,
  CSSBadge,
  JavaScriptBadge,
  FlaskBadge,
  PythonBadge,
};
