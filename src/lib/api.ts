export interface HomepageData {
  logo: string;
  banner_image1: string;
  banner_image1_mobile: string;
  banner_image1_title: string;
  banner_image1_description: string;
  banner_image1_button1: string;
  banner_image1_button1_url: string;
  banner_image1_button2: string;
  banner_image1_button2_url: string;
  banner_image2: string;
  banner_image2_mobile: string;
  banner_image2_title: string;
  banner_image2_description: string;
  banner_image2_button1: string;
  banner_image2_button1_url: string;
  banner_image2_button2: string;
  banner_image2_button2_url: string;
  banner_image3: string;
  banner_image3_mobile: string;
  banner_image3_title: string;
  banner_image3_description: string;
  banner_image3_button1: string;
  banner_image3_button1_url: string;
  banner_image3_button2: string;
  banner_image3_button2_url: string;
  facebook_link: string;
  instagram_link: string;
  linkedin_link: string;
  meta_title: string;
  meta_description: string;
}

export interface ModelCategory {
  id: number;
  name: string;
  name_ar: string;
}

export type VehicleBrand = "BAIC" | "Arcfox";

export interface VehicleModel {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  image1: string;
  power: string;
  torque: string;
  wheelbase: string;
  categoryId: number;
  brand?: VehicleBrand;
  modelCategory?: ModelCategory;
}

export interface CapitalBeautyData {
  bannerImage: string;
  bannerTitle: string;
  bannerSubTitle: string;
  image1: string;
  image1Description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}

export interface ModelColor {
  id: number;
  color: string;
  image: string;
  modelId: number;
  model: VehicleModel;
}
