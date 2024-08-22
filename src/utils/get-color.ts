export const getColor = (name: string): string => {
  switch (name?.toLowerCase()) {
    case 'pending':
    case 'created':
    case 'suspended':
      return '#F5A623';
    case 'verified':
    case 'completed':
    case 'successful':
    case 'active':
      return '#00AF94';
    case 'failed':
    case 'flagged':
      return '#D0021B';
    case 'initiated':
      return '#F5A623';
    case 'inprogress':
      return '#FFA07A';
    default:
      return 'transparent';
  }
};
export const getVerificationAccordionColor = (name: string): string => {
  switch (name?.toLowerCase()) {
    case 'pending':
    case 'created':
      return 'rgba(245, 166, 35, 0.2)';
    case 'verified':
    case 'completed':
      return 'rgba(0, 175, 148, 0.2)';
    case 'failed':
      return '#D0021B';
    case 'initiated':
      return '#F5A623';
    case 'inprogress':
      return '#FFA07A';
    default:
      return 'transparent';
  }
};

export const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'pending':
      return {
        bg: '#E9F1FE',
        text: '#2075F6',
      };
    case 'completed':
      return {
        bg: '#E8FFEA',
        text: '#169D00',
      };
    case 'cancelled':
      return {
        bg: '#FFEAEA',
        text: '#D50000',
      };
  }
};
