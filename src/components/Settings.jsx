import React, { useState } from 'react';
import Notification from './Notification';
import Appearance from './Appearance';

export default function Settings() {
  const [activeSection, setActiveSection] = useState('Notification'); // Default section

  return (
    <>
      <div className="min-h-screen font-serif bg-[#2f2f2f]">
        <h1 className="bg-black h-16 mb-10"></h1>

        <div className="bg-[#0f0a0add] flex flex-col justify-center max-w-5xl p-5 rounded-lg ml-60">
          <h1 className="text-white font-bold text-2xl p-2">Settings</h1>
          <div className="flex flex-row bg-zinc-800 text-gray-400 p-3 mb-5 w-fit space-x-8 rounded-xl border-gray-400 border-b">

            <button
              className={`${
                activeSection === 'Account' ? 'text-white' : ''
              }`}
              onClick={() => setActiveSection('Account')}
            >
              Account
            </button>

            <button
              className={`${
                activeSection === 'Notification' ? 'text-white' : ''
              }`}
              onClick={() => setActiveSection('Notification')}
            >
              Notifications
            </button>

            <button
              className={`${
                activeSection === 'Appearance' ? 'text-white' : ''
              }`}
              onClick={() => setActiveSection('Appearance')}
            >
              Appearance
            </button>

            <button
              className={`${
                activeSection === 'Privacy' ? 'text-white' : ''
              }`}
              onClick={() => setActiveSection('Privacy')}
            >
              Privacy
            </button>
          </div>

          <div className="bg-[#0f0a0a] rounded-lg p-5 border-gray-400 border-x">
            
            {activeSection === 'Account' && <Account />}
            {activeSection === 'Appearance' && <Appearance />}
            {activeSection === 'Notification' && <Notification />}
            {activeSection === 'Privacy' && <Privacy />}
            
          </div>
        </div>
      </div>
    </>
  );
}
