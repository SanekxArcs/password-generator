import GeneratePass from "../GeneratePassword/GeneratePassword";

function App() {
  return (
    <div className="grid py-20 bg-gray-100 dark:bg-slate-900 dark:text-slate-100 text-slate-900 place-items-center min-h-screen h-full">
      <div className="container mx-auto ">
        <GeneratePass />
      </div>
    </div>
  );
}

export default App;
