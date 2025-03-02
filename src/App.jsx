import React from "react";
import { useSidebar } from "./context/SidebarContext"; // Import the hook
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const { isSidebarOpen, toggleSidebar } = useSidebar(); // Use the hook

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-0 md:ml-64" : "ml-0 md:ml-16"
          }`}
        >
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;



// if you want to use here in only app.jsx and not need to wrap in sidebar provider main.jsx

// export default App;

// import React from "react";
// import { SidebarProvider, useSidebar } from "./context/SidebarContext";  // Import context and hook
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <SidebarProvider> {/* Move SidebarProvider to wrap the entire app */}
//       <AppContent /> {/* Wrap your main content inside a new component */}
//     </SidebarProvider>
//   );
// }

// // This component has access to SidebarProvider and can use useSidebar
// const AppContent = () => {
//   const { isSidebarOpen, toggleSidebar } = useSidebar();  // Now it works!

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1">
//         {/* Sidebar component */}
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <main
//           className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
//             isSidebarOpen ? "ml-0 md:ml-64" : "ml-0 md:ml-16"
//           }`}
//         >
//           {/* Main content */}
//           <Profile />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;