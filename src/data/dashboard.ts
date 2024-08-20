import { ReactComponent as TotalIcon } from '@/assets/icons/dashboard/total-patients.svg';
import { ReactComponent as NewIcon } from '@/assets/icons/dashboard/new-patient.svg';
import { ReactComponent as AdmittedIcon } from '@/assets/icons/dashboard/admitted-patients.svg';
import { ReactComponent as DischargedIcon } from '@/assets/icons/dashboard/discharged-patients.svg';
export const stats = [
  {
    description: 'Total patient',
    value: '1456',
    percentage: '10.6',
    icon: TotalIcon,
    increased: true,
  },
  {
    description: 'New patient',
    value: '159',
    percentage: '2.5',
    icon: NewIcon,
    increased: true,
  },
  {
    description: 'Admitted patient',
    value: '348',
    percentage: '2',
    icon: AdmittedIcon,
    increased: false,
  },
  {
    description: 'Discharged patient',
    value: '290',
    percentage: '20.6',
    icon: DischargedIcon,
    increased: true,
  },
];
