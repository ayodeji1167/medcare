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

export const lineChartData = [
  {
    name: 'Mobile apps',
    data: [1500, 800, 1600, 220, 1750, 900, 2000, 1000, 2500],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3, // Set the line thickness to 3px
  },
  xaxis: {
    type: 'datetime',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: 'black',
        fontSize: '8px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: 'black',
        fontSize: '8px',
      },
      offsetX: -10, // Adjust this value to move the labels closer to the left
    },
    tickAmount: 6, // To ensure the y-axis increments by 400 (0, 400, 800, ... 2400)
    min: 0,
    max: 2400,
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 3,
    borderColor: '#98C0FB', // Set the grid line color
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
        width: 3, // Set the width of the horizontal grid lines to 3px
      },
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
      colorStops: [
        {
          offset: 0,
          color: '#2075F680', // End color of gradient (#2075F680)

          opacity: 0,
        },
        {
          offset: 81.34,
          color: '#ffffff', // Start color of gradient (white)
          opacity: 0.5,
        },
      ],
    },
  },
  colors: ['#2075F6'], // Set the line color to #2075F6
};
