import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/page/HomePage';
import TopPage from '@/page/TopPage/TopPage';
import US00010 from '@/page/User/US00010';
import US00030 from '@/page/User/US00030';
import US00040 from '@/page/User/US00040';
import US00050 from '@/page/User/US00050';
import USv0010 from '@/page/User/USv0010';
import USv0020 from '@/page/User/USv0020';
import USv0070 from '@/page/User/USv0070';
import USv0030 from '@/page/User/USv0030';
import USv0040 from '@/page/User/USv0040';
import USv0050 from '@/page/User/USv0050';
import USv0051 from '@/page/User/USv0051';
import USv0060 from '@/page/User/USv0060';
import USh0010 from '@/page/User/USh0010';
import USc0010 from '@/page/User/USc0010';
import USc0030 from '@/page/User/USc0030';
import USc0020 from '@/page/User/USc0020';
import USh0040 from '@/page/User/USh0040';
import USh0020 from '@/page/User/USh0020';
import USh0030 from '@/page/User/USh0030';
import ChangePassword from '@/page/ChangePassword';
import Manual from './page/Manual';
import Faq from './page/Faq';
import Inquiry from './page/Inquiry';

import Schedule from './page/schedule/Schedule';
import PeditSchedule from './page/schedule/PeditSchedule';
import UsageSummaryInfo from './page/UsageSummaryInfo/UsageSummaryInfo';
import InsuranceExpenseInfo from './page/UsageSummaryInfo/InsuranceExpenseInfo';
import AccountInfo from './page/UsageSummaryInfo/AccountInfo';
import BillingInfo from './page/UsageSummaryInfo/BillingInfo';
import InsurancePublicExpenseInformation from './page/Insurance/InsurancePublicExpenseInformation';
import { useState } from 'react';
import * as Constant from '@/common/constant';
import InsurancePublicExpenseInformationRegister from './page/Insurance/InsurancePublicExpenseInformationRegister';
import InsurancePublicExpenseInformationDetail from './page/Insurance/InsurancePublicExpenseInformationDetail';
import InsurancePublicExpenseInformationUpdate from './page/Insurance/InsurancePublicExpenseInformationUpdate';
import PselectSchedule from './page/schedule/PselectSchedule';
import ElderlyBeneficiaryInformation from './page/Insurance/ElderlyBeneficiaryInformation';
import ElderlyBeneficiaryInformationRegister from './page/Insurance/ElderlyBeneficiaryInformationRegister';
import ElderlyBeneficiaryInformationDetail from './page/Insurance/ElderlyBeneficiaryInformationDetail';
import ElderlyBeneficiaryInformationUpdate from './page/Insurance/ElderlyBeneficiaryInformationUpdate';
import LimitCertificationInformation from './page/Insurance/LimitCertificationInformation';
import LimitCertificationInformationRegister from './page/Insurance/LimitCertificationInformationRegister';
import LimitCertificationInformationDetail from './page/Insurance/LimitCertificationInformationDetail';
import LimitCertificationInformationUpdate from './page/Insurance/LimitCertificationInformationUpdate';
import IntelligencePublicExpense from './page/Insurance/IntelligencePublicExpense';
import IntelligencePublicExpenseRegister from './page/Insurance/IntelligencePublicExpenseRegister';
import IntelligencePublicExpenseDetail from './page/Insurance/IntelligencePublicExpenseDetail';
import IntelligencePublicExpenseUpdate from './page/Insurance/IntelligencePublicExpenseUpdate';
import AdditionalInformation from './page/Insurance/AdditionalInformation';
import AdditionalInformationRegister from './page/Insurance/AdditionalInformationRegister';
import LatterStageElderlyInformation from './page/Insurance/LatterStageElderlyInformation';
import LatterStageElderlyInformationRegister from './page/Insurance/LatterStageElderlyInformationRegister';
import LatterStageElderlyInformationUpdate from './page/Insurance/LatterStageElderlyInformationUpdate';
import LatterStageElderlyInformationDetail from './page/Insurance/LatterStageElderlyInformationDetail';

import HomevisitNursingInstructionInformation from './page/Instructions/HomevisitNursingInstructionInformation';
import HomevisitNursingInstructionInformationRegister from './page/Instructions/HomevisitNursingInstructionInformationRegister';
import HomevisitNursingInstructionInformationDetail from './page/Instructions/HomevisitNursingInstructionInformationDetail';

import SpecificDiseaseMedicalTreatmentInformation from './page/Insurance/SpecificDiseaseMedicalTreatmentInformation';
import SpecificDiseaseMedicalTreatmentInformationRegister from './page/Insurance/SpecificDiseaseMedicalTreatmentInformationRegister';
import SpecificDiseaseMedicalTreatmentInformationDetail from './page/Insurance/SpecificDiseaseMedicalTreatmentInformationDetail';
import SpecificDiseaseMedicalTreatmentInformationUpdate from './page/Insurance/SpecificDiseaseMedicalTreatmentInformationUpdate';

import LongTermCareInsuranceInformation from './page/Insurance/LongTermCareInsuranceInformation';
import LongTermCareInsuranceInformationRegister from './page/Insurance/LongTermCareInsuranceInformationRegister';
import LongTermCareInsuranceInformationUpdate from './page/Insurance/LongTermCareInsuranceInformationUpdate';
import LongTermCareInsuranceInformationDetail from './page/Insurance/LongTermCareInsuranceInformationDetail';
import AccountInfoUpdate from './page/UsageSummaryInfo/AccountInfoUpdate';
import PeditScheduleById from './page/schedule/PeditScheduleById';
import PeditScheduleHour from './page/schedule/PeditScheduleHour';

import UserSummary from './page/User/UserSummary';
import CalendarSchedule from './page/schedule/Calendar';

import NursingSummaryList from './page/NursingSummaryInfo/NursingSummaryList';
import NursingSummaryInfo from './page/NursingSummaryInfo/NursingSummaryInfo';
import ImageInfo from './page/NursingSummaryInfo/ImageInfo';
import NursingSummaryInfoUpdate from './page/NursingSummaryInfo/NursingSummaryInfoUpdate';
import NursingSummaryListRegister from './page/NursingSummaryInfo/NursingSummaryListRegister';
import ImageManageNurse from './page/NursingSummaryInfo/ImageManageNurse';
import PeditResultRegister from './page/schedule/PeditResultRegister';
import PreferResult from './page/schedule/PreferResult';
import FL0010 from './page/File/FL0010';
import InterStaff from './page/InterStaffCommunicationFunction/InterStaff';
import InterStaffCreateNew  from './page/InterStaffCommunicationFunction/InterStaffCreateNew';
import InterStaffDetail  from './page/InterStaffCommunicationFunction/InterStaffDetail';

import FL0030 from './page/File/FL0030';
import FL0040 from './page/File/FL0040';
import FL0050 from './page/File/FL0050';
import IG0010 from './page/File/IG0010';
import TR0010 from './page/TransferInfo/TR0010';
import TR0020 from './page/TransferInfo/TR0020';
import TR0030 from './page/TransferInfo/TR0030';
import TR0040 from './page/TransferInfo/TR0040';
import IG0030 from './page/File/IG0030';
import IG0050 from './page/File/IG0050';
import IG0040 from './page/File/IG0040';



const AppRouter = () => {
  const [dataSelected] = useState(
    JSON.parse(localStorage.getItem('dataSelected') ?? '{}'),
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/page/change-password" element={<ChangePassword />} />
        <Route path="/page/change-password" element={<ChangePassword />} />
        <Route path="/page/Manual" element={<Manual />} />
        <Route path="/page/Faq" element={<Faq />} />
        <Route path="/page/Inquiry" element={<Inquiry />} />

        <Route path="/user-search" element={<US00010 />} />
        <Route path="/user-detail" element={<US00030 />} />
        <Route path="/user-detail/update" element={<US00040 />} />
        <Route path="/user-detail/create" element={<US00050 />} />
        <Route path="/user/detail/nursing-basic-info" element={<USv0010 />} />
        <Route
          path="/user/detail/nursing-basic-info/:id"
          element={<USv0020 />}
        />
        <Route
          path="/user/detail/nursing-basic-info/register"
          element={<USv0070 />}
        />
        <Route
          path="/user/detail/nursing-basic-info/update-1"
          element={<USv0030 />}
        />
        <Route
          path="/user/detail/nursing-basic-info/update-2"
          element={<USv0040 />}
        />
        {/* {dataSelected.insurance == Constant.INSURANCE_TYPE.MEDICAL_MENTAL ? (
          <Route
            path="/user/detail/nursing-basic-info/update-3"
            element={<USv0051 />}
          />
        ) :
          <Route
            path="/user/detail/nursing-basic-info/update-3"
            element={<USv0050 />}
          />
        } */}
        {dataSelected?.insurance == Constant.INSURANCE_TYPE.MEDICAL_MENTAL ? (
          <Route
            path="/user/detail/nursing-basic-info/update-3"
            element={<USv0051 />}
          />
        ) : (
          <Route
            path="/user/detail/nursing-basic-info/update-3"
            element={<USv0050 />}
          />
        )}
        <Route
          path="/user/detail/nursing-basic-info/update-4"
          element={<USv0060 />}
        />
        <Route
          path="/user/detail/admission-discharge-info"
          element={<USh0010 />}
        />
        <Route
          path="/user/detail/admission-discharge-info/create"
          element={<USh0040 />}
        />
        <Route
          path="/user/detail/admission-discharge-info/:id"
          element={<USh0020 />}
        />
        <Route
          path="/user/detail/admission-discharge-info/update"
          element={<USh0030 />}
        />
        <Route path="/user/detail/cancer-doctors-info" element={<USc0010 />} />
        <Route
          path="/user/detail/cancer-doctors-info/create"
          element={<USc0030 />}
        />
        <Route
          path="/user/detail/cancer-doctors-info/:id"
          element={<USc0020 />}
        />

        <Route path="/user/schedule" element={<Schedule />} />
        <Route path="/user/pedit-schedule" element={<PeditSchedule />} />
        <Route path="/user/schedule" element={<Schedule />} />
        <Route path="/user/pedit-schedule" element={<PeditSchedule />} />
        <Route path="/user/pselect-schedule" element={<PselectSchedule />} />
        <Route path="/user/pedit-schedule-id" element={<PeditScheduleById />} />
        <Route
          path="/user/pedit-schedule-hour"
          element={<PeditScheduleHour />}
        />
        <Route path="/user/schedule/calendar" element={<CalendarSchedule />} />
        <Route
          path="/user/pedit-result-register"
          element={<PeditResultRegister />}
        />
        <Route path="/user/prefer-result" element={<PreferResult />} />

        <Route path="/user/usage-summary-info" element={<UsageSummaryInfo />} />
        <Route
          path="/user/insurance-expense-info"
          element={<InsuranceExpenseInfo />}
        />
        <Route path="/user/account-info" element={<AccountInfo />} />
        <Route path="/user/billing-info" element={<BillingInfo />} />
        <Route
          path="/user/insurance/intelligence-public-expense"
          element={<IntelligencePublicExpense />}
        />
        <Route
          path="/user/insurance/intelligence-public-expense/register"
          element={<IntelligencePublicExpenseRegister />}
        />
        <Route
          path="/user/insurance/intelligence-public-expense/:id"
          element={<IntelligencePublicExpenseDetail />}
        />
        <Route
          path="/user/insurance/intelligence-public-expense/update"
          element={<IntelligencePublicExpenseUpdate />}
        />
        <Route
          path="/user/insurance/specific-disease-medical-treatment"
          element={<SpecificDiseaseMedicalTreatmentInformation />}
        />
        <Route
          path="/user/insurance/long-term-care-insurance"
          element={<LongTermCareInsuranceInformation />}
        />
        <Route
          path="/user/insurance/latter-stage-elderly/register"
          element={<LatterStageElderlyInformationRegister />}
        />
        <Route
          path="/user/insurance/latter-stage-elderly/:id"
          element={<LatterStageElderlyInformationDetail />}
        />
        <Route
          path="/user/insurance/latter-stage-elderly/update"
          element={<LatterStageElderlyInformationUpdate />}
        />
        <Route
          path="/user/instructions/home-visit-nursing-instruct-info"
          element={<HomevisitNursingInstructionInformation />}
        />
        <Route
          path="/user/instructions/home-visit-nursing-instruct-info/register"
          element={<HomevisitNursingInstructionInformationRegister />}
        />
        <Route
          path="/user/instructions/home-visit-nursing-instruct-info/:id"
          element={<HomevisitNursingInstructionInformationDetail />}
        />

        <Route
          path="/user/insurance-expense-info"
          element={<InsuranceExpenseInfo />}
        />
        <Route path="/user/account-info" element={<AccountInfo />} />
        <Route path="/user/billing-info" element={<BillingInfo />} />
        <Route
          path="/user/account-info/update"
          element={<AccountInfoUpdate />}
        />
        <Route
          path="/user/insurance/medical-insurance"
          element={<InsurancePublicExpenseInformation />}
        />
        <Route
          path="/user/insurance/elderly-beneficiary"
          element={<ElderlyBeneficiaryInformation />}
        />
        <Route
          path="/user/insurance/elderly-beneficiary-info/register"
          element={<ElderlyBeneficiaryInformationRegister />}
        />
        <Route
          path="/user/insurance/elderly-beneficiary-info/0"
          element={<ElderlyBeneficiaryInformationDetail />}
        />
        <Route
          path="/user/insurance/elderly-beneficiary-info/update"
          element={<ElderlyBeneficiaryInformationUpdate />}
        />
        <Route
          path="/user/insurance/limit-identification"
          element={<LimitCertificationInformation />}
        />
        <Route
          path="/user/insurance/limit-identification/register"
          element={<LimitCertificationInformationRegister />}
        />
        <Route
          path="/user/insurance/limit-identification/:id"
          element={<LimitCertificationInformationDetail />}
        />
        <Route
          path="/user/insurance/limit-identification/update"
          element={<LimitCertificationInformationUpdate />}
        />
        <Route
          path="/user/insurance/additional-information"
          element={<AdditionalInformation />}
        />
        <Route
          path="/user/insurance/additional-information/register"
          element={<AdditionalInformationRegister />}
        />
        <Route
          path="/user/insurance/latter-stage-elderly"
          element={<LatterStageElderlyInformation />}
        />
        <Route
          path="/user/insurance/specific-disease-medical-treatment"
          element={<SpecificDiseaseMedicalTreatmentInformation />}
        />
        <Route
          path="/user/insurance/long-term-care-insurance"
          element={<LongTermCareInsuranceInformation />}
        />
        <Route
          path="/user/insurance/medical-insurance/register"
          element={<InsurancePublicExpenseInformationRegister />}
        />
        <Route
          path="/user/insurance/medical-insurance/:id"
          element={<InsurancePublicExpenseInformationDetail />}
        />

        <Route
          path="/user/insurance/medical-insurance/update"
          element={<InsurancePublicExpenseInformationUpdate />}
        />

        <Route path="/user/summary" element={<UserSummary />} />

        <Route
          path="/nurse/nursing-summary-list"
          element={<NursingSummaryList />}
        />
        <Route
          path="/nurse/nursing-summary-info"
          element={<NursingSummaryInfo />}
        />
        <Route path="/nurse/image-info" element={<ImageInfo />} />
        <Route
          path="/nurse/nursing-summary-info-update"
          element={<NursingSummaryInfoUpdate />}
        />
        <Route
          path="/nurse/nursing-summary-list-register"
          element={<NursingSummaryListRegister />}
        />
        <Route path="/nurse/image-info-manage" element={<ImageManageNurse />} />

        <Route path="/user/summary" element={<UserSummary />} />

        <Route
          path="/user/insurance/specific-disease-medical-treatment/:id"
          element={<SpecificDiseaseMedicalTreatmentInformationDetail />}
        />
        <Route
          path="/user/insurance/specific-disease-medical-treatment/update"
          element={<SpecificDiseaseMedicalTreatmentInformationUpdate />}
        />
        <Route
          path="/user/insurance/specific-disease-medical-treatment/register"
          element={<SpecificDiseaseMedicalTreatmentInformationRegister />}
        />
        <Route
          path="/user/insurance/long-term-care-insurance/register"
          element={<LongTermCareInsuranceInformationRegister />}
        />
        <Route
          path="/user/insurance/long-term-care-insurance/update"
          element={<LongTermCareInsuranceInformationUpdate />}
        />
        <Route
          path="/user/insurance/long-term-care-insurance/:id"
          element={<LongTermCareInsuranceInformationDetail />}
        />
        {/* file manage */}
        <Route path="/file/file-search" element={<FL0010 />} />
        <Route path="/user/inter-staff" element={<InterStaff />} />
        <Route path="/file/prefer-file/:id" element={<FL0030 />} />
        <Route
          path="/file/prefer-file/update/:id"
          element={<FL0040 />}
        />
        <Route path="/file/file-create" element={<FL0050 />} />

        <Route path="/file/file-image" element={<IG0010 />} />
        <Route path="/user/inter-staff/create" element={<InterStaffCreateNew />} />
        <Route path="/user/inter-staff/:id" element={<InterStaffDetail />} />
        <Route path="/file/file-image/:id" element={<IG0030 />} />
        <Route
          path="/file/file-image/update/:id"
          element={<IG0040 />}
        />
        <Route path="/file/file-image-create" element={<IG0050 />} />


        <Route path="/user/search-screen" element={<TR0010 />} />
        <Route path="/user/search-screen/:id" element={<TR0020 />} />
        <Route path="/user/search-screen/update" element={<TR0030 />} />
        <Route path="/user/search-screen/register" element={<TR0040 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
