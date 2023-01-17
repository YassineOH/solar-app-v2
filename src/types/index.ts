export interface Root {
  inputs: Inputs;
  outputs: Outputs;
  meta: Meta;
}

export interface Inputs {
  location: Location;
  meteo_data: MeteoData;
  mounting_system: MountingSystem;
  pv_module: PvModule;
  economic_data: EconomicData;
}

export interface Location {
  latitude: number;
  longitude: number;
  elevation: number;
}

export interface MeteoData {
  radiation_db: string;
  meteo_db: string;
  year_min: number;
  year_max: number;
  use_horizon: boolean;
  horizon_db: string;
}

export interface MountingSystem {
  fixed: Fixed;
}

export interface Fixed {
  slope: Slope;
  azimuth: Azimuth;
  type: string;
}

export interface Slope {
  value: number;
  optimal: boolean;
}

export interface Azimuth {
  value: number;
  optimal: boolean;
}

export interface PvModule {
  technology: string;
  peak_power: number;
  system_loss: number;
}

export interface EconomicData {
  system_cost: any;
  interest: any;
  lifetime: any;
}

export interface Outputs {
  monthly: Monthly;
  totals: Totals;
}

export interface Monthly {
  fixed: Fixed2[];
}

export interface Fixed2 {
  month: number;
  E_d: number;
  E_m: number;
  "H(i)_d": number;
  "H(i)_m": number;
  SD_m: number;
}

export interface Totals {
  fixed: Fixed3;
}

export interface Fixed3 {
  E_d: number;
  E_m: number;
  E_y: number;
  "H(i)_d": number;
  "H(i)_m": number;
  "H(i)_y": number;
  SD_m: number;
  SD_y: number;
  l_aoi: number;
  l_spec: string;
  l_tg: number;
  l_total: number;
}

export interface Meta {
  inputs: Inputs2;
  outputs: Outputs2;
}

export interface Inputs2 {
  location: Location2;
  meteo_data: MeteoData2;
  mounting_system: MountingSystem2;
  pv_module: PvModule2;
  economic_data: EconomicData2;
}

export interface Location2 {
  description: string;
  variables: Variables;
}

export interface Variables {
  latitude: Latitude;
  longitude: Longitude;
  elevation: Elevation;
}

export interface Latitude {
  description: string;
  units: string;
}

export interface Longitude {
  description: string;
  units: string;
}

export interface Elevation {
  description: string;
  units: string;
}

export interface MeteoData2 {
  description: string;
  variables: Variables2;
}

export interface Variables2 {
  radiation_db: RadiationDb;
  meteo_db: MeteoDb;
  year_min: YearMin;
  year_max: YearMax;
  use_horizon: UseHorizon;
  horizon_db: HorizonDb;
}

export interface RadiationDb {
  description: string;
}

export interface MeteoDb {
  description: string;
}

export interface YearMin {
  description: string;
}

export interface YearMax {
  description: string;
}

export interface UseHorizon {
  description: string;
}

export interface HorizonDb {
  description: string;
}

export interface MountingSystem2 {
  description: string;
  choices: string;
  fields: Fields;
}

export interface Fields {
  slope: Slope2;
  azimuth: Azimuth2;
}

export interface Slope2 {
  description: string;
  units: string;
}

export interface Azimuth2 {
  description: string;
  units: string;
}

export interface PvModule2 {
  description: string;
  variables: Variables3;
}

export interface Variables3 {
  technology: Technology;
  peak_power: PeakPower;
  system_loss: SystemLoss;
}

export interface Technology {
  description: string;
}

export interface PeakPower {
  description: string;
  units: string;
}

export interface SystemLoss {
  description: string;
  units: string;
}

export interface EconomicData2 {
  description: string;
  variables: Variables4;
}

export interface Variables4 {
  system_cost: SystemCost;
  interest: Interest;
  lifetime: Lifetime;
}

export interface SystemCost {
  description: string;
  units: string;
}

export interface Interest {
  description: string;
  units: string;
}

export interface Lifetime {
  description: string;
  units: string;
}

export interface Outputs2 {
  monthly: Monthly2;
  totals: Totals2;
}

export interface Monthly2 {
  type: string;
  timestamp: string;
  variables: Variables5;
}

export interface Variables5 {
  E_d: ED;
  E_m: EM;
  "H(i)_d": HID;
  "H(i)_m": HIM;
  SD_m: SdM;
}

export interface ED {
  description: string;
  units: string;
}

export interface EM {
  description: string;
  units: string;
}

export interface HID {
  description: string;
  units: string;
}

export interface HIM {
  description: string;
  units: string;
}

export interface SdM {
  description: string;
  units: string;
}

export interface Totals2 {
  type: string;
  variables: Variables6;
}

export interface Variables6 {
  E_d: ED2;
  E_m: EM2;
  E_y: EY;
  "H(i)_d": HID2;
  "H(i)_m": HIM2;
  "H(i)_y": HIY;
  SD_m: SdM2;
  SD_y: SdY;
  l_aoi: LAoi;
  l_spec: LSpec;
  l_tg: LTg;
  l_total: LTotal;
}

export interface ED2 {
  description: string;
  units: string;
}

export interface EM2 {
  description: string;
  units: string;
}

export interface EY {
  description: string;
  units: string;
}

export interface HID2 {
  description: string;
  units: string;
}

export interface HIM2 {
  description: string;
  units: string;
}

export interface HIY {
  description: string;
  units: string;
}

export interface SdM2 {
  description: string;
  units: string;
}

export interface SdY {
  description: string;
  units: string;
}

export interface LAoi {
  description: string;
  units: string;
}

export interface LSpec {
  description: string;
  units: string;
}

export interface LTg {
  description: string;
  units: string;
}

export interface LTotal {
  description: string;
  units: string;
}
