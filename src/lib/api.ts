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
  gdImage1: string;
  gdImage2: string;
  gdImage3: string;
  gdImage4: string;
  gdImage5: string;
  image2: string;
  image2Title: string;
  image2Description: string;
  image3: string;
  image3Title: string;
  image3Description: string;
  image4: string;
}

export interface OffRoadData {
  bannerImage: string;
  bannerTitle: string;
  bannerDescription: string;
  image1: string;
  image1Title: string;
  image1Description: string;
  image1MainDescription: string;
  image2: string;
  image2Title: string;
  image2Description: string;
  image3: string;
  image3Title: string;
  image3Description: string;
}

export interface ResearchDevelopmentData {
  banner_image: string;
  banner_title: string;
  section1_title: string;
  section1_short_description_1: string;
  section1_short_description_2: string;
  section2_title: string;
  section2_description: string;
  section3_image: string;
  section3_title: string;
  section3_description: string;
  section4_left_title: string;
  section4_left_description: string;
  section4_left_image: string;
  section4_right_title: string;
  section4_right_description: string;
  section4_right_image: string;
  section5_title: string;
  section5_description: string;
  section6_title: string;
  section6_description: string;
  section7_title: string;
  section7_description: string;
  section7_image: string;
  section8_main_title: string;
  section8_left_title: string;
  section8_left_description: string;
  section8_left_image: string;
  section8_left_image1: string;
  section8_right_title: string;
  section8_right_description: string;
  section8_right_image: string;
  section9_title: string;
  section9_description: string;
  section9_image: string;
  section10_title: string;
  section10_short_description: string;
  section10_right_description: string;
  section10_image: string;
  section11_title: string;
  section11_image: string;
  section12_main_title: string;
  section12_image: string;
  section12_title: string;
  section12_description: string;
  section13_main_title: string;
  section13_main_description: string;
  section13_left_image: string;
  section13_right_description: string;
  section14_title: string;
  section14_description: string;
  section14_image: string;
}

export interface HistoryItem {
  id: number;
  year: string;
  description: string;
  description_ar?: string;
  image: string;
}

export interface VisionItem {
  id: number;
  title: string;
  title_ar?: string;
  subTitle: string;
  subTitle_ar?: string;
  image: string;
}

export interface OverviewData {
  banner_image: string;
  banner_title: string;
  banner_description: string;
  section1_image: string;
  section1_title: string;
  section1_description: string;
  section2_image: string;
  section2_image_title1: string;
  section2_image_title2: string;
  section2_title: string;
  section2_description: string;
  section3_image: string;
  section3_title1: string;
  section3_description1: string;
  section3_title2: string;
  section3_description2: string;
  section3_description3: string;
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
