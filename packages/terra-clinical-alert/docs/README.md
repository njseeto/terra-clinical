# Terra Clinical Alert

The Terra Clinical Alert component is a notification banner that can be rendered in your application when there is information that you want to bring to the user's attention. The Clinical Alert component supports a number of built-in notification types that render with pre-defined colors and icons that help the user understand the severity and meaning of the notification. A custom notification type is also supported that allows your application to customize an alert that may not fit into the pre-defined types. The Clinical Alert expands on the base Terra Alert component providing additional clinical specific alert types.


## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-clinical-alert`
  - `yarn add terra-clinical-alert`

## Usage

```jsx
import React from 'react';
import Alert from 'terra-clinical-alert';

<Alert type={Alert.Opts.Types.ALERT}>
  This is an alert with the default title.
</Alert>

<Alert type={Alert.Opts.Types.SUCCESS} 
       title="Success!" 
       onDismiss={this.handleDismiss} 
>
  This is a success alert with a custom title. It is configured to be dismissible. 
</Alert>

<Alert type={Alert.Opts.Types.WARNING} 
       action={<Button text="Action" size="medium" variant="primary" onClick={actionFunc} />} 
>
  This is a warning with the default title. A Terra Button component is passed as the action.
</Alert>

<Alert type={Alert.Opts.Types.CUSTOM} 
       title="Help!" 
       customStatusColor="orange" 
       customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} 
>
  <span>This is a <i>custom</i> alert with a custom title and icon and the content is HTML instead of text.</span>
</Alert>

<Alert type={Alert.Opts.Types.GAP_CHECKING}>
  This is a gap checking alert with Default text
</Alert>

<Alert type={Alert.Opts.Types.OUTSIDE_RECORDS}>
  This is an outside records alert with Default text
</Alert>
```