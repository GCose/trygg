/**=======================
 * REVIEWS INTERFACES
 =======================*/
export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  reviewText: string;
  driverName: string;
  date: string;
  createdAt: string;
}

export interface StarRatingBreakdown {
  fiveStars: number;
  fourStars: number;
  threeStars: number;
  twoStars: number;
  oneStar: number;
}

export interface OverallRating {
  averageRating: number;
  totalRatings: number;
  breakdown: StarRatingBreakdown;
}

export interface TopDriver {
  id: string;
  driverId: string;
  name: string;
  avatar: string;
  rating: number;
  totalTrips: number;
  totalEarning: number;
  rank: number;
}

export interface ReviewsPageData {
  overallRating: OverallRating;
  reviews: Review[];
  topDrivers: TopDriver[];
}
