import React, { useState } from 'react';

function UrduTranslateButton() {
  const [isUrdu, setIsUrdu] = useState(false);
  const [buttonText, setButtonText] = useState('Translate to Urdu');
  const [displayedText, setDisplayedText] = useState('This is a sample text.');

  const englishText = 'This is a Physical AI & Humanoid Robotics — Essentials.';
  const urduText = 'یہ ایک فزیکل اے آئی اور ہیومنائیڈ روبوٹکس — بنیادی اصول ہے۔'; 

  const toggleLanguage = () => {
    if (isUrdu) {
      setButtonText('Translate to Urdu');
      setDisplayedText(englishText);
    } else {
      setButtonText('Switch to English');
      setDisplayedText(urduText);
    }
    setIsUrdu(!isUrdu);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        onClick={toggleLanguage}
        style={{
          padding: '10px 18px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#f5a623', // gold button
          color: '#111', // dark text
          border: '1px solid #f5a623',
          borderRadius: '6px',
          fontWeight: '600',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e09b1a'; // hover darker gold
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f5a623';
        }}
      >
        {buttonText}
      </button>
      <p
        style={{
          marginTop: '12px',
          fontSize: '18px',
          color: '#fff', // white text
          backgroundColor: '#111', // dark black background
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #333',
          maxWidth: '500px',
        }}
      >
        {displayedText}
      </p>
    </div>
  );
}

export default UrduTranslateButton;
