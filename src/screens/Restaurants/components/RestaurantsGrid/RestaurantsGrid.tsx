import React, { FC } from 'react';

import { RestaurantCard } from '../RestaurantCard/RestaurantCard';

import { Grid } from 'shared/components/Grid/Grid';
import './RestaurantsGrid.scss';
import { RestaurantsGridProps } from './RestaurantsGrid.types';

export const RestaurantsGrid: FC<RestaurantsGridProps> = ({ restaurants }) => (
  <Grid.Row>
    <main className="restaurants-grid">
      <h2 className="restaurants-grid__title">All Restaurants</h2>
      <div className="restaurants-grid__restaurants">
        {restaurants.map(restaurantInfo => (
          <div key={restaurantInfo.id} className="restaurants-grid__card-wrapper">
            <RestaurantCard {...restaurantInfo} />
          </div>
        ))}
      </div>
    </main>
  </Grid.Row>
);
