import GeneratePass from "../GeneratePassword/GeneratePassword";

function App() {
  return (
    <div className="grid h-full min-h-screen py-20 transition-all duration-300 bg-gray-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 place-items-center">
      <div className="container mx-auto ">
        <GeneratePass />
      </div>
    </div>
  );
}

export default App;
