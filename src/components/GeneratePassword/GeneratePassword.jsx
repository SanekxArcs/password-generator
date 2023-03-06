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

  return (
    <div className="p-4 mx-auto w-80">
      <h1 className="mb-4 text-3xl font-bold">Password Generator</h1>
      <div className="flex flex-col items-center justify-center p-5 mb-4 rounded-md bg-slate-800">
        <label className="mr-2">Password Strength:</label>
        <input
          type="range"
          min="8"
          max="16"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
          className="w-1/2 text-slate-800"
        />
        <span className="ml-2">{passwordLength}</span>
      </div>
      <div className="flex flex-col gap-3 mb-4">
        <button
          onClick={handleGeneratePassword}
          className="w-full px-4 py-2 mr-2 text-white bg-blue-500 rounded-md"
        >
          Generate Password
        </button>
        <button
          onClick={handleCopyToClipboard}
          disabled={!password}
          className={`${
            password ? "bg-green-500" : "bg-gray-300"
          } text-white px-4 py-2 rounded-md mr-2 w-full`}
        >
          Copy Password
        </button>
        <button
          onClick={() => setPassword("")}
          disabled={!password}
          className={`${
            password ? "bg-red-500" : "bg-gray-300"
          } text-white px-4 py-2 rounded-md mr-2 w-full`}
        >
          Reset Generated Password
        </button>
      </div>
      <div className="mb-4">
        {password && (
          <div className="p-4 mb-4 border-2 border-gray-500 rounded-md">
            <p className="mb-2 font-bold">Generated Password:</p>
            <input
              type="text"
              readOnly
              value={password}
              className="w-full p-2 border border-gray-400 rounded-md text-slate-800"
            />
          </div>
        )}
        {passwordsList.length > 0 && (
          <div className="p-4 border-2 border-gray-500 rounded-md">
            <p className="mb-2 font-bold">Previous Passwords:</p>
            {passwordsList.map((pw, i) => (
              <div key={i} className="mb-2">
                <input
                  type="text"
                  readOnly
                  value={pw}
                  className="w-full p-2 border border-gray-400 rounded-md text-slate-800"
                />
              </div>
            ))}
            <button
              onClick={handleClearPasswordsList}
              className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-md"
            >
              Clear Passwords List
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneratePass;
