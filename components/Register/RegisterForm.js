import { useEffect, useState } from "react";


const RegisterForm = () => {
  const [typing, setTyping] = useState('number');
  const [placeholder, setPlaceholder] = useState('Telefon orqali');


  useEffect(() => {
    if (typing === 'number') {
      setPlaceholder('📞 Telefon orqali kirish');
    } else {
      setPlaceholder(' ✉️ Pochta orqali');
    }
  }, [typing]); 
  

  return (
    <div className="reg__wrapper bg-body-2 section_gap_y_bottom__1 section_gap_y_top__1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="reg_form__wrap">
              <div className="reg_form__top">
                <img
                  src="/images/shapes/reg-shapes.png"
                  alt=""
                  className="reg-shapes"
                />
                <img src="/images/shapes/reg-fig.png" alt="" />
                <h4>Soff Works</h4>
                <p>
                  Login orqali <a href="login.html">Kirish</a>
                </p>
              </div>

              <div className="reg__inputs mt-40 flex-column flex-lg-row">
                <div className="reg__left order-2 order-lg-0">
                  <div className="reg__left mt-4 mb-4 d-sm-flex gap-2">
                    <button 
                      onClick={() => setTyping('number')}
                      className="custom-btn active mt-2 mb-2 col-5 mw-100"
                    >
                      <span className="icons">📞</span> Telefon bilan
                    </button>
                    <button 
                      onClick={() => setTyping('email')}
                      className="custom-btn mt-2 mb-2 col-5 mw-100"
                    >
                      <span className="icons">✉️</span> Email bilan
                    </button>
                  </div>
                  <form id="login__form">
                    <div className="custom_input_style__two mt-3">
                      <div className="input-icon-wrapper">
                        <input
                          type={typing} // Dynamically set input type based on `typing`
                          placeholder={placeholder} // Dynamically set placeholder
                          id="input"
                        />
                        <label htmlFor="input">
                          {typing === 'number' ? (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* SVG paths for phone icon */}
                              <path d="M10 2C9.44772 2 9 2.44772 9 3V5H7V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V5H4C3.44772 5 3 5.44772 3 6V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V6C13 5.44772 12.5523 5 12 5H11V3C11 2.44772 10.5523 2 10 2Z" />
                            </svg>
                          ) : (
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* SVG paths for email icon */}
                              <path d="M2 3.5C2 2.67157 2.67157 2 3.5 2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H3.5C2.67157 14 2 13.3284 2 12.5V3.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V3.5C13 3.22386 12.7761 3 12.5 3H3.5Z" />
                            </svg>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="custom_input_style__two mt-3">
                      <input
                        type="password"
                        placeholder=" Password"
                        id="password"
                      />
                      <label htmlFor="password">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* SVG paths for password icon */}
                          <path d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13ZM7 6H9V9H7V6Z" />
                        </svg>
                      </label>
                    </div>
                    <button type="submit" className="submit-v2 mt-5 mb-5">
                      Register
                    </button>
                  </form>
                </div>

                <div className="reg-divider d-flex align-items-center order-1 justify-content-center py-lg-0 py-4">
                  <span>OR</span>
                </div>

                <div className="reg__right order-0 order-lg-2 mt-3">
                  <ul>
                    <li>
                      <button className="social_reg__btn">
                        <img
                          src="/images/icons/google-full.svg"
                          alt=""
                        />{" "}
                        Googledan ro'yxatdan o'tish
                      </button>
                    </li>
                    <li>
                      <button className="social_reg__btn">
                        <img
                          src="/images/icons/facebook-full.svg"
                          alt=""
                        />{" "}
                        Facebookdan ro'yxatdan o'tish
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
