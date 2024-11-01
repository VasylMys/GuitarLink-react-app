import React from 'react';
import './style.css';

const SocialCardSection = () => {
  return (
    <section className="social-section bg-dark-light">
      <div id="social" className="social-section bg-dark-light">
        <div className="text-center">
          <p className="social-title font-sans text-bold title">Приєднуйтесь до нашої музичної спільноти</p>
          <p className="social-desc sub-title font-poppin">
            Якщо хочете бути в курсі останніх новин, <br />
            підписуйтеся на нас у соцмережах.
          </p>
        </div>
      </div>

      <div className="social-card-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', height: '40vh' }}>
        <div className="social-card">
          <div className="social-icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '100% 0px 0px',
                  }}
                ></span>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  src="images/youtube.webp"
                  alt="Youtube Logo"
                />
              </span>
            </a>
          </div>

          <div className="social-text">
            <a
              className="text-link d-flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/"
            >
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(255, 0, 0)' }}
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </div>
              <p
                style={{ color: 'rgb(255, 0, 0)' }}
                className="margin-0 text-bold font-sans"
              >
                YouTube
              </p>
            </a>
          </div>
        </div>

        <div className="social-card">
          <div className="social-icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: '0px',
                  margin: '0px',
                  padding: '0px',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '100% 0px 0px',
                  }}
                ></span>
                <img
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  src="images/instagram.webp"
                  alt="Instagram Logo"
                />
              </span>
            </a>
          </div>

          <div className="social-text">
            <a
              className="text-link d-flex"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#9f40ab' }}
                >
                  <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                  <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                </svg>
              </div>
              <p style={{ color: '#9f40ab' }} className="margin-0 text-bold font-sans">
                Instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialCardSection;
