import React from 'react';

import { PanelStyled, CollapseStyled } from '../StyleComponents/collapseMenu';

function PodcastCollapsedMenu() {
  const [expanded, setExpanded] = React.useState(['']);

  const changeKeyState = (key) => {
    setExpanded(key);
  };

  return (
    <CollapseStyled
      defaultActiveKey={['']}
      activeKey={expanded}
      onChange={changeKeyState}
    >
      <PanelStyled header="How to Subscribe">
        <div class="row text-white-50">
          <div class="col-sm pr-sm-5">
            <div class="d-flex align-items-center mb-3">
              <div>
                <img class="podcast-icon" src="img/Icons/Podcasts_(iOS).svg" />
              </div>
              <h5 class="mb-0 ml-3">iOS</h5>
            </div>
            <p>Open the Podcasts app on your phone:</p>
            <ul>
              <li>Tap the LIBRARY button at the bottom of your app</li>
              <li>
                Choose the option ADD A PODCAST BY URL and enter the RSS link:{' '}
                <span class="text-blue">
                  https://bcdevexchange.libsyn.com/rss
                </span>
              </li>
              <li>Tap SUBSCRIBE</li>
              <li>Tap the DONE button at the top right</li>
              <li>Tap on The Exchange Podcast logo to access the episodes</li>
            </ul>
          </div>
          <div class="col-sm pl-sm-5">
            <div class="d-flex align-items-center mb-3">
              <img
                class="podcast-icon"
                src="img/Icons/Google_Podcasts_icon.svg"
              />
              <h5 class="mb-0 ml-3">Android</h5>
            </div>
            <p>
              Visit the Google Play Store to find a podcast player that suits
              you. These steps should be similar in all applications:
            </p>
            <ul>
              <li>Tap on the + sign at the top right of the screen</li>
              <li>Select "Add an RSS Feed"</li>
              <li>
                Enter the RSS link:{' '}
                <span class="text-blue">
                  https://bcdevexchange.libsyn.com/rss
                </span>
              </li>
              <li>Tap "Add"</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="row text-white-50">
          <div class="col-sm-10 col-md-6 m-auto">
            <p>
              If using another podcast application, subscribe by visiting{' '}
              <a
                href="https://bcdevexchange.libsyn.com/"
                target="_blank"
                rel="noreferrer"
              >
                https://bcdevexchange.libsyn.com/
              </a>{' '}
              and clicking the RSS icon, or entering the RSS link:{' '}
              <span class="text-blue">
                https://bcdevexchange.libsyn.com/rss
              </span>
            </p>
          </div>
        </div>
      </PanelStyled>
    </CollapseStyled>
  );
}

export default PodcastCollapsedMenu;
