import { SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

function Logo() {
  return (
    <SvgIcon sx={{ fontSize: 32, mr: 1 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 512">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFD700' }} />
            <stop offset="100%" style={{ stopColor: '#DAA520' }} />
          </linearGradient>
        </defs>
        <path 
          d="M0 0 C0.99 0 1.98 0 3 0 C3.00386719 1.19882813 3.00386719 1.19882813 3.0078125 2.421875 C3.33576997 11.73586712 5.22766498 20.01712079 11.859375 26.94140625 C19.90607308 33.36267132 29.36681958 35.75243113 39.25 37.8125 C59.55512664 42.28853956 80.3533626 47.23551747 95 63 C96.27734375 65.2734375 96.27734375 65.2734375 97 67 C97.66 67 98.32 67 99 67 C110.0185487 81.2296686 111.12427557 98.76215468 110 116 C108.14743267 130.13617095 100.38468695 143.56000689 91 154 C90.22269531 154.91652344 90.22269531 154.91652344 89.4296875 155.8515625 C78.97234682 167.35989219 62.58427094 175.17459593 47.14526367 176.2746582 C39.54509897 176.32457642 39.54509897 176.32457642 36.47436523 176.31567383 C34.20312101 176.31252168 31.93319254 176.33599823 29.66210938 176.36132812 C21.38688733 176.39858324 13.84871444 175.86690546 6 173 C5.28078369 172.73936768 4.56156738 172.47873535 3.82055664 172.21020508 C1.83147973 171.44276221 -0.1154175 170.61807532 -2.0625 169.75 C-3.08210815 169.29874756 -3.08210815 169.29874756 -4.12231445 168.83837891 C-12.0750556 165.2050511 -19.13699579 160.55276941 -25 154 C-25.66 153.278125 -26.32 152.55625 -27 151.8125 C-33.85347738 142.17479744 -35.78531675 133.7096337 -35 122 C-33.60351355 115.64393298 -30.08621691 109.1614502 -25 105 C-24.34 105 -23.68 105 -23 105 C-23 104.34 -23 103.68 -23 103 C-14.81061878 98.94154559 -6.9597194 97.19024228 1.984375 99.90625 C4.37692204 100.85245504 6.69542801 101.85791123 9 103 C9 103.66 9 104.32 9 105 C9.86625 105.2784375 9.86625 105.2784375 10.75 105.5625 C14.58548809 108.01295073 15.9947826 111.9895652 18 116 C18.55625861 123.04950817 18.39759878 128.74841825 15 135 C14.67 135.66 14.34 136.32 14 137 C13.34 137 12.68 137 12 137 C12 137.66 12 138.32 12 139 C7.1211579 142.39397711 3.48900011 143.69368301 -2.48828125 143.46484375 C-6.57346284 142.70879926 -9.94964753 140.81177742 -13 138 C-13 137.34 -13 136.68 -13 136 C-13.66 136 -14.32 136 -15 136 C-17.24176663 130.25547302 -18.00227234 125.60590808 -15.75 119.75 C-12.99315068 115.41780822 -12.99315068 115.41780822 -10 114 C-6.89102247 113.47503194 -4.09991706 113.38664743 -1 114 C2 116.4375 2 116.4375 4 119 C4.33 119.33 4.66 119.66 5 120 C5.59259259 127.11111111 5.59259259 127.11111111 3 131 C2.34 131.66 1.68 132.32 1 133 C3.80397849 131.59801075 5.65504014 130.53311978 7.375 127.875 C8.54013003 122.51540184 8.06750577 117.79188469 5.25 113.0625 C0.67780136 108.87131791 -3.61821913 108.63214347 -9.625 108.73046875 C-12.65446083 109.07427269 -14.58045584 110.18534188 -17 112 C-17.66 112 -18.32 112 -19 112 C-22.57450645 119.62561375 -22.67180935 127.10713201 -20 135 C-12.79990935 149.0332977 -0.82263951 155.92434788 13.60546875 161.01953125 C30.07342709 165.7760992 48.81729665 163.54071369 63.859375 155.46484375 C77.84328716 146.98564839 86.1001153 135.79406987 90.53051758 120.12353516 C93.78060664 105.4229243 90.96477404 89.41511598 82.9375 76.8125 C80.8491304 73.94166634 78.56109184 71.4625883 76 69 C76 68.34 76 67.68 76 67 C75.34 67 74.68 67 74 67 C74 66.34 74 65.68 74 65 C73.25234375 64.72671875 72.5046875 64.4534375 71.734375 64.171875 C69.18745024 63.08033582 67.42958949 61.92522167 65.25 60.25 C50.49814736 50.22756191 31.26620824 47.83976722 13.8984375 47.2109375 C7.46225251 46.86268701 7.46225251 46.86268701 5 46 C-2.81358792 35.95395839 -3.80318855 22.1549201 -3 10 C-1.81875 1.81875 -1.81875 1.81875 0 0 Z" 
          fill="url(#goldGradient)" 
          transform="translate(199,220)"
        />
      </svg>
    </SvgIcon>
  );
}

export default Logo;