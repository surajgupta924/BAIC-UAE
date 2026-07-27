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

export interface ConceptCarData {
  bannerImage: string;
  section_1_image: string;
  section_1_title: string;
  section_1_description: string;
  section_2_image: string;
  section_2_description: string;
  section_4_main_description: string;
  section_5_description: string;
  section_6_description: string;
  section_7_image: string;
  section_7_title: string;
  section_7_description: string;
  section_8_image: string;
  section_8_description: string;
  section_9_image: string;
  section_9_title: string;
  section_10_image1: string;
  section_10_title1: string;
  section_10_image2: string;
  section_10_title2: string;
  section_10_image3: string;
  section_10_title3: string;
  section_10_image4: string;
  section_10_title4: string;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
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
