import React, { FC } from 'react';
import classNames from 'classnames';

import { StarProps, Variant, Size } from './Star.types';
import './Star.scss';

export const Star: FC<StarProps> & { variant: typeof Variant; size: typeof Size } = ({
  variant = Variant.EMPTY,
  size = Size.SMALL,
}) => (
  <svg
    className={classNames('star', {
      'star--big': size === Size.BIG,
    })}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {variant === Variant.EMPTY && (
      <path
        data-testid="star-empty"
        d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
        stroke="#002B56"
      />
    )}
    {variant === Variant.FULL && (
      <path
        data-testid="star-full"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99999 0.140015L12.76 7.54001H19.76L13.86 11.98L16.72 19.44L9.99999 14.4L3.29999 19.44L6.13999 11.98L0.23999 7.54001H7.21999L9.99999 0.140015Z"
        fill="#002B56"
      />
    )}
    {variant === Variant.HALF && (
      <>
        <path
          data-testid="star-half"
          d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
          stroke="#002B56"
        />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
          <path
            d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
            fill="white"
            stroke="white"
          />
        </mask>
        <g mask="url(#mask0)">
          <rect width="10" height="20" fill="#002B56" />
        </g>
      </>
    )}
  </svg>
);

Star.variant = Variant;
Star.size = Size;
