# Mattermost Handsfree

A chrome plugin that aims to control the Mattermost webapp using transcribed speech. At the moment it only supports transcribing audio into text in the message box.

#### CAVEAT EMPTOR!
It uses the _Web Speech API_ that is built into most modern browsers. This means that on Chrome it sends your audio data to Google servers. 

I've implemented it as a Chrome extension instead of a Mattermost plugin so that a user does not have to depend on a Mattermost server admin to enable the feature.

### Installation and use
1. Clone this repo into any folder
2. In `manifest.json` change the contents field to match the URL of the mattermost server you're on. This tells Chrome to run the extension only when your mattermost client webpage is loaded.
3. Open your [Chrome Extensions](chrome://extensions/) and enable "Developer Mode".
4. Select "Load Unpacked" and choose the folder where you checkout out this code.
5. With the mattermost webapp open, press "ctrl+shift+y" ("cmd+shift+y" on OSX). The first time you do this the page will ask you microphone permissions. You will need to enable microphone permissions for this extension to work. The text you speak will be transcribed and appended to the message box. You will need to manually send by hitting "enter". You can change the shortcut, including making it a global shortcut but visiting your [Chrome extension shortcut settings](chrome://extensions/shortcuts)

### Planned Work
1. Support navigating around the UI - switching channels or teams, searching for text etc.
2. Firefox extension
