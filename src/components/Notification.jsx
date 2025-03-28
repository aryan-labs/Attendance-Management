import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

export default function Notification() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [attendanceReminders, setAttendanceReminders] = useState(false);
  const [lowAttendanceAlerts, setLowAttendanceAlerts] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(false);


  const saveSettings = () => {
    const settings = {
      emailNotifications,
      pushNotifications,
      attendanceReminders,
      lowAttendanceAlerts,
      weeklyReports,
    };
    console.log('Saved Settings:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div>
      <div className="text-gray-200 p-4">
        <div className="p-4">
          <h1 className="font-bold text-2xl">Notification Settings</h1>
          <h5 className="text-gray-400">Manage how you receive notifications</h5>
        </div>

        <div className="p-4">
          {/* Email Notifications */}
          <div className="flex justify-between items-center">
            <div>
              Email Notifications
              <p className="text-gray-400">Receive notifications via email</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications((prev) => !prev)}
                  sx={{
                    '& .MuiSwitch-switchBase': {
                      color: '#b0b0b0', // Gray thumb when OFF
                    },
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#2196f3', // Blue thumb when ON
                    },
                    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                      backgroundColor: '#b0b0b0', // Gray track when OFF
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#2196f3', // Blue track when ON
                    },
                  }}
                />
              }
              label=""
            />
          </div>

          {/* Push Notifications */}
          <div className="flex justify-between items-center pt-8 pb-4">
            <div>
              Push Notifications
              <p className="text-gray-400">Receive notifications on your device</p>
            </div>
            <FormControlLabel
              control={
                <Switch
                  checked={pushNotifications}
                  onChange={() => setPushNotifications((prev) => !prev)}
                  sx={{
                    '& .MuiSwitch-switchBase': {
                      color: '#b0b0b0', // Gray thumb when OFF
                    },
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#2196f3', // Blue thumb when ON
                    },
                    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                      backgroundColor: '#b0b0b0', // Gray track when OFF
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#2196f3', // Blue track when ON
                    },
                  }}
                />
              }
              label=""
            />
          </div>

          <hr />

          <div>
            <p className="pt-8 pb-5 text-lg font-bold">Notification Types</p>

            {/* Attendance Reminders */}
            <div className="flex justify-between items-center">
              <div>
                Attendance Reminders
                <p className="text-gray-400">Daily reminders to mark your attendance</p>
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={attendanceReminders}
                    onChange={() => setAttendanceReminders((prev) => !prev)}
                    sx={{
                      '& .MuiSwitch-switchBase': {
                        color: '#b0b0b0', // Gray thumb when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#2196f3', // Blue thumb when ON
                      },
                      '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                        backgroundColor: '#b0b0b0', // Gray track when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#2196f3', // Blue track when ON
                      },
                    }}
                  />
                }
                label=""
              />
            </div>

            {/* Low Attendance Alerts */}
            <div className="flex justify-between items-center pt-5 pb-5">
              <div>
                Low Attendance Alerts
                <p className="text-gray-400">Get alerts when your attendance falls below required percentage</p>
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={lowAttendanceAlerts}
                    onChange={() => setLowAttendanceAlerts((prev) => !prev)}
                    sx={{
                      '& .MuiSwitch-switchBase': {
                        color: '#b0b0b0', // Gray thumb when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#2196f3', // Blue thumb when ON
                      },
                      '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                        backgroundColor: '#b0b0b0', // Gray track when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#2196f3', // Blue track when ON
                      },
                    }}
                  />
                }
                label=""
              />
            </div>

            {/* Weekly Reports */}
            <div className="flex justify-between items-center pb-4">
              <div>
                Weekly Reports
                <p className="text-gray-400">Receive weekly attendance summary reports</p>
              </div>
              <FormControlLabel
                control={
                  <Switch
                    checked={weeklyReports}
                    onChange={() => setWeeklyReports((prev) => !prev)}
                    sx={{
                      '& .MuiSwitch-switchBase': {
                        color: '#b0b0b0', // Gray thumb when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#2196f3', // Blue thumb when ON
                      },
                      '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                        backgroundColor: '#b0b0b0', // Gray track when OFF
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#2196f3', // Blue track when ON
                      },
                    }}
                  />
                }
                label=""
              />
            </div>

          </div>
        </div>
          <button
            className='bg-gray-100 text-black p-2 ml-4 rounded-lg hover:scale-110 duration-200 hover:cursor-pointer'
            onClick={saveSettings}
            >Save Notification Settings
          </button>
      </div>
      
    </div>
  );
}
