'use client'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../component/Layout';
const BeekeeperSettings = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const [sidebarPosition, setSidebarPosition] = useState('left');
    const [selectedTheme, setSelectedTheme] = useState('light');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedRegion, setSelectedRegion] = useState('US');
    const [accessibilityEnabled, setAccessibilityEnabled] = useState(false);
    const [advancedOption, setAdvancedOption] = useState('option1');
  const { t } = useTranslation();
    const handleSaveChanges = () => {
        if (newPassword !== confirmPassword) {
            setErrorMessage('New passwords do not match.');
        } else {
            setSuccessMessage('Changes saved successfully.');
        }
    };
    const handleSidebarSettings = (position: React.SetStateAction<string>) => {
        setSidebarPosition(position);
    };
    const handleThemeSettings = (theme: React.SetStateAction<string>) => {
        setSelectedTheme(theme);
    };
    const handleLanguageRegionSettings = (language: React.SetStateAction<string>, region: React.SetStateAction<string>) => {
        setSelectedLanguage(language);
        setSelectedRegion(region);
    };
    const handleAccessibilitySettings = (isEnabled: boolean | ((prevState: boolean) => boolean)) => {
        setAccessibilityEnabled(isEnabled);
    };
    const handleAdvancedSettings = (option: React.SetStateAction<string>) => {
        setAdvancedOption(option);
    };
    return (
        <Layout>
        <div className="container mx-auto mt-24 p-4 ml-96 mr-auto" id='settings'>
            <h1 className="text-2xl font-bold mb-4 text-custom-orange">Account Settings</h1>
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                    {errorMessage}
                </div>
            )}
            <form>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-custom-color">Sidebar</h2>
                    <div className="mb-2 w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 ">Sidebar Position</label>
                        <select
                            className="form-select mt-1 block w-full rounded-md border-gray-300"
                            value={sidebarPosition}
                            onChange={(e) => handleSidebarSettings(e.target.value)}
                        >
                            <option value="left">Left</option>
                            <option value="right">Right</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-custom-color">Themes</h2>
                    <div className="mb-2 w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Select Theme</label>
                        <select
                            className="form-select mt-1 block w-full rounded-md border-gray-300"
                            value={selectedTheme}
                            onChange={(e) => handleThemeSettings(e.target.value)}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-custom-color">Language & Region</h2>
                    <div className="container mx-auto mt-4 p-4 w-full md:w-1/2 ml-4">
                        {/* ... */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">{t('selectLanguage')}</label>
                            <select
                                className="form-select mt-1 block w-full rounded-md border-gray-300"
                                value={selectedLanguage}
                                onChange={(e) => handleLanguageRegionSettings(e.target.value, selectedRegion)}
                            >
                                <option value="en">{t('english')}</option>
                                <option value="sw">{t('kiswahili')}</option>
                            </select>
                        </div>
                        {/* ... */}
                    </div>
                    <div className="mb-2 w-full md:w-1/2">
                        <label className="block text-sm font-medium text-gray-700 text-custom-color">Select Region</label>
                        <select
                            className="form-select mt-1 block w-full rounded-md border-gray-300"
                            value={selectedRegion}
                            onChange={(e) => handleLanguageRegionSettings(selectedLanguage, e.target.value)}
                        >
                            <option value="US">Nairobi</option>
                            <option value="UK">Kajiado</option>
                            <option value="UK">Kitui</option>
                            <option value="UK">Baringo</option>
                            <option value="UK">Makueni</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4 w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2 text-custom-color">Accessibility</h2>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Enable Accessibility</label>
                        <input
                            type="checkbox"
                            className="form-checkbox mt-1"
                            checked={accessibilityEnabled}
                            onChange={(e) => handleAccessibilitySettings(e.target.checked)}
                        />
                    </div>
                </div>
                <div className="mb-4 w-full md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2 text-custom-color">Advanced</h2>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">Select Option</label>
                        <select
                            className="form-select mt-1 block w-full rounded-md border-gray-300"
                            value={advancedOption}
                            onChange={(e) => handleAdvancedSettings(e.target.value)}
                        >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
                <button
                    type="button"
                    className="bg-custom-orange hover:bg-custom-color text-white font-bold py-2 px-4 rounded"
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </button>
            </form>
        </div>
        </Layout>
    );
};
export default BeekeeperSettings;