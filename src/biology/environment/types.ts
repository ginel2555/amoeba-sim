import { Vector3 } from 'three';

export interface EnvironmentalState {
    temperature: number;
    osmoticPressure: number;
    pH: number;
    gradients: Map<string, ChemicalGradient>;
}

export interface ChemicalGradient {
    concentration: number;
    diffusionRate: number;
    position: Vector3;
}

export enum StressResponse {
    HEAT_SHOCK_PROTEINS = 'HEAT_SHOCK_PROTEINS',
    PH_REGULATION = 'PH_REGULATION',
    OSMOTIC_REGULATION = 'OSMOTIC_REGULATION'
}

export interface Stressor {
    type: string;
    intensity: number;
    duration: number;
}