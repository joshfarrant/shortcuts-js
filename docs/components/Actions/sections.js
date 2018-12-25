const sections = [
  ['Actions', [
    ['Scripting', [
      [null, [
        [ 79, 'Comment'],
        [ 70, 'Show Result'],
      ]],
      ['Content', [
        [ 11, 'Count'],
        [ 70, 'Get Name'],
        [ 70, 'Get Type'],
        [ 70, 'Nothing'],
        [ 70, 'Set Name'],
        [ 35, 'View Content Graph'],
      ]],
      ['Control Flow', [
        [ 70, 'Choose from Menu'],
        [ 36, 'Continue Shortcut in App'],
        [ 70, 'Exit Shortcut'],
        [ 70, 'If'],
        [ 70, 'Repeat'],
        [ 70, 'Repeat with Each'],
        [ 70, 'Wait'],
        [ 70, 'Wait to Return'],
      ]],
      ['Device', [
        [  5, 'Get Battery Level'],
        [ 50, 'Get Current IP Address'],
        [ 70, 'Get Device Details'],
        [ 90, 'Get Network Details'],
        [  1, 'Set Airplane Mode'],
        [  6, 'Set Bluetooth'],
        [  9, 'Set Brightness'],
        [ 13, 'Set Cellular Data'],
        [ 22, 'Set Do Not Disturb'],
        [ 32, 'Set Torch'],
        [  5, 'Set Low Power Mode'],
        [ 77, 'Set Volume'],
        [ 90, 'Set Wi-Fi'],
      ]],
      ['Dictionaries', [
        [ 70, 'Dictionary'],
        [ 70, 'Get Dictionary from Input'],
        [ 70, 'Get Dictionary Value'],
        [ 70, 'Set Dictionary Value'],
      ]],
      ['Files', [
        [ 70, 'Base64 Encode'],
        [ 70, 'Generate Hash'],
      ]],
      ['Lists', [
        [ 70, 'Choose from List'],
        [ 70, 'Get Item from List'],
        [ 70, 'List'],
      ]],
      ['Maths', [
        [ 11, 'Calculate'],
        [ 11, 'Calculate Statistics'],
        [ 11, 'Convert Measurement'],
        [ 11, 'Format Number'],
        [ 11, 'Measurement'],
        [ 11, 'Number'],
        [ 11, 'Random Number'],
        [ 11, 'Round Number'],
      ]],
      ['Notification', [
        [ 70, 'Ask for Input'],
        [ 77, 'Play Sound'],
        [ 70, 'Show Alert'],
        [ 52, 'Show Notification'],
        [ 52, 'Vibrate Device'],
      ]],
      ['Run Script Over SSH', [
        [ 70, 'Run Script Over SSH'],
      ]],
      ['Shortcuts', [
        [ 73, 'Get My Shortcuts'],
        [ 73, 'Run Shortcut'],
      ]],
      ['Variables', [
        [ 86, 'Add to Variable'],
        [ 86, 'Get Variable'],
        [ 86, 'Set Variable'],
      ]],
      ['X-Callback', [
        [ 84, 'Open X-Callback URL'],
        [ 84, 'URL Encode'],
      ]],
      ['Editorial', [
        [ 27, 'Run Editorial Workflow'],
      ]],
      ['Pythonista', [
        [ 60, 'Edit Script'],
        [ 60, 'Run Script'],
      ]],
      ['Tally', [
        [ 60, 'Get Tally'],
        [ 60, 'Update Tally'],
      ]],
    ]],
  ]],
  ['Content Types', [
    ['Apps', [
      [null, [
        [  4, 'Open App'],
      ]],
      ['App Store', [
        [  2, 'Get Details of App Store App'],
        [  2, 'Search App Store'],
      ]],
    ]],
    ['Calendar', [
      ['Calendar', [
        [ 60, 'Add New Event'],
        [ 60, 'Filter Event Attendees'],
        [ 60, 'Find Calendar Events'],
        [ 60, 'Get Details of Calendar Events'],
        [ 60, 'Get Details of Event Attendees'],
        [ 60, 'Get Upcoming Events'],
        [ 60, 'Remove Events'],
        [ 60, 'Show in Calendar'],
      ]],
      ['Clock', [
        [ 60, 'Create Alarm'],
        [ 60, 'Start Timer'],
        [ 60, 'Toggle Alarm'],
      ]],
      ['Dates', [
        [ 18, 'Adjust Date'],
        [ 18, 'Date'],
        [ 18, 'Format Date'],
        [ 18, 'Get Dates from Input'],
        [ 18, 'Get Time Between Dates'],
      ]],
      ['Reminders', [
        [ 66, 'Add New Reminder'],
        [ 66, 'Find Reminders'],
        [ 66, 'Get Details of Reminders'],
        [ 66, 'Get Upcoming Reminders'],
        [ 66, 'Remove Reminders'],
      ]],
      ['Fantastical', [
        [ 30, 'Add Event via Fantastical'],
        [ 30, 'Add Reminder via Fantastical'],
        [ 30, 'Show in Fantastical'],
      ]],
    ]],
    ['Contacts', [
      ['Contacts', [
        [ 16, 'Contacts'],
        [ 16, 'Find Contacts'],
        [ 16, 'Get Contacts from Input'],
        [ 16, 'Get Details of Contacts'],
        [ 16, 'Select Contact'],
      ]],
      ['Mail', [
        [ 43, 'Email Address'],
        [ 43, 'Get Email Addresses from Input'],
        [ 43, 'Select Email Address'],
      ]],
      ['Payments', [
        [  3, 'Request Payment'],
        [  3, 'Send Payment'],
      ]],
      ['Phone', [
        [ 56, 'Call'],
        [ 28, 'FaceTime'],
        [ 57, 'Get Phone Numbers from Input'],
        [ 57, 'Phone Number'],
        [ 57, 'Select Phone Number'],
      ]],
      ['Skype', [
        [ 60, 'Call via Skype'],
      ]],
    ]],
    ['Documents', [
      ['Archives', [
        [ 23, 'Extract Archive'],
        [ 23, 'Make Archive'],
      ]],
      ['Books', [
        [  7, 'Open in Books'],
      ]],
      ['Editing', [
        [ 45, 'Markup'],
      ]],
      ['File Storage', [
        [ 23, 'Append to File'],
        [ 23, 'Create Folder'],
        [ 23, 'Delete Files'],
        [ 23, 'Get File'],
        [ 23, 'Get Link to File'],
        [ 23, 'Save File'],
      ]],
      ['Files', [
        [ 23, 'Filter Files'],
        [ 11, 'Format File Size'],
        [ 23, 'Get Details of Files'],
        [  4, 'Open In...'],
      ]],
      ['Previewing', [
        [ 63, 'Quick Look'],
      ]],
      ['Printing', [
        [ 54, 'Make PDF'],
        [ 61, 'Print'],
      ]],
      ['Bear', [
        [ 60, 'Add to Bear Note'],
        [ 60, 'Create Bear Note'],
        [ 60, 'Create Bear Note from URL'],
        [ 60, 'Get Contents of Bear Note'],
        [ 60, 'Open Bear Note'],
        [ 60, 'Search in Bear'],
      ]],
      ['Drafts', [
        [ 60, 'Add to Draft'],
        [ 60, 'Get Contents of Draft'],
        [ 60, 'Open Draft'],
        [ 60, 'Run Drafts Action'],
      ]],
      ['Evernote', [
        [ 60, 'Append to Note'],
        [ 60, 'Create New Note'],
        [ 60, 'Delete Notes'],
        [ 60, 'Get Note Link'],
        [ 60, 'Get Notes'],
      ]],
      ['GoodReader', [
        [ 60, 'Open in GoodReader'],
      ]],
      ['Ulysses', [
        [ 85, 'Add to Ulysses Sheet'],
        [ 85, 'Attach to Ulysses Sheet'],
        [ 85, 'Get Details of Ulysses Sheet'],
        [ 85, 'Get Ulysses Sheet'],
        [ 85, 'New Ulysses Group'],
        [ 85, 'New Ulysses Sheet'],
        [ 85, 'Open Ulysses'],
      ]],
    ]],
    ['Health', [
      ['Health', [
        [ 37, 'Find Health Samples'],
        [ 37, 'Get Details of Health Sample'],
        [ 37, 'Log Health Sample'],
        [ 37, 'Log Workout'],
      ]],
    ]],
    ['Home', [
      ['Home', [
        [ 39, 'Run Home Scene'],
      ]],
    ]],
    ['Location', [
      [null, [
        [ 42, 'Filter Locations'],
        [ 42, 'Get Current Location'],
        [ 42, 'Get Details of Locations'],
      ]],
      ['Maps', [
        [ 44, 'Get Addresses from Input'],
        [ 44, 'Get Distance'],
        [ 44, 'Get Halfway Point'],
        [ 44, 'Get Maps URL'],
        [ 44, 'Get Travel Time'],
        [ 44, 'Search Local Businesses'],
        [ 44, 'Show Directions'],
        [ 44, 'Show in Maps'],
        [ 44, 'Street Address'],
      ]],
      ['Weather', [
        [ 88, 'Get Current Weather'],
        [ 88, 'Get Details of Weather Conditions'],
        [ 88, 'Get Weather Forecast'],
      ]],
      ['BlindSquare', [
        [ 60, 'Show in BlindSquare'],
      ]],
    ]],
    ['Music', [
      ['iTunes Store', [
        [ 92, 'Get Details of iTunes Artist'],
        [ 92, 'Get Details of iTunes Product'],
        [ 92, 'Search iTunes Store'],
        [ 92, 'Show in iTunes Store'],
      ]],
      ['Music', [
        [ 48, 'Add to Playlist'],
        [ 48, 'Add to Up Next'],
        [ 48, 'Clear Up Next'],
        [ 48, 'Clear Playlist'],
        [ 48, 'Find Music'],
        [ 48, 'Get Current Song'],
        [ 48, 'Get Details of Music'],
        [ 48, 'Get Playlist'],
        [ 48, 'Play Music'],
        [ 48, 'Select Music'],
      ]],
      ['Playback', [
        [ 55, 'Pause Music'],
        [ 77, 'Set Volume'],
        [ 67, 'Skip Back'],
        [ 31, 'Skip Forward'],
      ]],
    ]],
    ['Photos & Video', [
      ['Audio', [
        [ 47, 'Record Audio'],
      ]],
      ['Camera', [
        [ 12, 'Take Photo'],
        [ 12, 'Take Video'],
      ]],
      ['Editing', [
        [ 40, 'Combine Images'],
        [ 40, 'Crop Image'],
        [ 40, 'Flip Image'],
        [ 45, 'Markup'],
        [ 40, 'Mask Image'],
        [ 40, 'Overlay Image'],
        [ 40, 'Resize Image'],
        [ 40, 'Rotate Image'],
      ]],
      ['GIFs', [
        [ 33, 'Add Frame to GIF'],
        [ 33, 'Get Frames from Image'],
        [ 33, 'Make GIF'],
        [ 33, 'Make Video from GIF'],
      ]],
      ['Images', [
        [ 40, 'Convert Image'],
        [ 40, 'Filter Images'],
        [ 40, 'Get Details of Images'],
        [ 40, 'Get Images from Input'],
      ]],
      ['Photos', [
        [ 58, 'Delete Photos'],
        [ 58, 'Find Photos'],
        [ 58, 'Get Last Import'],
        [ 10, 'Get Latest Bursts'],
        [ 41, 'Get Latest Live Photos'],
        [ 58, 'Get Latest Photos'],
        [ 58, 'Get Latest Screenshots'],
        [ 58, 'Get Latest Videos'],
        [ 58, 'Save to Photo Album'],
        [ 58, 'Select Photos'],
      ]],
      ['Video', [
        [ 64, 'Encode Media'],
        [ 64, 'Trim Media'],
      ]],
      ['Imgur', [
        [ 60, 'Upload to Imgur'],
      ]],
      ['Lightroom', [
        [ 60, 'Import to Lightroom'],
      ]],
    ]],
    ['Sharing', [
      ['Clipboard', [
        [ 14, 'Copy to Clipboard'],
        [ 14, 'Get Clipboard'],
      ]],
      ['Mail', [
        [ 43, 'Send Email'],
      ]],
      ['Messaging', [
        [ 46, 'Send Message'],
      ]],
      ['Notes', [
        [ 51, 'Create Note'],
      ]],
      ['Photos', [
        [ 58, 'Post to Shared Album'],
      ]],
      ['System', [
        [  0, 'AirDrop'],
        [ 72, 'Share'],
        [  4, 'Share with Extensions'],
      ]],
      ['Facebook', [
        [ 29, 'Post on Facebook'],
      ]],
      ['Instagram', [
        [ 60, 'Post on Instagram'],
      ]],
      ['Tumblr', [
        [ 81, 'Post to Tumblr'],
      ]],
      ['Tweetbot', [
        [ 82, 'Open Tweetbot'],
        [ 82, 'Search Text'],
        [ 82, 'Tweet'],
        [ 82, 'View Profile in Tweetbot'],
      ]],
      ['Twitter', [
        [ 83, 'Tweet'],
      ]],
      ['WhatsApp', [
        [ 60, 'Send Mesage via WhatsApp'],
        [ 60, 'Send Photo via WhatsApp'],
      ]],
      ['WordPress', [
        [ 60, 'Post to WordPress'],
      ]],
    ]],
    ['Text', [
      [null, [
        [ 80, 'Detect Language with Microsoft'],
        [ 20, 'Dictate Text'],
        [ 62, 'Generate QR Code'],
        [ 76, 'Get Name of Emoji'],
        [ 79, 'Get Text from Input'],
        [ 62, 'Scan QR/Barcode'],
        [ 21, 'Show Definition'],
        [ 77, 'Speak Text'],
        [ 79, 'Text'],
        [ 80, 'Translate Text with Microsoft'],
      ]],
      ['Rich Text', [
        [ 68, 'Make HTML from Rich Text'],
        [ 68, 'Make Markdown from Rich Text'],
        [ 68, 'Make Rich Text from HTML'],
        [ 68, 'Make Rich Text from Markdown'],
      ]],
      ['Text Editing', [
        [ 79, 'Change Case'],
        [ 79, 'Combine Text'],
        [ 79, 'Correct Spelling'],
        [ 79, 'Get Group from Matched Text'],
        [ 79, 'Match Text'],
        [ 79, 'Replace Text'],
        [ 79, 'Split Text'],
      ]],
      ['2Do', [
        [ 60, 'Add 2Do Task'],
      ]],
      ['Captio', [
        [ 60, 'Append to Note'],
        [ 60, 'Send Note'],
      ]],
      ['Clear', [
        [ 60, 'Add Clear List'],
        [ 60, 'Add Clear Task'],
      ]],
      ['Day One', [
        [ 60, 'Create Day One Entry'],
      ]],
      ['Due', [
        [ 60, 'Add Due Reminder'],
      ]],
      ['iTranslate', [
        [ 60, 'Show in iTranslate'],
      ]],
      ['OmniFocus', [
        [ 60, 'Add OmniFocus Item'],
        [ 60, 'Add TaskPaper to OmniFocus'],
      ]],
      ['The Hit List', [
        [ 60, 'Add Task to The Hit List'],
      ]],
      ['Things', [
        [ 60, 'Add Things To-Do'],
      ]],
      ['Todoist', [
        [ 60, 'Add Todoist Item'],
      ]],
      ['Trello', [
        [ 60, 'Add Trello Card'],
        [ 60, 'Create Trello Board'],
        [ 60, 'Create Trello List'],
        [ 60, 'Get Details of Trello Item'],
        [ 60, 'Get Trello Items'],
      ]],
      ['Wunderlist', [
        [ 60, 'Add Wunderlist Task'],
      ]],
    ]],
    ['Web', [
      ['Articles', [
        [ 68, 'Filter Articles'],
        [ 68, 'Get Details of Diffbot Article'],
        [ 24, 'Get Diffbot Article from Web Page'],
      ]],
      ['Giphy', [
        [ 34, 'Search Giphy'],
      ]],
      ['Safari', [
        [ 69, 'Add to Reading List'],
        [ 69, 'Get Contents of Web Page'],
        [ 69, 'Get Details of Safari Web Page'],
        [ 69, 'Open URLs'],
        [ 69, 'Run JavaScript on Web Page'],
        [ 69, 'Search Web'],
        [ 69, 'Show Web Page'],
      ]],
      ['URLs', [
        [ 84, 'Expand URL'],
        [ 84, 'Get Component of URL'],
        [ 25, 'Get Contents of URL'],
        [ 25, 'Get Headers of URL'],
        [ 65, 'Get Items from RSS Feed'],
        [ 65, 'Get RSS Feeds from Page'],
        [ 84, 'Get URLs from Input'],
        [ 84, 'URL'],
      ]],
      ['Associate', [
        [ 60, 'Convert URL with Associate'],
        [ 60, 'Search in Associate'],
      ]],
      ['Blink', [
        [ 60, 'Convert URL with Blink'],
        [ 60, 'Search in Blink'],
      ]],
      ['Chrome', [
        [ 60, 'Open URLs in Chrome'],
      ]],
      ['CloudApp', [
        [ 15, 'Upload to CloudApp'],
      ]],
      ['Instapaper', [
        [ 60, 'Add to Instapaper'],
        [ 60, 'Get Instapaper Bookmarks'],
      ]],
      ['Opener', [
        [ 60, 'Open URL in Opener'],
      ]],
      ['Overcast', [
        [ 60, 'Add to Overcast'],
      ]],
      ['Pinboard', [
        [ 59, 'Add to Pinboard'],
        [ 59, 'Get Pinboard Bookmarks'],
      ]],
      ['Pocket', [
        [ 60, 'Add to Pocket'],
        [ 60, 'Get Items from Pocket'],
      ]],
    ]],
  ]],
];

export default sections;
