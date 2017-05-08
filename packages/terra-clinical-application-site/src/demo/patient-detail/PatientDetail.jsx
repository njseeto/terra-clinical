import React, { PropTypes } from 'react';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import ContentContainer from 'terra-content-container';
import DetailView from 'terra-clinical-detail-view';
import IconRefresh from 'terra-icon/lib/icon/IconRefresh';
import IconEdit from 'terra-icon/lib/icon/IconEdit';

import AppDelegate from 'terra-clinical-app-delegate';

import NavigationHeader from '../navigation-header/NavigationHeader';
import ActivityIndicator from '../activity-overlay/ActivityOverlay';

class PatientDetail extends React.Component {
  constructor(props) {
    super(props);

    this.showPatientUpdate = this.showPatientUpdate.bind(this);
  }

  showPatientUpdate(patient, type) {
    return () => {
      if (this.props.onSelectPatientUpdate) {
        this.props.onSelectPatientUpdate(patient, type);
      }
    };
  }

  render() {
    const patient = this.props.patient;

    let loadingIndicator;
    if (this.props.isLoading) {
      loadingIndicator = <ActivityIndicator />;
    }

    let detailContent;
    if (patient) {
      detailContent = (
        <DetailView
          title={patient.name}
          subtitles={[patient.status]}
          graph={<img style={{ width: '280px' }} alt="patient-img" src={patient.photo} />}
          footer={patient.comment}
          isDivided
        />
      );
    }

    return (
      <ContentContainer
        id="orion-PatientDetail"
        header={(
          <NavigationHeader title="Patient Detail" app={this.props.app}>
            {this.props.onRefresh && <Button onClick={this.props.onRefresh} icon={<IconRefresh isSpin={this.props.isLoading} />} />}
            <Button icon={<IconEdit />} onClick={this.showPatientUpdate(patient, 'modal')} />
          </NavigationHeader>
        )}
        fill
      >
        {loadingIndicator}
        {detailContent}
      </ContentContainer>
    );
  }
}

PatientDetail.propTypes = {
  app: AppDelegate.propType,
  patient: PropTypes.object,
  isLoading: PropTypes.bool,
  onRefresh: PropTypes.func,
  onSelectPatientUpdate: PropTypes.func,
};

export default PatientDetail;
