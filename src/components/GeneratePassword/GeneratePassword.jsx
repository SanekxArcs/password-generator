import { useState } from "react";
import { generatePassword } from "./GenPassModule";
import { copyToClipboard } from "./CopyModule";

function GeneratePass() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState("");
  const [passwordsList, setPasswordsList] = useState([]);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setPassword(newPassword);
    setPasswordsList([...passwordsList, newPassword]);
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(password);
  };

  const handleClearPasswordsList = () => {
    setPasswordsList([]);
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const handlePasswordResetAll = () => {
    setPassword("");
    handleClearPasswordsList();
  };

  return (
    <div className="mx-auto transition-all duration-500 ">
      <h1 className="w-full mb-10 text-3xl font-bold text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-slate-800 dark:text-slate-200">
        Password Generator
      </h1>
      <div className="container mx-auto w-80">
        <div className="flex flex-col items-center justify-center p-5 mb-4 rounded-md bg-slate-800">
          <label className="mb-5 text-3xl font-medium text-slate-200 dark:text-slate-200">
            Strength:<span className="ml-2">{passwordLength}</span>
          </label>
          <input
            type="range"
            min="8"
            max="16"
            value={passwordLength}
            onChange={handlePasswordLengthChange}
            className="w-full text-slate-800"
          />

          <span className="opacity-50">from 8 to 16 symbols</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <button
            onClick={handleGeneratePassword}
            className="w-full px-4 py-2 text-xl font-medium uppercase transition-all duration-300 rounded-md shadow text-slate-100 bg-emerald-700 hover:bg-slate-200 hover:text-emerald-700 hover:-translate-y-1"
          >
            Generate Password
          </button>

          <button
            onClick={handlePasswordResetAll}
            disabled={!password}
            className={`${
              password ? "bg-red-500" : "bg-gray-300"
            } px-4 py-2 shadow font-medium text-xl uppercase text-slate-100 bg-slate-700 rounded-md w-full hover:bg-slate-200 hover:text-slate-700 hover:-translate-y-1 transition-all duration-300`}
          >
            Reset all
          </button>
        </div>

        <div className="mb-4">
          {password && (
            <div className="w-full p-4 mb-4 rounded-md bg-slate-800">
              <p className="mb-2 text-lg font-bold text-center uppercase text-slate-200 dark:text-slate-200">
                Generated Password:
              </p>
              <input
                type="text"
                readOnly
                value={password}
                className="w-full px-2 py-1 font-bold text-center transition-all duration-300 border rounded-md bg-slate-300 hover:bg-slate-50 text-slate-800"
              />
              <button
                onClick={handleCopyToClipboard}
                disabled={!password}
                className={`${
                  password
                    ? "bg-yellow-500 hover:bg-slate-200 opacity-100"
                    : "bg-slate-200 hover:text-yellow-500  opacity-10"
                } px-4 py-2  mt-2 text-xl font-medium uppercase transition-all duration-300 rounded-md shadow text-slate-100 w-full hover:text-yellow-700 hover:-translate-y-1`}
              >
                Copy Password
              </button>
            </div>
          )}
          {passwordsList.length > 1 && (
            <div className="w-full p-4 transition-all duration-300 rounded-md bg-slate-800">
              <p className="mb-2 text-lg font-bold text-center uppercase text-slate-200 dark:text-slate-200">
                Previous Passwords:
              </p>
              {passwordsList.map((pw, i) => (
                <div key={i} className="mb-2">
                  <input
                    type="text"
                    readOnly
                    value={pw}
                    className="w-full px-2 py-1 font-bold text-center transition-all duration-300 rounded-md bg-slate-300 text-slate-800 hover:bg-slate-50"
                  />
                </div>
              ))}
              <button
                onClick={handleClearPasswordsList}
                className="w-full px-4 py-2 text-xl font-medium uppercase transition-all duration-300 bg-red-700 rounded-md shadow text-slate-100 hover:bg-slate-200 hover:text-red-700 hover:-translate-y-1"
              >
                Clear List
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeneratePass;
