import React from 'react';

const Button = (props) => (
  <button onClick={props.handleSubmit}>
    Next&nbsp;&nbsp;
    <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Frontend-Mobile-REDLINES" transform="translate(-429.000000, -694.000000)" fill="#FFFFFF" fillRule="nonzero">
              <g id="Group" transform="translate(387.000000, 690.000000)">
                  <g id="Group-2">
                      <path d="M48.9677992,9.98420413 L42.9973945,9.98420413 C42.4465487,9.98420413 42,9.53978693 42,8.99157054 C42,8.44335415 42.4465487,7.99893695 42.9973945,7.99893695 L49.0367339,7.99893695 L47.1771147,5.59882809 C46.8407439,5.16469274 46.9216857,4.54137572 47.3579033,4.20661056 C47.7941208,3.8718454 48.4204274,3.95240085 48.7567982,4.3865362 L51.7924471,8.30448231 C52.0643341,8.65539198 52.0695888,9.14315001 51.8053242,9.49978071 L48.7696753,13.5964542 C48.4427348,14.0376674 47.8183076,14.1315689 47.3749783,13.806189 C46.9316489,13.480809 46.837297,12.8593625 47.1642375,12.4181493 L48.9677992,9.98420413 Z" id="Arrow"></path>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  </button>
)

export default Button;