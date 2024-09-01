
import React, { useState, useEffect } from 'react';
import './user-interface.css';

export default function Main() {
  const [showNewInterface, setShowNewInterface] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isDataShared, setIsDataShared] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (showNewInterface) {
      // 导入第二个界面的 CSS
      import('./infor-collection.css');
    }
  }, [showNewInterface]);

  const handleRobotCheck = () => {
    setIsRobotChecked(!isRobotChecked);
  };

  const handleDataShareCheck = () => {
    setIsDataShared(!isDataShared);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleStart = () => {
    setShowNewInterface(true);
  };

  const handleSkip = () => {
    setShowNewInterface(true);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  if (showNewInterface) {
    return (
      <div className='main-container'>
        <div className='flex-column-c'>
          <button className='extended-fab'>
            <div className='state-layer'>
              <span className='label-text-en'>EN</span>
            </div>
          </button>
          <div className='frame'>
            <div className='subtract' />
            <div className='frame-1'>
              <div className='component'>
                <button className='group'>
                  <div className='group-2'>
                    <span className='new-chat'>New chat</span>
                    <div className='vuesax-linear-add'>
                      <div className='vuesax-linear-add-3'>
                        <div className='add' />
                      </div>
                    </div>
                  </div>
                  <div className='rectangle' />
                </button>
                <div className='group-4'>
                  <div className='vuesax-linear-search-normal'>
                    <div className='vuesax-linear-search-normal-5'>
                      <div className='search-normal' />
                    </div>
                  </div>
                  <div className='rectangle-6' />
                </div>
              </div>
              {/* 其他侧边栏内容 */}
            </div>
            <div className='group-2c'>
              <div className='group-2d'>
                <div className='group-2e' />
                <span className='swisp-gpt'>SWISP GPT</span>
              </div>
            </div>
            <div className='frame-2f'>
              <button className='frame-30'>
                <div className='frame-31'>
                  <div className='frame-32'>
                    <div className='vuesax-linear-setting'>
                      <div className='vuesax-linear-setting-33'>
                        <div className='setting' />
                      </div>
                    </div>
                  </div>
                  <span className='settings'>Settings</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='flex-column-acdd'>
          <div className='frame-34'>
            <div className='group-35' />
            <div className='frame-36'>
              <div className='frame-37'>
                <div className='clarity-plane-line' />
                <span className='plan-a-relaxing-day'>Plan a relaxing day</span>
              </div>
              <div className='frame-38'>
                <div className='group-39' />
                <span className='nostalgia-kindergarden'>
                  Nostalgia to a kindergarden
                </span>
              </div>
              <div className='frame-3a'>
                <div className='carbon-idea'>
                  <div className='vector-3b' />
                </div>
                <span className='activities-friends-new-city'>
                  Activities to make <br />
                  friends in new city
                </span>
              </div>
              <div className='frame-3c'>
                <div className='projector-screen-light'>
                  <div className='vector-3d' />
                </div>
                <span className='software-project'>Software Project</span>
              </div>
            </div>
          </div>
          <div className='type'>
            <input 
              className='type-input' 
              value={inputText}
              onChange={handleInputChange}
              // placeholder="What's in your mind?..."
            />
            <div className='frame-3e'>
              <div className='frame-3f'>
                <div className='group-40'>
                  <div className='group-41' />
                </div>
                <span className='whats-mind'>What's in your mind?...</span>
              </div>
            </div>
            <div className='frame-42'>
              <div className='vuesax-linear-send'>
                <div className='vuesax-linear-send-43'>
                  <div className='send' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='main-container'>
      <div className='content'>
        <div className='frame'>
          <div className='logo' />
          <div className='group' />
          <span className='start-chat'>Start a Chat</span>
        </div>
        <div className='frame-1'>
          <div className='basic-info'>
            <div className='frame-2'>
              <span className='choose-country'>
                Choose your region or country
              </span>
              <div className='frame-3'>
                <div className='text-field'>
                  <select 
                    className='country-select'
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <option value="">Select a country</option>
                    <option value="australia">Australia</option>
                    {/* Add more countries here as needed */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='frame-5'>
            <div className='gender'>
              <div className='whats-your-gender'>
                <span className='whats-your-gender-6'>
                  What's your gender?
                </span>
                <span className='optional'>(optional)</span>
              </div>
              <div className='frame-7'>
                <label className='radio-button'>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={selectedGender === 'female'}
                    onChange={handleGenderChange}
                    className='radio-button-input'
                  />
                  <span className='radio-button-custom'></span>
                  <span className='text-gender'>Female</span>
                </label>
                <label className='radio-button'>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={selectedGender === 'male'}
                    onChange={handleGenderChange}
                    className='radio-button-input'
                  />
                  <span className='radio-button-custom'></span>
                  <span className='text-gender'>Male</span>
                </label>
                <label className='radio-button'>
                  <input
                    type="radio"
                    name="gender"
                    value="non-binary"
                    checked={selectedGender === 'non-binary'}
                    onChange={handleGenderChange}
                    className='radio-button-input'
                  />
                  <span className='radio-button-custom'></span>
                  <span className='text-gender'>Non-binary</span>
                </label>
              </div>
            </div>
            <div className='frame-d'>
              <span className='date-of-birth'>What's your date of birth?</span>
              <div className='frame-e'>
                <div className='text-field-f'>
                  <div className='frame-10'>
                    <span className='label'>Month</span>
                  </div>
                  <select
                    className='date-select'
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  >
                    <option value="">Select Month</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div className='text-field-13'>
                  <div className='frame-14'>
                    <span className='label-15'>Date</span>
                  </div>
                  <select
                    className='date-select'
                    value={selectedDate}
                    onChange={handleDateChange}
                  >
                    <option value="">Select Date</option>
                    {dates.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>
                <div className='text-field-18'>
                  <div className='frame-19'>
                    <span className='label-1a'>Year</span>
                  </div>
                  <select
                    className='date-select'
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='frame-1d'>
            <div className='check-box'>
              <label className="custom-checkbox-label">
                <input 
                  type="checkbox" 
                  className='custom-checkbox-input' 
                  checked={isDataShared}
                  onChange={handleDataShareCheck}
                />
                <span className="checkmark"></span>
                <span className='receive-emails'>
                  Share my registration data with our content providers for <br />
                  research purposes.
                </span>
              </label>
            </div>
            <div className='link-text'>
              <div className='terms-privacy-policy'>
                <span className='create-account'>
                  By creating an account, you agree to the
                </span>
                <span className='terms-of-use'>Terms of use</span>
                <span className='empty'> </span>
                <span className='create-account-1f'>and</span>
                <span className='empty-20'> </span>
                <span className='terms-of-use-21'>Privacy Policy.</span>
                <span className='empty-22'> </span>
              </div>
            </div>
            <div className='not-a-robot-checkbox'>
              <label className="custom-checkbox-label">
                <input 
                  type="checkbox" 
                  className='custom-checkbox-input' 
                  checked={isRobotChecked}
                  onChange={handleRobotCheck}
                />
                <span className="checkmark"></span>
                <span className='not-a-robot'>I'm not a robot</span>
              </label>
              <div className='google-recaptcha-official' />
            </div>
          </div>
          <div className='frame-25'>
            <button className='button' onClick={handleStart}>
              <div className='button-26'>
                <div className='frame-27'>
                  <span className='sign-up-28'>Start</span>
                </div>
              </div>
            </button>
            <div className='have-an-account-login'>
              <div className='have-an-account-login-29'>
                <span 
                  className='already-have-an-account' 
                  onClick={handleSkip}
                  style={{ cursor: 'pointer' }}
                >
                  skip
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


